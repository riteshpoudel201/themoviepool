import axiosInstance from '../axiosInstance';

const API_URL = import.meta.env.VITE_TMDB_API_URL;

export const randomChar = () => {
    const str = 'qwertyuiopasdfghjklzxcvbnm';
    const randomIndex = Math.floor(Math.random() * (str.length - 1));
    return str[randomIndex];
}
export async function fetchNowPlaying() {
    try {
        const [moviesResponse, tvShowsResponse] = await Promise.all([
            axiosInstance.get(`${API_URL}/movie/now_playing`, {
                params: { language: "en-US", page: 1 },
            }),
            axiosInstance.get(`${API_URL}/tv/on_the_air`, {
                params: { language: "en-US", page: 1 },
            }),
        ]);

        const movies = moviesResponse.data.results.map((movie) => ({
            ...movie,
            type: "movie",
        }));

        const tvShows = tvShowsResponse.data.results.map((tvShow) => ({
            ...tvShow,
            type: "tv",
        }));

        return [...movies, ...tvShows];
    } catch (error) {
        console.error("Error fetching now playing:", error);
        return [];
    }
}


export async function fetchShowDetails(showId, showType) {
    try {
        let URL_PATH;
        if (showType === "movie") {
            URL_PATH = "https://api.themoviedb.org/3/movie"
        } else if (showType === "tv") {
            URL_PATH = "https://api.themoviedb.org/3/tv"
        }
        const response = await axiosInstance.get(`${URL_PATH}/${showId}`);
        if (response.data) {
            return response.data;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchShowDetails() function:", error);
    }

}

async function getVideoPath(data) {
    const trailers = data?.data?.results?.filter(video => video.type === "Trailer" && video.site === "YouTube");
    const teasers = data?.data?.results?.filter(video => video.type === "Teasers" && video.site === "YouTube");
    const clip = data?.data?.results?.filter(video => video.type === "Clip" && video.site === "YouTube");
    console.log("Clip path:", clip)
    console.log("Trailer path:", trailers)
    console.log("Teasers path:", teasers)
    if (trailers?.length > 0) {
        return trailers.map(trailer => `${trailer.key}`);
    }
    if (teasers?.length > 0) {
        return teasers.map(trailer => `${trailer.key}`);
    }
    if (clip?.length > 0) {
        return teasers.map(trailer => `${trailer.key}`);
    }

    return "No videos available.";
}

export async function getYouTubeKey(showId, type) {
    try {
        console.log("showId: ",showId);
        console.log("type: ",type);
        const videos = await axiosInstance.get(`${API_URL}/${type ==="series" ? "tv": type}/${showId}/videos`);
        const path = await getVideoPath(videos);
        return path;
    }
    catch (error) {
        console.log("Error from the axios.js catch block of getYouTubeKey() function:", error);
    }
}

export async function discoverMovies() {
    try {
        const response = await axiosInstance.get(`${API_URL}/discover/movie/`);
        if (response.data) {
            return response.data;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}
export async function fetchTvShows() {
    try {
        const response = await axiosInstance.get(`${API_URL}/genre/tv/list`);
        if (response.data) {
            return response.data;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}

export async function discoverTvShows() {
    try {
        const response = await axiosInstance.get(`${API_URL}/discover/tv/`);
        if (response.data) {
            return response.data;
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}
export async function fetchTrailerShows(type) {
    try {
       
        const response = await axiosInstance.get(`${API_URL}/trending/${type ==="series" ? "tv": type}/day`);
        if (response.data) {
            return await Promise.all(response.data.results.map(async (show) => ({
                ...show,
                videoKey: await getYouTubeKey(show.id, type),
            })));
        }
    }
    catch (error) {
        console.log("Error from the axios.js catch block of fetchMovies() function:", error);
    }

}