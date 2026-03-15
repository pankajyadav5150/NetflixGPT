import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { toast } from "react-toastify";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        try {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/upcoming?page=1",
                options
            );
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results));
        } catch (err) {
            console.error("Error fetching upcoming movies:", err);
            toast.error("Error fetching upcoming movies");
        }
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;
