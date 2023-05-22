import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../services/gamQueryStore";

const SortMenue = () => {
  const currentSort = useGameQueryStore((s) => s.gameQuery.sortBy);
  const setSortBy = useGameQueryStore((s) => s.setSort);
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
        {sortOptions.find((s) => s.value === currentSort)?.label || "Relevense"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => setSortBy(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortMenue;
