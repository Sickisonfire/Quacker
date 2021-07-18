import React from 'react';
import { Button, Stack, IconButton } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { RiUserFill } from 'react-icons/ri';
import { HiDotsVertical } from 'react-icons/hi';
import { MenuButton, DropdownButton } from './MenuButton';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  return (
    <Stack direction="column" maxW="2xl" spacing="4">
      <Link to="/home">
        <IconButton icon={<Logo />} aria-label="home" variant="ghost" />
      </Link>
      <MenuButton to="/home" icon={<AiFillHome />}>
        Home
      </MenuButton>
      <MenuButton to="/messages" icon={<AiFillMessage />}>
        Messages
      </MenuButton>
      <MenuButton to="/profile" icon={<RiUserFill />}>
        Profile
      </MenuButton>
      <DropdownButton icon={<HiDotsVertical />} />

      <Button px="20">Quack</Button>
    </Stack>
  );
};

export default SideMenu;
