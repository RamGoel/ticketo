import axios from "axios";
export const Api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    // headers: {
    //     "Authorization":`Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`
    // }
});