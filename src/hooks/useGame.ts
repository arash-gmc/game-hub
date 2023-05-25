import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import timeMap from "../services/timeMap";

interface GameDetails {
  name: string;
  description_raw: string;
}
const apiClient = new ApiClient<GameDetails>("/games");

const useGame = (gameSlug: string) =>
  useQuery({
    queryKey: ["gameDetail", gameSlug],
    queryFn: () => apiClient.getOne(gameSlug),
    staleTime: timeMap["month"],
  });

export default useGame;
