import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSortChange: (sortBy: string | null) => void;
  sortedBy: string | null;
}

const SortMenue = ({ onSortChange, sortedBy }: Props) => {
  const sortOptions = [
    { value: "", label: "Relevense" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Raring" },
  ];
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        Sort by:{" "}
        {sortOptions.find((s) => s.value === sortedBy)?.label || "Relevense"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => onSortChange(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortMenue;
