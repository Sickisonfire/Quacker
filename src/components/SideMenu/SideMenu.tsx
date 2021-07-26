import React from 'react';
import {
  Button,
  Stack,
  IconButton,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { GiDuckPalm } from 'react-icons/gi';
import { RiUserFill } from 'react-icons/ri';
import { HiDotsVertical } from 'react-icons/hi';
import { MenuButton, DropdownButton } from './MenuButton';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const isXL = useBreakpointValue({ xl: true });
  return (
    <Box>
      <Stack
        pos="sticky"
        zIndex="sticky"
        top="0"
        direction="column"
        maxW="2xl"
        spacing="8"
        pr="10"
        py="2"
      >
        <Link to="/home">
          <IconButton icon={<Logo />} aria-label="home" variant="ghost" />
        </Link>
        <MenuButton to="/home" icon={<AiFillHome size="28" />} label="Home">
          Home
        </MenuButton>
        <MenuButton
          to="/messages"
          icon={<AiFillMessage size="28" />}
          label="Messages"
        >
          Messages
        </MenuButton>
        <MenuButton
          to="/profile"
          icon={<RiUserFill size="28" />}
          label="Profile"
        >
          Profile
        </MenuButton>
        <DropdownButton icon={<HiDotsVertical size="28" />} label="Settings">
          More
        </DropdownButton>
        {isXL ? (
          <Button px="20" colorScheme="green">
            Quack
          </Button>
        ) : (
          <IconButton
            aria-label="Compose Quack"
            icon={<GiDuckPalm size="28" />}
            fontSize="xl"
            colorScheme="green"
          />
        )}
      </Stack>
    </Box>
  );
};

export default SideMenu;
