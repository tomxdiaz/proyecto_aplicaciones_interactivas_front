import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useSnackbar } from '../../context/SnackbarContext';
import { useUser } from '../../context/UserContext';
import { useWishList } from '../../context/WishListContext';
import ROUTES, { getRoute } from '../../pages/routes';
import cartService from '../../services/cartService';
import productService from '../../services/productService';
import wishListService from '../../services/wishListService';
import { COLORS } from '../../utils/constants';
import {
  ProductDetailActions,
  ProductDetailCartButton,
  ProductDetailContainer,
  ProductDetailIconButton,
  ProductDetailImage,
  ProductDetailImageContainer,
  ProductDetailImagesContainer,
  ProductDetailQuantityBox,
  ProductDetailThumbnail,
  ProductDetailThumbnailContainer,
  ProductDetailThumbnailsList,
  ProductInfoContainer
} from './ProductDetail.styles';

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { openSnackbar } = useSnackbar();
  const { cart, setCart } = useCart();
  const { wishList, setWishList } = useWishList();
  const { user } = useUser();
  const [selectedImage, setSelectedImage] = useState();

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
    productService
      .getProductById(id)
      .then(product => {
        setProduct(product);
        setLoading(false);
      })
      .catch(e => {
        openSnackbar('Error obteniendo los datos del producto', 'error');
        setLoading(false);
      });
  }, [id, openSnackbar]);

  return (
    <ProductDetailContainer>
      {loading ? (
        <p>Cargando...</p>
      ) : product ? (
        <>
          <ProductDetailImagesContainer>
            <ProductDetailImageContainer>
              <ProductDetailImage src={selectedImage ?? product.images[0]} />
            </ProductDetailImageContainer>
            <ProductDetailThumbnailsList>
              {product.images?.map(image => {
                return (
                  <ProductDetailThumbnailContainer key={image}>
                    <ProductDetailThumbnail
                      onClick={() => setSelectedImage(image)}
                      src={image}
                    />
                  </ProductDetailThumbnailContainer>
                );
              })}
            </ProductDetailThumbnailsList>
          </ProductDetailImagesContainer>
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
                  </>
                ) : (
                  <ProductDetailCartButton onClick={addProductToCart}>
                    <Typography variant='h6'>Add to cart</Typography>
                  </ProductDetailCartButton>
                )}
              </ProductDetailQuantityBox>
              {cartItem && (
                <IconButton onClick={removeItemFromCart}>
                  <DeleteForeverIcon style={{ fill: COLORS.red }} fontSize='large' />
                </IconButton>
              )}
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
