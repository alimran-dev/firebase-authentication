import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub, AiOutlineTwitter, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {FaMicrosoft} from 'react-icons/fa'
import { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Login = () => {
    const [isPass, setIsPass] = useState(true);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const { displayName, email, photoURL } = user || {};

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                const errorMsg = error.message;
                console.log(errorMsg);
            })
    }

    const handleForgot = () => {
        console.log('clicked')
    }

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                console.log('Sign Out successfully');
        })
            .catch(() => {
                console.error('Error occurred');
        })
    }

    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result?.user;
                setUser(user);
                console.log(user);
        })
            .catch(error => {
            console.error(error);
        })
    }
    const handleGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result?.user;
                setUser(user);
            console.log(user)
            })
            .catch(error => {
                console.log(error);
        })
    }
    return (
        <div>
            <form onSubmit={handleLoginSubmit} className="flex flex-col items-center w-80 mx-auto gap-3 mt-10 p-8 border-2 shadow rounded-md">
                <h1 className="text-2xl font-semibold text-gray-800">Please Login</h1>
                <input type="email" name="email" placeholder="Your Email" className="block border-2 border-gray-400 rounded-md py-1 px-3 w-full" />
                <span className="relative w-full hover:cursor-pointer">
                    <input type={isPass ? 'password':'text'} name="password" placeholder="Your Password" className="block border-2 border-gray-400 rounded-md py-1 px-3 w-full" />
                    <span onClick={()=>setIsPass(!isPass)} className="absolute top-2.5 right-2">
                    {
                       isPass ? <AiFillEye/> : <AiFillEyeInvisible/> 
                    }
                    </span>
                </span>
                <input type="submit" value="Submit" className="bg-gray-800 rounded-lg px-4 py-2 text-white font-semibold w-fit hover:cursor-pointer" />
                <span className="font-bold">Or</span>
                <div className="flex gap-3 items-center text-xl">
                    <span className="text-base">Login With:</span>
                    <Link onClick={handleGoogle}><FcGoogle /></Link>
                    <Link onClick={handleGithub}><AiOutlineGithub /></Link>
                    <Link><FaMicrosoft /></Link>
                    <Link><AiOutlineTwitter className="text-blue-500"/></Link>
                </div>
                <Link onClick={handleForgot} className="text-blue-600">Forgotten Password?</Link>
                <p>Don&apos;t have an Account? <Link to='/registration' className="text-blue-600 font-semibold">Register</Link> </p>
            </form>
            {
                user && <div className="text-center text-2xl font-semibold mt-4">
                    <p>Name: {displayName}</p>
                    <p>Email: {email}</p>
                    <img src={photoURL || ''} alt="" />
                    <button onClick={handleLogout} className="text-base bg-gray-800 rounded-md px-4 py-2 text-white">Log Out</button>
                </div>
            }
        </div>
    );
};

export default Login;