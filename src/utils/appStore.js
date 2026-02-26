import {configureStore} from "@reduxjs/toolKit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const store=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        
    }
})


export default store;