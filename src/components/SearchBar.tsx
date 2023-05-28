import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../services/gamQueryStore";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore((s) => s.setSearch);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (ref.current?.value) {
          setSearchText(ref.current.value);
          navigate("/");
        }
        if (ref.current?.value === "") setSearchText();
      }}
      style={{ width: "100%" }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          variant="filled"
          placeholder="Search for games"
          marginX={2}
          ref={ref}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
