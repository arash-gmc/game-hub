import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack
      justify="space-between"
      padding="20px"
    >
      <Link to="/">
        <Image
          src={logo}
          boxSize="60px"
          objectFit="cover"
        />
      </Link>
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
