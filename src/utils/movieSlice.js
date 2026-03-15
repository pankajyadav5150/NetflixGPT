import { createSlice } from "@reduxjs/toolkit"


const movieSlice = createSlice({
    name: "movie",
    initialState: {
        NowPlayingMovies: null,
        PopularMovies: null,
        TopRatedMovies: null,
        UpcomingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.NowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.TopRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})


export const { setNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
