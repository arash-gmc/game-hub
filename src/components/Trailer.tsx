import React from "react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const Trailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (error) throw error;
  if (isLoading) return null;

  const frist = data?.results[0];
  return frist ? (
    <video
      src={frist.data[480]}
      poster={frist.preview}
    />
  ) : null;
};

export default Trailer;
