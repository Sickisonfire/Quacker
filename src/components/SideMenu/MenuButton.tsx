import React, { forwardRef, ReactElement, ReactNode, useRef } from 'react';
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
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react';

interface ButtonBaseProps
  extends HTMLChakraProps<'button'>,
    ThemingProps<'ButtonBaseProps'> {
  icon?: ReactElement;
  children?: ReactNode;
  label: string;
}

interface MenuButtonProps extends ButtonBaseProps {
  to: string;
}

interface DropdownButtonProps extends ButtonBaseProps {}

const ButtonBase = forwardRef(
  (
    { icon, label, children, ...rest }: ButtonBaseProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const isXL = useBreakpointValue({ xl: true });

    return (
      <>
        {isXL ? (
          <Button
            leftIcon={icon}
            ref={ref}
            iconSpacing="5"
            variant="ghost"
            fontSize="xl"
            px="3"
            {...rest}
          >
            {children}
          </Button>
        ) : (
          <IconButton
            ref={ref}
            variant="ghost"
            fontSize="xl"
            icon={icon}
            aria-label={label}
          />
        )}
      </>
    );
  }
);

export const MenuButton: React.FC<MenuButtonProps> = ({
  to,
  icon,
  children,
  label,
}) => (
  <Box>
    <Link to={to}>
      <ButtonBase icon={icon} label={label}>
        {children}
      </ButtonBase>
    </Link>
  </Box>
);

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  icon,
  label,
  children,
}) => {
  return (
    <Box>
      <Menu>
        <ChakraMenuButton as={ButtonBase} icon={icon} label={label}>
          {children}
        </ChakraMenuButton>
        <MenuList>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Display</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
