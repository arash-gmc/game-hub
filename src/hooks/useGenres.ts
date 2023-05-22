import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient from "../services/api-client";
import timeMap from "../services/timeMap";

const apiClient = new ApiClient<Genres>("/genres");

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: timeMap["month"],
    initialData: { results: genres, count: genres.length },
  });
export default useGenres;

//export default () => ({ data: genres, error: null, isLoading: false });
