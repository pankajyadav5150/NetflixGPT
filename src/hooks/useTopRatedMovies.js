import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { toast } from "react-toastify";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        try {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/top_rated?page=1",
                options
            );
            const json = await data.json();
            dispatch(addTopRatedMovies(json.results));
        } catch (err) {
            console.error("Error fetching top rated movies:", err);
            toast.error("Error fetching top rated movies");
        }
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;
