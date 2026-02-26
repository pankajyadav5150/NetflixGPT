import {configureStore} from "@reduxjs/toolKit";
import userReducer from "./userSlice";

const store=configureStore({
    reducer:{
        user:userReducer,

    }
})


export default store;