import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

export default function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-black overflow-hidden">
      <iframe
        className="w-screen aspect-video scale-[2.3] md:scale-[1.3]"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key + "&controls=0&showinfo=0&rel=0&iv_load_policy=3"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
