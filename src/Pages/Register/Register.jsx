import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const Register = () => {

    const userInfo = useContext(AuthContext)
    const { createUser, logOut } = userInfo

    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        const termsAccepted = form.get('terms')
        console.log(name, email, photo, password, termsAccepted);

        if (password.length < 6) {
            toast("Password length must be 6 characters long.")
            return
        }

        else if (!/[A-Z]/.test(password)) {
            toast("Password must have an Uppercase letter.")
            return
        }

        else if (!/[@#$%^&+=!]/.test(password)) {
            toast("Password must have a special character. [hints: @#$%^&+=!]");
            return;
        }

        else if (!termsAccepted) {
            toast("Please accept our terms and conditions before register.")
            return
        }

        //Call create user function and pass the email & password
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast("User created successfully.")

                const createdAt = result.user?.metadata?.creationTime
                const user = { email, name, createdAt: createdAt }

                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json)
                    .then(data => {
                        console.log(data);
                        toast("User's email and passed has been stored in DB.")
                    })


                //Update user
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        toast("User updated");
                        navigate('/login')
                        logOut()
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
                e.target.reset()

            })
            .catch(error => {
                console.log("Error:", error.massage);
                toast("Your email is already used.")
            })
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
                        />
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
                    <ToastContainer></ToastContainer>
                </div>


            </form>
        </div>
    );
};

export default Register;