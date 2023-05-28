import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import timeMap from "../services/timeMap";

interface Screenshots {
  id: number;
  image: string;
}
const useScreenshots = (gameId: number) => {
  const apiClinet = new ApiClient<Screenshots>(`games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClinet.getAll,
    staleTime: timeMap["month"],
  });
};

export default useScreenshots;
