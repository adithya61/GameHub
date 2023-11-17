import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import getCroppedUrl from "../services/image-url";

interface Props {
  slug?: string;
}

const ScreenshotsPage = ({ slug }: Props) => {
  const { data } = useScreenshots(slug!);

  if (!data) return null;

  return (
    <Box marginTop={10}>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 2,
          xl: 3,
        }}
        spacing={5}
      >
        {data.results?.map((img) => (
          <Image
            key={img.id}
            boxSize={{
              base: "1fr",
              md: "1fr 1fr",
              lg: "1fr 1fr",
              xl: "1fr 1fr",
            }}
            src={getCroppedUrl(img.image)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ScreenshotsPage;
