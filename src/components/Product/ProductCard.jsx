import { ButtonBase, CardActionArea } from '@mui/material';
import { CustomProductCard } from './ProductCard.styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard = ({ product }) => {
  return (
    <CustomProductCard
      style={{
        position: 'relative',
      }}>
      <CardActionArea onClick={() => console.log(product)} style={{ width: '100%', height: '100%', padding: '10px 20px' }}>
        <div>{product.featured ? <StarIcon /> : <StarBorderIcon />}</div>
        <h2>{product.title}</h2>
        <h4>${product.price}</h4>
      </CardActionArea>
      <ButtonBase
        onMouseDown={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        variant='outlined'>
        <ShoppingCartIcon />
      </ButtonBase>
    </CustomProductCard>
  );
};

export default ProductCard;
