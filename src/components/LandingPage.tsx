const LandingPage = () => {
    const menuItems= [ "Home", "Play", "Settings", "About"]
  return (
    <div> 
        <div className='Sidebar absolute flex flex-col items-center w-1/9 h-screen bg-neutral-800 text-white font-bold '>
            <h1 className='text-4xl m-4 p-4 border-b-2 border-neutral-600 rounded-2xl'>Chess.com</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className='text-xl p-4 hover:bg-neutral-700 cursor-pointer border-b-2 border-neutral-600 w-full text-center'>
                        {item}
                    </li>
                ))}
                <li><button className='bg-lime-400 text-center w-30 mt-30 my-3 py-3 rounded-lg'>Log In</button>
                </li>
                <li>
                <button className='bg-white text-neutral-700 text-center w-30 py-3 my-3 rounded-lg'>SignUp</button>
                </li>
            </ul>
        </div>
        <div className='bg-neutral-700 h-screen w-full'>
            <div className="AboveBar h-3/5 flex justify-center items-center gap-30">
                <div>
                    <img className="m-5" src="https://imgs.search.brave.com/wM7w7RX_hJi8AsEQA1ty4Ro_QA9ByLLQ6IA67IKxLLw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hlc3MuY29tL2J1/bmRsZXMvd2ViL2lt/YWdlcy93ZWIvYm9h/cmQtcHV6emxlcy40/YTU0YzQ5Zi5wbmc" alt="" />
                </div>
                <div className="flex flex-col gap-10 justify-center items-center w-1/5">
                    <div className='text-center text-white font-bold text-6xl'>Play Chess Online on the #1 Site!</div>
                    <div className="w-full bg">
                        <button className='bg-lime-400 text-center w-full h-20 py-3 rounded-lg font-extrabold text-4xl text-white'>Play Online</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage