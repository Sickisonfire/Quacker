import React, { useRef, useState } from 'react';
import {
  Box,
  CloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useOutsideClick,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { SearchbarItem } from './SearchbarItem';

export const Searchbar = () => {
  const [isPopoverOpen, setPopoverOpen] = useState<boolean>(false);
  const [searchbarFieldContent, setSearchbarFieldContent] =
    useState<string>('');
  const ref = useRef<HTMLDivElement>(null);
  const open = () => setPopoverOpen(true);
  const close = () => setPopoverOpen(false);
  useOutsideClick({
    ref: ref,
    handler: close,
  });
  const handleSearchbarFieldChange: React.ChangeEventHandler<HTMLInputElement> =
    e => {
      e.preventDefault();
      setSearchbarFieldContent(e.target.value);
    };
  const handleOnClearField: React.MouseEventHandler = e => {
    e.preventDefault();
    setSearchbarFieldContent('');
  };
  return (
    <Box ref={ref}>
      <Popover isOpen={isPopoverOpen} autoFocus={false} matchWidth={true}>
        <PopoverTrigger>
          <InputGroup>
            <Input
              type="search"
              onFocus={open}
              onChange={handleSearchbarFieldChange}
              value={searchbarFieldContent}
            />
            ;
            <InputLeftElement>
              <FiSearch size="20" />
            </InputLeftElement>
            <InputRightElement>
              <CloseButton rounded="full" onClick={handleOnClearField} />
            </InputRightElement>
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent width="full">
          <PopoverBody px="0">
            {/*<Text textColor="gray.500">Search for users</Text>*/}
            <Stack alignItems="start" direction="column">
              <SearchbarItem />
              <SearchbarItem />
              <SearchbarItem />
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
