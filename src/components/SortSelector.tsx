import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "./store";

const SortSelector = () => {
  const orderBy = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const onSelectSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrder.find((order) => order.value === orderBy);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort: {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrder.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
