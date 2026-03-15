import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { toast } from "react-toastify";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        try {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/popular?page=1",
                options
            );
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
        } catch (err) {
            console.error("Error fetching popular movies:", err);
            toast.error("Error fetching popular movies");
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default usePopularMovies;
