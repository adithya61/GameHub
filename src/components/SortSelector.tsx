import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (order: string) => void;
  orderBy: string;
}

const SortSelector = ({ onSelectSortOrder, orderBy }: Props) => {
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
        <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
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
