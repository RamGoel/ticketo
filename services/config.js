import { PRIVATE_URL } from "@utils/constants";
import axios from "axios";
export const Api = axios.create({
    baseURL: PRIVATE_URL,
    // headers: {
    //     "Authorization":`Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`
    // }
});