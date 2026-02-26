import React from "react";
import {useDispatch ,useSelector} from "react-redux"
import {auth} from "../utils/firebase"
import { signOut } from "firebase/auth";
import {removeUser} from "../utils/userSlice.js"
import { toast } from "react-toastify";


function Header() {
  const dispatch=useDispatch();
  const user=useSelector((store)=> store.user.user);

  const signOutHandler = () => {
     signOut(auth).then(() => {
      dispatch(removeUser());
      toast.success("Signed out successfully");

  // Sign-out successful.
}).catch((error) => {
  console.error("Error signing out:", error);
  toast.error("Error signing out");

});
  }
  return (
    <div className="absolute flex  justify-between item-center top-0 left-0 w-full bg-gradient-to-b from-black via-black/70 to-transparent z-10">

      <div className="w-44 p-4 z-10 flex items-center cursor-pointer">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>

      <nav>
        <ul className="flex space-x-4 justify-end p-4  items-center">
          {user && <li className="text-white bg-red-700 cursor-pointer  border rounded-lg text-1 p-2 ">
         <button onClick={signOutHandler}>Sign Out</button>
          </li>}
        </ul>
      </nav>

    </div>
  );
}

export default Header;