import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <HStack
      justify="space-between"
      padding="20px"
    >
      <Image
        src={logo}
        boxSize="60px"
      />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
