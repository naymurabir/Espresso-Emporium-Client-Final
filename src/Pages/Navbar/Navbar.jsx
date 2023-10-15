import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <NavLink to="/" className="md:text-white text-lg mr-3">Home</NavLink>

        <NavLink to="/addCoffee" className="md:text-white text-lg mr-3">Add Coffee</NavLink>

        <NavLink to="/register" className="md:text-white text-lg mr-3">Register</NavLink>
    </>

    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/R9GtwRh/15.jpg)' }} className="navbar bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 text-black ">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-8 md:w-12" src="https://i.ibb.co/y4yNqht/logo1.png" alt="" />
                <h2 className=" text-white text-2xl hidden md:block">Espresso Emporium</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login">
                    <button className="bg-white text-black px-3 py-1 rounded">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;