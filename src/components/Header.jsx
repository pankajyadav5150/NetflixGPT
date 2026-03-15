import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice.js"
import { toast } from "react-toastify";


function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);

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
    <div className="absolute px-8 py-2 flex justify-between items-center top-0 left-0 w-full bg-gradient-to-b from-black z-30 transition-all duration-300">
      <div className="w-32 md:w-44 cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>

      <div className="flex items-center">
        {user && (
          <button
            onClick={signOutHandler}
            className="bg-red-600 text-white font-bold py-1 px-4 rounded-sm hover:bg-red-700 transition duration-200"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;