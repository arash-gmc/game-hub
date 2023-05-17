import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onPlatformSelect: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedPlatform?.name || "All Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onPlatformSelect(null)}>
          All Platforms
        </MenuItem>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onPlatformSelect(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
