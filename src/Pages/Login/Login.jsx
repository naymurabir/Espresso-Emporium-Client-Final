import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <form>

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
                            name="Password"
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
                </div>


            </form>
        </div>
    );
};

export default Login;