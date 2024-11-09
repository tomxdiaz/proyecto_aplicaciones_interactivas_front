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

const MyListItem = ({ product, onRemove, children }) => {
  const navigate = useNavigate();
  const { user } = useUser();

  const goToProductDetail = () => {
    navigate(getRoute(ROUTES.PRODUCTDETAIL, { id: product.id }));
    if (user) {
      searchService.addSearch(product);
    }
  };
  return (
    <CustomCard>
      <CustomCardActionArea onClick={goToProductDetail}>
        <CustomCardImage image={product.images[0]} />
        <CustomCardContent>
          {onRemove && (
            <CustomDeleteButton
              onMouseDown={e => e.stopPropagation()}
              onClick={e => {
                e.stopPropagation();
                onRemove();
              }}>
              <DeleteForeverIcon style={{ fill: COLORS.red }} fontSize='large' />
            </CustomDeleteButton>
          )}
          <CustomProductInfo>
            <Typography variant='h6'>{product.title}</Typography>
            <Typography>{product.description}</Typography>
            <Typography variant='h5'>${product.price}</Typography>
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
