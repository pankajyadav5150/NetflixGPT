import {createSlice}  from "@reduxjs/toolkit"


const movieSlice=createSlice({
    name:"movie",
initialState:{
    NowPlayingMovies:null,
},
reducers:{
    setNowPlayingMovies:(state,action)=>{
        state.NowPlayingMovies=action.payload;
    }
}
})


export const {setNowPlayingMovies}=movieSlice.actions;
export default movieSlice.reducer;
