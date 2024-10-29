import * as React from 'react';
import { Badge, Box, CardActions, IconButton } from '@mui/material';
import {
  CustomCard,
  CustomCardActionArea,
  CustomCardImage,
  CustomCardIconsSection,
  CustomCardIconButton
} from './ProductCard.styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { COLORS } from '../../utils/constants';

const ProductCard = ({ product }) => {
  const [isInWishList, setIsInWishList] = React.useState(false);
  const [amountInCart, setAmountInCart] = React.useState(0);

  const handleAddToWishList = () => {
    setIsInWishList(isInWishList => !isInWishList);
  };

  const handleAddToCart = () => {
    setAmountInCart(amountInCart => amountInCart + 1);
  };

  return (
    <CustomCard>
      <CustomCardActionArea>
        <CustomCardImage image={product.images[0]} />
        <CardContent>
          <Typography gutterBottom variant='h6' sx={{ color: 'text.primary' }}>
            {product.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {product.description}
          </Typography>
        </CardContent>
      </CustomCardActionArea>
      <CustomCardIconsSection>
        {product.featured ? (
          <StarIcon style={{ fill: COLORS.yellow }} fontSize='large' />
        ) : (
          <StarBorderIcon fontSize='large' />
        )}

        <Box>
          <CustomCardIconButton
            onMouseDown={e => e.stopPropagation()}
            onClick={handleAddToWishList}>
            {isInWishList ? (
              <FavoriteIcon style={{ fill: COLORS.red }} fontSize='large' />
            ) : (
              <FavoriteBorderIcon fontSize='large' />
            )}
          </CustomCardIconButton>
          <CustomCardIconButton
            onMouseDown={e => e.stopPropagation()}
            style={{
              padding: '10px'
            }}
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
