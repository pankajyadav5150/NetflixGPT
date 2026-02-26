import React from "react";
import {options} from "../utils/constants.js"
import { useEffect } from "react";
import {toast} from "react-toastify"
import {useDispatch} from "react-redux"
import {setNowPlayingMovies} from "../utils/movieSlice.js"

export default function useNowPlayingMovies(){
    const dispatch=useDispatch();
    const movieData=async ()=>{
        try{
            const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options);
            const json=await response.json();
            //added into redux store
            dispatch(setNowPlayingMovies(json.results));
            console.log(json.results);
            
        }
        catch(err){
            console.error("Error fetching movie data:", err);
            toast.error("Error fetching movie data");
        }
    }

    useEffect(()=>{
        movieData();
    },[])
}