import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "./store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const onSearch = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/");
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={25}
            variant={"filled"}
            placeholder="Search"
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
