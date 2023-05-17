import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    initialData: { results: platforms, count: platforms.length },
    staleTime: 1000 * 60 * 60 * 24,
  });

//export default ()=> useData<Platform>('/platforms/lists/parents')
//export default ()=>({data:platforms,error:nullnull,isLoading:false})
export default usePlatform;
