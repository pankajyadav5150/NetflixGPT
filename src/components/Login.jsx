import Header from "./Header"
import { useState } from 'react'
import { validateAuth } from '../utils/validateAuth'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";

export default function Login() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        //validation
        const errors = validateAuth(formData, isSignedIn ? "signin" : "signup");
        setErrors(errors);
        // If no errors, proceed with form submission (e.g., API call)
        if (Object.keys(errors).length === 0) {
            //signup or signin logic here
            if (!isSignedIn) {
                //signup logic

                createUserWithEmailAndPassword(auth, formData.email, formData.password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        toast.success("User signed up successfully!");
                        console.log("User signed up successfully:", user);

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        toast.error("Error signing up: " + errorMessage);
                        console.error("Error signing up:", errorCode, errorMessage);
                    });

            }
            else {
                //signin logic
                signInWithEmailAndPassword(auth, formData.email, formData.password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        toast.success("Welcome back!");
                        console.log("User signed in successfully:", user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        toast.error("Error signing in: " + errorMessage);
                        console.error("Error signing in:", errorCode, errorMessage);
                    });

            }
        }

        //reset form data        
        setFormData({
            name: "",
            email: "",
            password: ""
        });
    }


    return (
        <div>
            <Header />
            <div className="bg">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg"
                    className="absolute inset-0 w-full h-full object-cover filter brightness-50"
                    alt="Netflix Background" />
            </div>
            <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-black/70 p-8 rounded-lg"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl font-bold mb-4 text-white">{isSignedIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignedIn && (
                    <>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="p-2 m-2 bg-gray-800 text-white rounded-lg"
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            value={formData.name}
                        />
                        {errors.name && (
                            <p className="py-2 m-2 text-red-500">{errors.name}</p>
                        )}
                    </>
                )}
                <input type="text" placeholder="Enter Email" className="p-2 m-2 bg-gray-800 text-white rounded-lg"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    value={formData.email} />
                {errors.email && <p className=" py-2 m-2 text-red-500">{errors.email}</p>}
                <input type="password" placeholder="Enter Password" className="p-2 m-2 bg-gray-800 text-white rounded-lg"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    value={formData.password} />
                {errors.password && <p className="py-2 m-2 text-red-500">{errors.password}</p>}
                <button className="py-2 m-2  bg-red-700 text-white rounded-lg " >{isSignedIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-2 m-2 text-white mt-4 cursor-pointer" onClick={() => setIsSignedIn(!isSignedIn)}> {!isSignedIn ? "Already have an account? Sign In" : " Don't have an account? Sign Up Now"}</p>
            </form>
        </div>
    )
}