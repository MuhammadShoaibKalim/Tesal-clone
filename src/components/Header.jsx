// Header.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/carSlice';

const Header = () => {
  const cars = useSelector(selectCars);
  console.log(cars);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ['Model S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels', 'Shop', 'Tesla Account'];

  return (
    <Container>
      <Logo href="#">
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </Logo>
      <NavMenu>
        {cars && cars.map((car, index) => (
          <a key={index} href="#">{car}</a>
        ))}
      </NavMenu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
      <BurgerMenu>
        <CustomMenu onClick={toggleDrawer(true)} />
      </BurgerMenu>
      <StyledDrawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerContainer>
          <CloseWrapper>
            <CustomClose onClick={toggleDrawer(false)} />
          </CloseWrapper>
          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </DrawerContainer>
      </StyledDrawer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: white;
`;

const Logo = styled.a`
  img {
    height: 20px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
    color: black;
    text-decoration: none;

    &:hover {
      color: gray;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    text-decoration: none;
    color: black;

    &:hover {
      color: gray;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: black;

  &:hover {
    color: gray;
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 250px;
  }
`;

const DrawerContainer = styled.div`
  width: 250px;
  padding: 20px;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
