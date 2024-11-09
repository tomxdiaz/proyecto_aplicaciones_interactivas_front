import * as React from 'react';
import { Badge, Box, CardActions, IconButton } from '@mui/material';
import {
  CustomCard,
  CustomCardActionArea,
  CustomCardImage,
  CustomCardIconsSection,
  CustomCardIconButton,
  CustomCardContent
} from './ProductCard.styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { COLORS } from '../../utils/constants';
import wishListService from '../../services/wishListService';
import { useWishList } from '../../context/WishListContext';
import ROUTES, { getRoute } from '../../pages/routes';
import searchService from '../../services/searchService';
import { useUser } from '../../context/UserContext';
import cartService from '../../services/cartService';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from '../../context/SnackbarContext';

const ProductCard = ({ product }) => {
  const { user } = useUser();
  const { wishList, setWishList } = useWishList();
  const { cart, setCart } = useCart();
  const { openSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const amountInCart =
    cart.items?.find(item => item.product.id === product.id)?.quantity || 0;

  const isInWishList = wishList.some(
    wishListItem => wishListItem.product.id === product.id
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

  const handleAddToCart = () => {
    cartService
      .addProductToCart(product)
      .then(res => {
        refreshCart();
        openSnackbar('Producto agregado', 'success');
      })
      .catch(e => {
        openSnackbar('Error al agregar al carrito', 'error');
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

  const goToProductDetail = () => {
    navigate(getRoute(ROUTES.PRODUCTDETAIL, { id: product.id }));
    if (user) {
      searchService.addSearch(product).catch(e => {
        openSnackbar('Error al guardar la busqueda', 'error');
      });
    }
  };

  return (
    <CustomCard>
      <CustomCardActionArea onClick={goToProductDetail}>
        <CustomCardImage image={product.images[0]} />
        <CustomCardContent>
          <Typography gutterBottom variant='h6' sx={{ color: 'text.primary' }}>
            {product.title}
          </Typography>
          <Typography>{product.description}</Typography>
        </CustomCardContent>
      </CustomCardActionArea>
      <CustomCardIconsSection>
        {product.featured ? (
          <StarIcon style={{ fill: COLORS.yellow }} fontSize='large' />
        ) : (
          <StarBorderIcon fontSize='large' />
        )}

        <Typography variant='h5'>${product.price}</Typography>

        <Box>
          <CustomCardIconButton
            onMouseDown={e => e.stopPropagation()}
            onClick={handleToggleWishList}>
            {isInWishList ? (
              <FavoriteIcon style={{ fill: COLORS.red }} fontSize='large' />
            ) : (
              <FavoriteBorderIcon fontSize='large' />
            )}
          </CustomCardIconButton>
          <CustomCardIconButton
            onMouseDown={e => e.stopPropagation()}
            onClick={handleAddToCart}>
            <ShoppingCartIcon fontSize='large' />
            <Badge badgeContent={amountInCart} color='primary' />
          </CustomCardIconButton>
        </Box>
      </CustomCardIconsSection>
    </CustomCard>
  );
};

export default ProductCard;
