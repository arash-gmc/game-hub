import meh from "../assets/Emojis/meh.webp";
import bullsEye from "../assets/Emojis/bulls-eye.webp";
import thumbsUp from "../assets/Emojis/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

const Emoji = ({ rate }: { rate: number }) => {
  if (rate < 3) return null;
  const map: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bullsEye, alt: "recomended", boxSize: "35px" },
    5: { src: thumbsUp, alt: "exceptional", boxSize: "25px" },
  };
  return (
    <Image
      {...map[rate]}
      marginTop={10}
    />
  );
};

export default Emoji;
