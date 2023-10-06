import { Link, NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";



const Navbar = () => {

    const navLinks = <>
        <li className="my-auto"><NavLink to='/'>Home</NavLink></li>
        <li className="my-auto"><NavLink to='/news'>News</NavLink></li>
        <li className="my-auto" ><NavLink to='/destination'>Destination</NavLink></li>
        <li className="my-auto"><NavLink to='/blog'>Blog</NavLink></li>
        <li className="my-auto"><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="mx-28 my-2 bg-transparent sticky z-10 text-white">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow rounded-box w-52 text-center">
                            <li className="flex ">
                                   <Link><FaSistrix></FaSistrix></Link>
                                    <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" />
                          
                            </li>
                            {navLinks}
                        </ul>
                    </div>
                    <Link className="normal-case text-xl" to='/'><img className="h-14 w-28 z-0" src='https://i.ibb.co/nwTZs3G/logo.png' alt="" /></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-center">
                        <li>
                            <div className="flex ">
                            <Link><FaSistrix></FaSistrix></Link>
                                <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" />
                            </div>
                        </li>
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn bg-[#F9A51A]" to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;