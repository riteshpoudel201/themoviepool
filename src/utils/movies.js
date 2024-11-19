import axiosInstance from "../axiosInstance";
import { randomChar } from "./axios";
import { getUserRegion } from "./common";
const API_URL = import.meta.env.VITE_TMDB_API_URL;

export async function fetchMovies() {
    try {
        const response = await axiosInstance.get(`${API_URL}/search/movie?query=${randomChar()}`,{
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
export async function fetchPopularMovies() {
    try {
        const response = await axiosInstance.get(`${API_URL}/movie/popular`,{
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
export async function fetchTrendingMovies() {
    try {
        const response = await axiosInstance.get(`${API_URL}/trending/movie/day`,{
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
export async function fetchTopRatedMovies() {
    try {
        const response = await axiosInstance.get(`${API_URL}/movie/top_rated`,{
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
export async function fetchUpcomingMovies() {
    try {
        const response = await axiosInstance.get(`${API_URL}/movie/upcoming`,{
            params: {
                page: '1',
                region: getUserRegion()
            }
        });
        console.log("response.data",response.data);
        if (response.data) {
            return response.data.results;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}

export async function fetchNowPlayingMovies() {
    try {
        const response = await axiosInstance.get(`${API_URL}/movie/now_playing`,{
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

export async function searchMovies(query) {
    try {
        const response = await axiosInstance.get(`${API_URL}/search/movie?query=${query}`);
        if (response.data) {
            return response.data.results;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}

export async function fetchMovieImage(movieId) {
    try {
        const response = await axiosInstance.get(`${API_URL}/movie/${movieId}/images`,{
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

export const fetchDiscoverMovies = async ({ language, region, includeAdult, page }) => {
    const params = new URLSearchParams({
        language: `${language}-${region}`,
        region: region,
        include_adult: includeAdult,
        sort_by: 'popularity.desc',
        page: page
    })
  
    const response = await axiosInstance.get(
      `${API_URL}/discover/movie?${params.toString()}`
    )
    
    if (!response.data) {
      throw new Error('Failed to fetch movies')
    }
    
    return response.data
  }