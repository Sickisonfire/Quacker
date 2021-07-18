import React, { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  Menu,
  MenuList,
  MenuButton as ChakraMenuButton,
  MenuItem,
  HTMLChakraProps,
  ThemingProps,
} from '@chakra-ui/react';

interface ButtonBaseProps
  extends HTMLChakraProps<'button'>,
    ThemingProps<'Button'> {
  icon?: ReactElement;
  children?: ReactNode;
}

interface MenuButtonProps extends ButtonBaseProps {
  to: string;
}

interface DropdownButtonProps extends ButtonBaseProps {}

const ButtonBase: React.FC<ButtonBaseProps> = ({ icon, children, ...rest }) => (
  <Button
    leftIcon={icon}
    iconSpacing="5"
    variant="ghost"
    fontSize="xl"
    px="3"
    {...rest}
  >
    {children}
  </Button>
);

export const MenuButton: React.FC<MenuButtonProps> = ({
  to,
  icon,
  children,
  ...rest
}) => (
  <Box>
    <Link to={to}>
      <ButtonBase icon={icon} {...rest}>
        {children}
      </ButtonBase>
    </Link>
  </Box>
);

export const DropdownButton: React.FC<DropdownButtonProps> = ({ icon }) => (
  <Box>
    <Menu>
      <ChakraMenuButton
        as={Button}
        leftIcon={icon}
        bg="none"
        px="3"
        fontSize="xl"
        iconSpacing="5"
      >
        More
      </ChakraMenuButton>
      <MenuList>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Display</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  </Box>
);
