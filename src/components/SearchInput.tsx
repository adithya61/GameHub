import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={25}
          variant={"filled"}
          placeholder="Search"
        ></Input>
      </InputGroup>
    </>
  );
};

export default SearchInput;
