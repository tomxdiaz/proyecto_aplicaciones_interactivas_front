import React from 'react';
import { Divider, Typography } from '@mui/material';
import { COLORS } from '../../utils/constants';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  CustomActions,
  CustomCard,
  CustomCardActionArea,
  CustomCardContent,
  CustomCardImage,
  CustomDeleteButton,
  CustomProductInfo
} from './MyList.styles';
import searchService from '../../services/searchService';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import ROUTES, { getRoute } from '../../pages/routes';

const MyListItem = ({
  product,
  onRemove,
  children,
  small = false,
  handleOnClick = null
}) => {
  const navigate = useNavigate();
  const { user } = useUser();

  const goToProductDetail = () => {
    if (user) {
      searchService.addSearch(product);
    }
    navigate(getRoute(ROUTES.PRODUCTDETAIL, { id: product.id }));
  };
  return (
    <CustomCard small={small}>
      <CustomCardActionArea onClick={handleOnClick ?? goToProductDetail}>
        <CustomCardImage image={product.images[0]} />
        <CustomCardContent>
          {!small && onRemove && (
            <CustomDeleteButton
              onMouseDown={e => e.stopPropagation()}
              onClick={e => {
                e.stopPropagation();
                onRemove();
              }}>
              <DeleteForeverIcon
                style={{ fill: COLORS.red }}
                fontSize={small ? 'small' : 'large'}
              />
            </CustomDeleteButton>
          )}
          <CustomProductInfo>
            <Typography
              variant={small ? 'subtitle1' : 'h6'}
              sx={{ justifyContent: 'space-between', width: '100%' }}>
              {product.title}
              {small && onRemove && (
                <CustomDeleteButton
                  onMouseDown={e => e.stopPropagation()}
                  onClick={e => {
                    e.stopPropagation();
                    onRemove();
                  }}
                  small>
                  <DeleteForeverIcon
                    style={{ fill: COLORS.red }}
                    fontSize={small ? 'small' : 'large'}
                  />
                </CustomDeleteButton>
              )}
            </Typography>
            <Typography variant={small ? 'subtitle2' : 'body1'}>
              {product.description}
            </Typography>
            {!small && <Typography variant='h6'>Stock: {product.stock}</Typography>}
            <Typography variant={small ? 'subtitle1' : 'h5'}>
              ${product.price}
            </Typography>
          </CustomProductInfo>

          {children && (
            <Divider
              sx={{
                margin: '10px 0'
              }}
            />
          )}
          <CustomActions>{children}</CustomActions>
        </CustomCardContent>
      </CustomCardActionArea>
    </CustomCard>
  );
};

export default MyListItem;
