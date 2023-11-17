import { Box } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  slug?: string;
}

const Trailer = ({ slug }: Props) => {
  const { data: trailerData } = useGameTrailer(slug!);

  const videoUrl = trailerData?.results[0]?.data["480"];
  const previewImage = trailerData?.results[0]?.preview;

  if (!videoUrl) return null;

  return (
    <>
      <Box>
        <video
          style={{
            marginTop: "25px",
          }}
          poster={previewImage}
          src={videoUrl}
          controls
        />
      </Box>
    </>
  );
};

export default Trailer;
