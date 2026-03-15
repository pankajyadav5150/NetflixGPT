import VideoTitle from "./videoTitle.jsx";
import VideoBackground from "./VideoBackground.jsx";
import { useSelector } from "react-redux";

export default function MainContainer() {
    const movies = useSelector((store) => store.movies?.NowPlayingMovies);

    // Early return if movies are null or empty
    if (!movies || movies.length === 0) return null;

    const mainMovie = movies[0];
    if (!mainMovie) return null;
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative bg-black h-screen w-screen overflow-hidden">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}