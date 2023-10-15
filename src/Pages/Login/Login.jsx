import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const userInfo = useContext(AuthContext)
    const { loginUser } = userInfo

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        // Call login user and pass email and password
        loginUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast("User login successful.")
                e.target.reset()
            })
            .catch(error => {
                console.log("Error", error.message);
                toast("Invalid email / password")
            })

    }

    return (
        <div>
            <form onSubmit={handleLogin}>

                <h2 className="text-2xl text-center font-bold mt-3 text-[#372727]">Register your account</h2>

                <div className=" md:w-3/4 lg:w-1/2 mx-auto px-3 md:px-5 py-2 md:py-5 my-3 md:my-5 shadow-lg ">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email..."
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password"
                            name="password"
                            placeholder="Password..."
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control mt-2">
                        <button className="bg-[#372727] text-white px-2 py-1 rounded">Login</button>
                    </div>

                    <div className="flex justify-center ">
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-base">Forgot password?</a>
                        </label>
                    </div>

                    <div className="text-center mt-2">
                        <h3>Do not have an Account?<Link className=" text-[#372727] font-bold text-lg ml-2" to="/register">Register</Link> </h3>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>


            </form>
        </div>
    );
};

export default Login;