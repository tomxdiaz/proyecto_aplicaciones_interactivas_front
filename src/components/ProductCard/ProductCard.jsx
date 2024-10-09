import { Button } from '@mui/material';
import { StyledProductCard } from './ProductCard.styles';

const ProductCard = ({ product }) => {
  return (
    <StyledProductCard>
      <h2 className='product-name'>{product.title}</h2>
      <p className='product-price'>${product.price}</p>
      <Button variant='outlined'>Add to Cart</Button>
    </StyledProductCard>
  );
};

export default ProductCard;
