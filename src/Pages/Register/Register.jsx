import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        console.log(name, email, photo, password);
    }

    return (
        <div>
            <form onSubmit={handleRegister}>

                <h2 className="text-2xl text-center font-bold mt-3 text-[#372727]">Register your account</h2>

                <div className=" md:w-3/4 lg:w-1/2 mx-auto px-3 md:px-5 py-2 md:py-5 my-3 md:my-5 shadow-lg ">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name..."
                            className="input input-bordered"
                        />
                    </div>

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
                            <span className="label-text font-bold">Photo url</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo url..."
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
                        <div className="mt-2 flex items-center">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-2" htmlFor="terms">Terms and Conditions</label>
                        </div>
                    </div>

                    <div className="form-control mt-2">
                        <button className="bg-[#372727] text-white px-2 py-1 rounded">Register</button>
                    </div>

                    <div className="text-center mt-2">
                        <h3>Already have an Account? <Link className=" text-[#372727] font-bold text-lg  ml-2" to="/login">SignIn</Link> </h3>
                    </div>
                </div>


            </form>
        </div>
    );
};

export default Register;