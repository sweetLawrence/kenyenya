import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const CustomMenuIcon = ({ onClick }) => {
  return (
    <div className="menu-icon" onClick={onClick}>
      <MenuIcon className="icon" />
    </div>
  );
};

export default CustomMenuIcon;