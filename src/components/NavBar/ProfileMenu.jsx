import React from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useUser } from '../../context/UserContext';
import { useWishList } from '../../context/WishListContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ProfileMenu = () => {
  const { user, setUser } = useUser();
  const { wishList, setWishList } = useWishList();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log('USER FROM ProfileMenu', user);

  return (
    <div>
      <Button
        aria-controls='profile-menu'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'>
        <AccountCircleIcon />
        <Typography>{`Hi ${user.name} ${user.lastName}!`}</Typography>
      </Button>
      <Menu
        id='profile-menu'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My WishList</MenuItem>
        <MenuItem onClick={handleClose}>Create Product</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
