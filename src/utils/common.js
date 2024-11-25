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

export const debounce = (func, delay) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

export const getRuntime = (runtime) => {
  return `${Math.floor(runtime / 60)}h ${runtime % 60}min`;
};
