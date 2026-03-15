import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

function Browse() {
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();

   return (
      <div className="bg-black min-h-screen">
         <Header />
         <MainContainer />
         <SecondaryContainer />
      </div>
   );
}

export default Browse;
