import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (input: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack
      justify="space-between"
      padding="20px"
    >
      <Image
        src={logo}
        boxSize="60px"
      />
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
