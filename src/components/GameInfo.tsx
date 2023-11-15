import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameDetails } from "../entities/GameDetails";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  gameInfo?: GameDetails;
}

const GameInfo = ({ gameInfo: data }: Props) => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={10}
    >
      <DefinitionItem term="Platforms">
        {data?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="MetaCritic">
        <CriticScore score={data?.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {data?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publisher">
        {data?.publishers.map((publisher) => publisher.name)}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameInfo;
