import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub, AiOutlineTwitter, AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import { FaMicrosoft } from 'react-icons/fa';
import { useState } from "react";


const Registration = () => {
    const [isPass, setIsPass] = useState(true);
    const handleRegistrationSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleRegistrationSubmit} className="flex flex-col items-center w-80 mx-auto gap-3 mt-10 p-8 border-2 shadow rounded-md">
                <h1 className="text-2xl font-semibold text-gray-800">Please Register</h1>
                <input type="email" name="email" placeholder="Your Email" className="block border-2 border-gray-400 rounded-md py-1 px-3 w-full"/>
                <span className="relative w-full hover:cursor-pointer">
                    <input type={isPass ? 'password':'text'} name="password" placeholder="Your Password" className="block border-2 border-gray-400 rounded-md py-1 px-3 w-full" />
                    <span onClick={()=>setIsPass(!isPass)} className="absolute top-2.5 right-2">
                    {
                       isPass ? <AiFillEye/> : <AiFillEyeInvisible/> 
                    }
                    </span>
                </span>
                <input type="submit" value="Submit" className="bg-gray-800 rounded-lg px-4 py-2 text-white font-semibold w-fit" />
                <span className="font-bold">Or</span>
                <div className="flex gap-3 items-center text-xl">
                    <span className="text-base">Register With:</span>
                    <FcGoogle />
                    <AiOutlineGithub />
                    <FaMicrosoft />
                    <AiOutlineTwitter className="text-blue-500"/>
                </div>
                <p>Already have an Account? <Link to='/login' className="text-blue-600 font-semibold">Login</Link> </p>
            </form>
        </div>
    );
};

export default Registration;