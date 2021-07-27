import React, { forwardRef, ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  Menu,
  MenuList,
  MenuButton as ChakraMenuButton,
  MenuItem,
  HTMLChakraProps,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react';

interface IButtonBaseProps extends HTMLChakraProps<'button'> {
  icon?: ReactElement;
  children?: ReactNode;
  label: string;
}

interface IMenuButtonProps extends IButtonBaseProps {
  to: string;
}

interface IDropdownButtonProps extends IButtonBaseProps {}

const ButtonBase = forwardRef(
  (
    { icon, label, children, ...rest }: IButtonBaseProps,
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
            {...rest}
          />
        )}
      </>
    );
  }
);

export const MenuButton: React.FC<IMenuButtonProps> = ({
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

export const DropdownButton: React.FC<IDropdownButtonProps> = ({
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
