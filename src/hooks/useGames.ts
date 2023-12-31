import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { GameQuery } from "../services/gamQueryStore";
import timeMap from "../services/timeMap";
import { Genres } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  genres: Genres[];
  metacritic: number;
  rating_top: number;
  publishers: { id: number; name: string }[];
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortBy,
          search: gameQuery.search,
          page: pageParam,
          page_size: 12,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
    staleTime: timeMap["day"],
  });
export default useGames;
