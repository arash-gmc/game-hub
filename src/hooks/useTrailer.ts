import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import timeMap from "../services/timeMap";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useTrailer = (id: number) => {
  const apiClient = new ApiClient<Trailer>(`games/${id}/movies`);
  return useQuery({
    queryKey: ["trailer", id],
    queryFn: () => apiClient.getAll(),
    staleTime: timeMap["month"],
  });
};

export default useTrailer;
