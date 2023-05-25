import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import timeMap from "../services/timeMap";
import { Game } from "./useGames";

const apiClient = new ApiClient<Game>("/games");

const useGame = (gameSlug: string) =>
  useQuery({
    queryKey: ["gameDetail", gameSlug],
    queryFn: () => apiClient.getOne(gameSlug),
    staleTime: timeMap["month"],
  });

export default useGame;
