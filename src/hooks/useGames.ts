import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
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

// const useGame = (gameQuery:GameQuery)=>
//     useData<Game>('/games',
//       {params:{
//         genres:gameQuery.genre?.id
//         ,platforms:gameQuery.platform?.id
//         ,ordering:gameQuery.sortBy
//         ,search:gameQuery.search
//       }},
//       [gameQuery])

//     export default useGame

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortBy,
            search: gameQuery.search,
          },
        })
        .then((res) => res.data),
    staleTime: 60 * 60 * 1000, //1h
  });
export default useGame;
