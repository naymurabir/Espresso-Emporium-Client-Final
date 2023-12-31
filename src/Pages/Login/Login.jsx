import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const userInfo = useContext(AuthContext)
    const { loginUser, googleLogin, githubLogin } = userInfo

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        // Call login user and pass email and password
        loginUser(email, password)
            .then(result => {
                console.log(result.user);

                const lastSignInTime = result.user.metadata.lastSignInTime
                const user = { email, lastLoggedAt: lastSignInTime }

                fetch('https://espresso-emporium-server-e5fc1hl1h-naymur-rahman-abirs-projects.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

                navigate(location?.state ? location.state : '/')
                toast("User login successful.")
                e.target.reset()
            })
            .catch(error => {
                console.log("Error", error.message);
                toast("Invalid email / password")
            })

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                navigate(location?.state ? location.state : '/')
                console.log(user);
                toast("User logged in successfully.")
            })
            .catch(error => {
                console.log("Error", error.message);
                toast(error.message)
            })

    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(location?.state ? location.state : '/')
                toast("User logged in successfully.")
            })
    }

    return (
        <div>
            <form onSubmit={handleLogin}>

                <h2 className="text-2xl text-center font-bold mt-3 text-[#372727]">Log In</h2>

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

                    <div className="flex justify-around flex-col md:flex-row md:gap-2">
                        <button onClick={handleGoogleLogin} className="flex items-center justify-center mt-2 transform border rounded-lg dark:border-gray-700">
                            <div className="px-4 py-2">
                                <FcGoogle className="w-6 h-6"></FcGoogle>
                            </div>

                            <span className="w-5/6 px-4 py-3 font-bold text-center text-[#372727]">Sign in with Google</span>
                        </button>
                        <button onClick={handleGithubLogin} className="flex items-center justify-center mt-2 transform border rounded-lg dark:border-gray-700">
                            <div className="px-4 py-2">
                                <FaGithub className="w-6 h-6"></FaGithub>
                            </div>

                            <span className="w-5/6 px-4 py-3 font-bold text-center text-[#372727] ">Sign in with Github</span>
                        </button>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </form>
        </div>
    );
};

export default Login;