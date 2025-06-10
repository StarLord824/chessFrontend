import { NavLink } from "react-router";

const LandingPage = () => {
    const menuItems= [ {attribute: "Home", value: "/"},
        {attribute: "Play", value: "/match"},
        {attribute: "Settings", value: "/settings"},
        {attribute: "About", value: "/about"}];
     return (
    <div> 
            
        <div className='Sidebar absolute flex flex-col items-center w-1/8 h-screen bg-white/5 text-white font-bold '>
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
        <div className=' h-screen w-full'>
            <div className="AboveBar h-3/5 flex justify-center items-center gap-30">
                <div className="group flex justify-center items-center">
                    <img className=" relative m-5 h-full w-full" src="https://imgs.search.brave.com/wM7w7RX_hJi8AsEQA1ty4Ro_QA9ByLLQ6IA67IKxLLw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hlc3MuY29tL2J1/bmRsZXMvd2ViL2lt/YWdlcy93ZWIvYm9h/cmQtcHV6emxlcy40/YTU0YzQ5Zi5wbmc" alt="" />
                </div>
                <div className="flex flex-col gap-10 justify-center items-center w-1/5">
                    <div className='text-center text-white font-bold text-6xl'>Play Chess Online on the #1 Site!</div>
                    <div className="group w-full bg">
                        <NavLink to="/match">
                            <button className='bg-lime-500 group-hover:bg-lime-600 group-hover:text-3xl duration-200 text-center w-full h-20 py-3 rounded-lg font-extrabold text-4xl text-white'>Play Online</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage