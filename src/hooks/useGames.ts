import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGame = (gameQuery: GameQuery) => {
  const params = {
    genres: gameQuery.genre?.id,
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortBy,
    search: gameQuery.search,
  };
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.getAll({ params }),
    staleTime: 60 * 60 * 1000, //1h
  });
};
export default useGame;
