import { NavLink } from "react-router-dom"

export const HeroSection = () => {
    return (
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
)}