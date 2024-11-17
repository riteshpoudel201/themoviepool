import axios from "axios";
const API_ACCESS_TOKEN = import.meta.env.VITE_IPINFO_API_TOKEN;
export const getUserRegion = async () => {
    try {
        const response = await axios.get(`https://ipinfo.io?token=${API_ACCESS_TOKEN}`);
        return response.data.country;
    } catch (error) {
        console.error("Error fetching user region:", error);
        return "US";
    }
};