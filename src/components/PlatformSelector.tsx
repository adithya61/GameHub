import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usegetName from "../hooks/usegetName";
import useGameQueryStore from "./store";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId); // component re-renders only if
  // gameQuery.platformId changes.
  const onSelectPlatform = useGameQueryStore((s) => s.setPlatformId);

  const { data, error } = usePlatforms();

  if (error) return;

  const platform = usegetName(data, selectedPlatformId);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {platform || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results?.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
