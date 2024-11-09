import React, { useEffect, useState } from 'react';
import productService from '../../services/productService';
import { useUser } from '../../context/UserContext';
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
import { Badge, Box, Button, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import cartService from '../../services/cartService';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { COLORS } from '../../utils/constants';
import { useWishList } from '../../context/WishListContext';
import wishListService from '../../services/wishListService';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { cart, setCart } = useCart();
  const { wishList, setWishList } = useWishList();

  const cartItem = cart.items.find(item => item.product?.id === product?.id);

  const addProductToCart = () => {
    cartService.addProductToCart(product).then(res => {
      refreshCart();
    });
  };

  const removeProductFromCart = () => {
    cartService.removeProductFromCart(product).then(res => {
      refreshCart();
    });
  };

  const removeItemFromCart = () => {
    cartService.removeItemFromCart(product).then(res => {
      refreshCart();
    });
  };

  const refreshCart = () => {
    cartService.getUserCart().then(data => {
      setCart(data);
    });
  };

  const isInWishList = wishList.some(
    wishListItem => wishListItem.product?.id === product?.id
  );

  const handleToggleWishList = () => {
    if (!isInWishList) {
      wishListService.addProductToWishList(product).then(res => {
        refreshWishList();
      });
    } else {
      wishListService.removeProductFromWishList(product).then(res => {
        refreshWishList();
      });
    }
  };

  const refreshWishList = () => {
    wishListService.getUserWishList().then(userWishList => {
      setWishList(userWishList);
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
      setLoading(false);
    }
  }, [id]);

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
            {product.featured ? (
              <StarIcon style={{ fill: COLORS.yellow }} fontSize='large' />
            ) : (
              <StarBorderIcon fontSize='large' />
            )}
            <Typography variant='h4'>{product.title}</Typography>
            <Typography variant='body1'>{product.description}</Typography>
            <Typography variant='h5'>${product.price}</Typography>
            <ProductDetailActions>
              <ProductDetailIconButton onClick={handleToggleWishList}>
                {isInWishList ? (
                  <FavoriteIcon style={{ fill: COLORS.red }} fontSize='large' />
                ) : (
                  <FavoriteBorderIcon fontSize='large' />
                )}
              </ProductDetailIconButton>
              <ProductDetailQuantityBox>
                {cartItem ? (
                  <>
                    <Typography>En el carrito:</Typography>
                    <ProductDetailCartButton onClick={removeProductFromCart}>
                      {'-'}
                    </ProductDetailCartButton>
                    <Typography variant='h6'>{cartItem.quantity}</Typography>
                    <ProductDetailCartButton onClick={addProductToCart}>
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
