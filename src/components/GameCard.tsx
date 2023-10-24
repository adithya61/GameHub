import { Games } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIcon
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
