import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Platform } from "../hooks/usePlatforms";
import { IconType } from "react-icons";

interface Props {
  platforms: { platform: Platform }[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    web: BsGlobe,
    ios: MdPhoneIphone,
  };
  return (
    <HStack marginY={1}>
      {platforms.map(({ platform }) => (
        <Icon
          as={iconMap[platform.slug]}
          color={"gray.500"}
          key={platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
