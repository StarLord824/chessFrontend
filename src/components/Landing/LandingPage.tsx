import { NavLink } from "react-router";
import { HeroSection } from "./HeroSection";

const LandingPage = () => {
    return (
    <div> 
        <Sidebar/>
        <HeroSection/>
    </div>
  )
}

const Sidebar = () => {
    const menuItems= [ {attribute: "Home", value: "/home"},
        {attribute: "Play", value: "/match"},
        {attribute: "Settings", value: "/settings"},
        {attribute: "About", value: "/about"}];
    return (
        <div className='Sidebar absolute duration-100 flex flex-col items-center w-1/8 h-screen bg-white/5 text-white font-bold '>
            <h1 className='text-4xl m-4 p-4 border-b-2 border-neutral-600 rounded-lg'>Chess.com</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className=' group text-xl p-4 hover:bg-neutral-700 duration-75 cursor-pointer border-b-2 border-neutral-600 w-full text-center rounded-sm my-1'>
                        <NavLink to={item.value} className="text-white group-hover:text-lime-400">
                            {item.attribute}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <NavLink to="/login" className='group'>
                        <button className='bg-lime-500 group-hover:bg-lime-600 duration-150 text-center w-30 h-12 mt-30 my-3 py-3 rounded-lg'>Log In</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signin" className='group'>
                        <button className='bg-white group-hover:bg-white/70 duration-100 text-neutral-700 text-center w-30 py-3 my-3 rounded-lg'>SignUp</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    )}
export default LandingPage