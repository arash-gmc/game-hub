import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onPlatformSelect: (platformId: number | null) => void;
  selectedPlatformId: number | null;
}

const PlatformSelector = ({ onPlatformSelect, selectedPlatformId }: Props) => {
  const { data: platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {platforms.results.find((p) => p.id === selectedPlatformId)?.name ||
          "All Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onPlatformSelect(null)}>
          All Platforms
        </MenuItem>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onPlatformSelect(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
