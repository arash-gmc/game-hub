import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genres>>("/genres").then((res) => res.data),
    staleTime: Infinity,
    initialData: { results: genres, count: genres.length },
  });
export default useGenres;

//export default () => ({ data: genres, error: null, isLoading: false });
