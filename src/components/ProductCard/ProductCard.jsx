import { Button } from '@mui/material';
import { CustomProductCard } from './ProductCard.styles';

const ProductCard = ({ product }) => {
  return (
    <CustomProductCard>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Button variant='outlined'>Add to Cart</Button>
    </CustomProductCard>
  );
};

export default ProductCard;
