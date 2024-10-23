import { Badge, IconButton } from '@mui/material';
import {
  CustomCard,
  CustomCardContent,
  CustomCardImage,
  CustomCardIconsSection,
  CustomWishListIconButton
} from './ProductCard.styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { COLORS } from '../../utils/constants';

const ProductCard = ({ product }) => {
  const quantityInWishlist = 2;

  const isInWishList = true;

  return (
    <CustomCard>
      <CustomCardContent>
        <CustomCardIconsSection>
          {product.featured ? (
            <StarIcon style={{ fill: COLORS.yellow }} fontSize='large' />
          ) : (
            <StarBorderIcon fontSize='large' />
          )}

          <CustomWishListIconButton
            onMouseDown={e => e.stopPropagation()}
            onClick={() => {
              // add/remove to/from wishlist
            }}>
            {isInWishList ? (
              <FavoriteIcon style={{ fill: COLORS.red }} fontSize='large' />
            ) : (
              <FavoriteBorderIcon fontSize='large' />
            )}
          </CustomWishListIconButton>
        </CustomCardIconsSection>

        <CustomCardImage image={product.images[0]} />
        <CardContent>
          <Typography gutterBottom variant='h6' sx={{ color: 'text.primary' }}>
            {product.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {product.description}
          </Typography>
        </CardContent>
        <IconButton
          onMouseDown={e => e.stopPropagation()}
          style={{
            padding: '10px'
          }}
          onClick={e => {
            // add to cart
          }}>
          <ShoppingCartIcon fontSize='large' />
          <Badge
            badgeContent={quantityInWishlist && quantityInWishlist}
            color='primary'
          />
        </IconButton>
      </CustomCardContent>
    </CustomCard>
  );
};

export default ProductCard;
