// import { useEffect, useState } from "react";

const GameArena = () => {
  // const [loading, setLoading] = useState("");
  // const text= "Searching for an opponent";
  // // useEffect(() => {
  //   for(let j = 0; j < text.length; j++) {
  //     const char = text[j];
  //     awai rtsetTimeout(() => {
  //       setLoading(prev => prev + char);
  //     }, 1000);
  //   }
  // }, []);
  return (
    <div>
        <div className="absolute area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='flex flex-col space-x-2 justify-center items-center gap-1 h-screen dark:invert'>
        {/* <span className='sr-only'>Loading...</span> */}
        <div className="flex gap-3 justify-center items-center">
          <div className="text-5xl font-extrabold pb-6 mx-4">Matching</div>
          <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-4 w-4 bg-black rounded-full animate-bounce'></div>
        </div>
        <div className="text-3xl font-extrabold pb-6 my-5">
          Searching for an opponent
        </div>
      </div>
    </div>
  )
}

export default GameArena