import React, { useEffect, useState } from 'react';
import productService from '../../services/productService';
import {
  ProductDetailActions,
  ProductDetailCartButton,
  ProductDetailContainer,
  ProductDetailIconButton,
  ProductDetailImage,
  ProductDetailImageContainer,
  ProductDetailQuantityBox,
  ProductInfoContainer
} from './ProductDetail.styles';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useCart } from '../../context/CartContext';
import cartService from '../../services/cartService';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { COLORS } from '../../utils/constants';
import { useWishList } from '../../context/WishListContext';
import wishListService from '../../services/wishListService';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSnackbar } from '../../context/SnackbarContext';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ROUTES, { getRoute } from '../../pages/routes';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { openSnackbar } = useSnackbar();
  const { cart, setCart } = useCart();
  const { wishList, setWishList } = useWishList();
  const { user } = useUser();

  const isAdmin = user && user.role === 'ADMIN';

  const navigate = useNavigate();

  const cartItem = cart.items?.find(item => item.product?.id === product?.id);

  const addProductToCart = () => {
    cartService
      .addProductToCart(product)
      .then(res => {
        refreshCart();
      })
      .catch(e => {
        openSnackbar('Error al agregar el producto al carrito', 'error');
      });
  };

  const removeProductFromCart = () => {
    cartService
      .removeProductFromCart(product)
      .then(res => {
        refreshCart();
      })
      .catch(e => {
        openSnackbar('Error al quitar el producto del carrito', 'error');
      });
  };

  const removeItemFromCart = () => {
    cartService
      .removeItemFromCart(product)
      .then(res => {
        refreshCart();
      })
      .catch(e => {
        openSnackbar('Error al quitar el item del carrito', 'error');
      });
  };

  const refreshCart = () => {
    cartService
      .getUserCart()
      .then(data => {
        setCart(data);
      })
      .catch(e => {
        openSnackbar('Error al refrescar el carrito', 'error');
      });
  };

  const isInWishList = wishList.some(
    wishListItem => wishListItem.product?.id === product?.id
  );

  const handleToggleWishList = () => {
    if (!isInWishList) {
      wishListService
        .addProductToWishList(product)
        .then(res => {
          refreshWishList();
        })
        .catch(e => {
          openSnackbar('Error al agregar a favoritos', 'error');
        });
    } else {
      wishListService
        .removeProductFromWishList(product)
        .then(res => {
          refreshWishList();
        })
        .catch(e => {
          openSnackbar('Error al quitar de favoritos', 'error');
        });
    }
  };

  const refreshWishList = () => {
    wishListService
      .getUserWishList()
      .then(userWishList => {
        setWishList(userWishList);
      })
      .catch(e => {
        openSnackbar('Error al refrescar los favoritos', 'error');
      });
  };

  useEffect(() => {
    setLoading(true);
    try {
      productService.getProductById(id).then(product => {
        setProduct(product);
        setLoading(false);
      });
    } catch (e) {
      openSnackbar('Error obteniendo los datos del producto', 'error');
    }
  }, [id, openSnackbar]);

  return (
    <ProductDetailContainer>
      {loading ? (
        <p>Cargando...</p>
      ) : product ? (
        <>
          <ProductDetailImageContainer>
            <ProductDetailImage src={product.images[0]} />
          </ProductDetailImageContainer>
          <ProductInfoContainer>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              {product.featured ? (
                <StarIcon style={{ fill: COLORS.yellow }} fontSize='large' />
              ) : (
                <StarBorderIcon fontSize='large' />
              )}

              {isAdmin && (
                <ProductDetailIconButton
                  onClick={() => {
                    navigate(getRoute(ROUTES.EDITPRODUCT, { id: product.id }));
                  }}>
                  <ModeEditIcon />
                </ProductDetailIconButton>
              )}
            </Box>

            <Typography variant='h4'>{product.title}</Typography>
            <Typography variant='body1'>{product.description}</Typography>
            <Typography variant='h6'>Stock: {product.stock}</Typography>
            <Typography variant='h5'>${product.price}</Typography>
            <ProductDetailActions>
              <ProductDetailIconButton onClick={handleToggleWishList}>
                {isInWishList ? (
                  <FavoriteIcon style={{ fill: COLORS.red }} fontSize='large' />
                ) : (
                  <FavoriteBorderIcon fontSize='large' />
                )}
              </ProductDetailIconButton>
              <ProductDetailQuantityBox
                style={{
                  border: cartItem?.quantity > product.stock ? '1px solid red' : '',
                  borderRadius: '5px'
                }}>
                {cartItem ? (
                  <>
                    <Typography
                      style={{
                        marginLeft: '10px',
                        color: cartItem.quantity > product.stock ? 'red' : ''
                      }}>
                      En el carrito:
                    </Typography>
                    <ProductDetailCartButton
                      onClick={removeProductFromCart}
                      style={{
                        minWidth: '40px',
                        color: cartItem.quantity > product.stock ? 'red' : ''
                      }}>
                      {'-'}
                    </ProductDetailCartButton>
                    <Typography
                      variant='h6'
                      style={{
                        color: cartItem.quantity > product.stock ? 'red' : 'black'
                      }}>
                      {cartItem.quantity}
                    </Typography>
                    <ProductDetailCartButton
                      onClick={addProductToCart}
                      style={{
                        minWidth: '40px',
                        color: cartItem.quantity > product.stock ? 'red' : ''
                      }}>
                      {'+'}
                    </ProductDetailCartButton>
                    <IconButton onClick={removeItemFromCart}>
                      <DeleteForeverIcon
                        style={{ fill: COLORS.red }}
                        fontSize='large'
                      />
                    </IconButton>
                  </>
                ) : (
                  <ProductDetailCartButton onClick={addProductToCart}>
                    <Typography variant='h6'>Add to cart</Typography>
                  </ProductDetailCartButton>
                )}
              </ProductDetailQuantityBox>
            </ProductDetailActions>
          </ProductInfoContainer>
        </>
      ) : (
        <>El producto no existe</>
      )}
    </ProductDetailContainer>
  );
};

export default ProductDetail;
