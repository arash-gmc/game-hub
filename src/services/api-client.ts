import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'862683c1910348369120b0afacd3220e'
    }
})


