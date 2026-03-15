import React from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import {Routes,Route,useNavigate} from 'react-router-dom'
import Browse from "./components/Browse.jsx";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./utils/firebase"
import {useEffect} from "react"
import {setUser,removeUser} from "./utils/userSlice.js"
import { useDispatch } from "react-redux";

export default function App(){
    const dispatch=useDispatch();
    const navigate=useNavigate();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    +-
       dispatch(setUser({
        uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
       }));
       navigate("/browse");
  } else {
    // User is signed out
     dispatch(removeUser());
      navigate('/');

  }
});

return () => unsubscribe();
  },[])


  return (
    <div >
    <Routes>
      <Route path="/" element={<Body/>} />
      < Route path="/browse" element ={<Browse/>} />
    </Routes>
    </div>
  );
}