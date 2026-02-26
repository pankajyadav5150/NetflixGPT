import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
function Browse() {
   useNowPlayingMovies();

    return (
       <div>
        <Header/>

       </div>
    );
}

export default Browse;
