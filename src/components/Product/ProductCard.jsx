import { Badge, ButtonBase } from '@mui/material';
import { CustomCardContent, CustomCardImage } from './ProductCard.styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CustomCardContent>
        <CustomCardImage image={product.images[0]} />
        <CardContent>
          <Typography gutterBottom variant='h6' sx={{ color: 'text.primary' }}>
            {product.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {product.description}
          </Typography>
        </CardContent>
        <ButtonBase
          onMouseDown={e => e.stopPropagation()}
          style={{
            padding: '10px'
          }}
          onClick={e => {
            // add to wishlist
          }}
          variant='outlined'>
          <ShoppingCartIcon fontSize='large' />
          <Badge badgeContent={2} color='primary' />
        </ButtonBase>
      </CustomCardContent>
    </Card>
  );
};

export default ProductCard;
