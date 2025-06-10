import { Dispatch, RefObject, SetStateAction, useRef } from "react";
import { useState } from "react";
// import {WebSocket} from 'ws';
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
  const [matching, setMatching] = useState(false);
  const socket = useRef<WebSocket>(new WebSocket('ws://localhost:8080'));
  socket.current.onopen = () => {
      console.log('WebSocket connection established');
      // ws.current.send(JSON.stringify({ message: 'Hello Server!' }));
  };
  socket.current.onmessage = (event) => {
    console.log(event.data);
  };
  socket.current.onclose = () => {
    console.log('WebSocket connection closed');
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-transparent">
      {/* <h1 className="text-white">hi</h1> */}
      {/* <Joining socket={socket} setMatching={setMatching}/> */}
      { matching ? <Matching/> : <Joining socket={socket} setMatching={setMatching}/>}
    </div>
  )
}


interface JoiningProps {
  socket: RefObject<WebSocket>;
  setMatching: Dispatch<SetStateAction<boolean>>;
}

const Joining = ({ socket, setMatching }: JoiningProps) => {
  const [name, setName] = useState("");
  return (
    <div className="h-1/3 w-1/4 flex flex-col justify-center items-center bg-white/5 text-white font-bold rounded-4xl">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="text-center w-40 h-10 my-3 border-2 border-white active:border-2 rounded-lg px-3 py-2"/>
      <button onClick={() => {
        if (socket) {
          console.log(name)
          socket.current.send(JSON.stringify({ type: "SetName", data: name }));
          // name === "" ? setMatching(true) : setMatching(false);
        }
        setMatching(true);
      }}
      className="bg-white/50 flex justify-center items-center hover:bg-white/30 duration-150 text-center w-40 h-10 my-2 py-3 rounded-lg text-lg"
      >SetName</button>
    </div>
  )
}

const Matching = ()=>{
  return (
    <div className='flex flex-col space-x-2 h-full w-full justify-center items-center gap-1 dark:invert'>
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
  )
}
export default GameArena