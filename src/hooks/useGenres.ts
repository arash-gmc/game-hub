import useData from "./useData";
import genres from "../data/genres";

export interface Genres {
    id: number;
    name: string;
    image_background: string;
  }
  
//export default ()=> useData<Genres>('/genres')
export default ()=>({data:genres,error:null,isLoading:false})