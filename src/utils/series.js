import axiosInstance from "../axiosInstance";
import { randomChar } from "./axios";
import { getUserRegion } from "./common";
const API_URL = import.meta.env.VITE_TMDB_API_URL;

export async function fetchSeries() {
    try {
        const response = await axiosInstance.get(`${API_URL}/search/tv?query=${randomChar()}`);
        if (response.data) {
            return response.data.results;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchSeries() function:", error);
    }

}

export async function fetchOnTheAirSeries() {
    try {
        const response = await axiosInstance.get(`${API_URL}/tv/on_the_air?language=en-US`,{
            params: {
                region: getUserRegion()
            }
        });
        if (response.data) {
            return response.data.results;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}

export async function fetchPopularSeries() {
    try {
        const response = await axiosInstance.get(`${API_URL}/tv/popular`,{
            params: {
                page: '1',
                region: getUserRegion()
            }
        });
        if (response.data) {
            return response.data.results;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}
export async function fetchTrendingSeries() {
    try {
        const response = await axiosInstance.get(`${API_URL}/trending/tv/day`,{
            params: {
                region: getUserRegion()
            }
        });
        if (response.data) {
            return response.data.results;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}
export async function fetchTopRatedSeries() {
    try {
        const response = await axiosInstance.get(`${API_URL}/tv/top_rated`,{
            params: {
                page: '1',
                region: getUserRegion()
            }
        });
        if (response.data) {
            return response.data.results;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}

export async function fetchAiringTodaySeries() {
    try {
        const response = await axiosInstance.get(`${API_URL}/tv/airing_today`,{
            params: {
                page: '1',
                region: getUserRegion()
            }
        });
        if (response.data) {
            return response.data.results;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}

export async function searchSeries(query) {
    try {
        const response = await axiosInstance.get(`${API_URL}/search/tv?query=${query}`);
        if (response.data) {
            return response.data.results;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}

export async function fetchSeriesImage(seriesId) {
    try {
        const response = await axiosInstance.get(`${API_URL}/tv/${seriesId}/images`);
        if (response.data) {
            return response.data.results;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}

export const fetchDiscoverSeries = async ({ language, region, includeAdult, page }) => {
    const params = new URLSearchParams({
      language: `${language}-${region}`,
      region: region,
      include_adult: includeAdult,
      sort_by: 'popularity.desc',
      page: page || '1'
    })
  
    const response = await axiosInstance.get(
      `${API_URL}/discover/tv?${params.toString()}`
    )
    
    if (!response.data) {
      throw new Error('Failed to fetch series')
    }
    
    return response.data
  }