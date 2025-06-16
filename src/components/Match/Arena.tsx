import { CiFlag1 } from "react-icons/ci"
import { FaBrain, FaEye, FaHandHoldingHeart } from "react-icons/fa"
import { IoIosSettings, IoIosTimer } from "react-icons/io"
import { TbSend } from "react-icons/tb"
import { Chess } from 'chess.js'
import { useState } from "react"


export const Arena = () => {
  
    const chess = new Chess();
    const [clicked, setClicked] = useState(false);
    const [fen, setFen] = useState(chess.fen());
    const pieceMap = {R: '♜', N: '♞', B: '♝', Q: '♛', K: '♚', P: '♟', r: '♖', n: '♘', b: '♗', q: '♕', k: '♔', p: '♙'};
    chess.move('e4');
    chess.move('d5');
    const ChessBoard: string[][] = []
    const board = chess.board();
    for (let i = 0; i < 8; i++) {
        const row = [];
        for (let j = 0; j < 8; j++) {
            const piece = board[i][j];
            // console.log(piece?.square+" "+piece?.type+" "+piece?.color+" "+i+" "+j);
            if (piece) {
                row.push(piece.color === 'w' ? pieceMap[piece.type] : pieceMap[piece.type].toUpperCase());
            } else {
                row.push('');
            }
        }
        ChessBoard.push(row);
    }
    // useEffect(() => {
    //     //updates chessboard on fen change
    // }, []);
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white/5 text-white font-bold rounded-4xl">

      {/* <!-- Spectator Widget --> */}
      <button className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 transition rounded-full backdrop-blur-md border border-white/20" aria-label="Spectators">
          <FaEye />
          <span id="spectatorCount" className="text-sm">13 Watching</span>
      </button>
      {/* <!-- Main Grid --> */}
      <main className="relative z-10 max-w-[1800px] mx-auto w-full h-screen flex flex-col lg:grid lg:grid-cols-12 gap-6 p-6 lg:p-10">
        {/* <!-- Chat Panel (toggle on small, persistent on lg) --> */}
        <aside id="chatPanel" className="lg:col-span-3 flex flex-col bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transform transition-all duration-500 lg:translate-x-0 lg:opacity-100 translate-x-full opacity-0 lg:static fixed top-0 right-0 h-full w-80 z-20" >
            <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
                <h2 className="text-lg tracking-tight font-semibold">Chat</h2>
                <button className="lg:hidden" id="chatClose"><i data-lucide="x" className="w-5 h-5"></i></button>
            </div>
            <div id="chatMessages" className="flex flex-col flex-1 items-center justify-center font-bold text-xl text-neutral-400 space-y-4 p-4 overflow-y-auto">
                {/* <!-- demo messages --> */}
                Under Developement
            </div>
            <form id="chatForm" className="p-4 border-t border-white/10 flex gap-2">
                <input id="chatInput" placeholder="Message…" className="flex-1 bg-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-teal-400"/>
                <button className="px-3 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 transition">
                <TbSend />
            </button>
            </form>
        </aside>

          {/* <!-- Board + Players --> */}
        <section className="lg:col-span-6 flex flex-col items-center space-y-4">

            {/* <!-- Opponent Panel --> */}
          <div className="flex items-center justify-between w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-3 animate-fadeInUp duration-100 relative">
              <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=150&q=40" className="w-10 h-10 rounded-full object-cover border-2 border-white/10"/>
                  <div>
                      <p className="font-medium">GrandMaster99 🇳🇴</p>
                      <p className="text-xs text-white/60">2770 Elo</p>
                  </div>
              </div>
              <div className="flex items-center gap-3">
                  <div id="oppClock" className="font-mono text-xl tracking-tight">05:00</div>
                  <span className="px-2 py-1 text-xs rounded bg-white/10">Waiting…</span>
              </div>
          </div>

            {/* <!-- Chessboard Container --> */}
          <div className="relative top-13">
              {/* <!-- Coordinates -->
              <div className="absolute -top-6 left-0 right-0 flex justify-between px-2 text-xs text-white/40">
                  <div className="flex items-center">A</div>
                  <span>B</span>
                  <span>C</span>
                  <span>D</span>
                  <span>E</span>
                  <span>F</span>
                  <span>G</span>
                  <span>H</span>
              </div>
              <div className="absolute top-0 -left-6 bottom-0 flex flex-col justify-between py-2 text-xs text-white/40">
                  <span>8</span>
                  <span>7</span>
                  <span>6</span>
                  <span>5</span>
                  <span>4</span>
                  <span>3</span>
                  <span>2</span>
                  <span>1</span>
              </div> */}
              {/* <!-- Board --> */}
              <div id="board" className="grid grid-cols-8 sm:w-[420px] sm:h-[420px] lg:w-[540px] lg:h-[540px] aspect-square overflow-hidden bg-black/80 border border-white/20 shadow-md animate-fadeInUp duration-200">
                  {/* <!-- Squares --> */}
                  {Array.from({ length: 8 }).map((_, rowIndex) => {
                      return Array.from({ length: 8 }).map((_, colIndex) => {
                          const isLightSquare = (rowIndex + colIndex) % 2 === 0;
                          return (
                              <div key={`${rowIndex}-${colIndex}`} className={` group relative w-full h-full flex items-center justify-center 
                               ${isLightSquare ? 'bg-white/10' : 'bg-black/20'} ${clicked && ChessBoard[rowIndex][colIndex] ? 'cursor-grab' : ''}`}>
                                  {/* <!-- Placeholder for piece --> */}
                                <div className="absolute z-0 bottom-1 right-1 text-xs text-white/20" id={`${String.fromCharCode(97+colIndex)}${8-rowIndex}`}>
                                    {String.fromCharCode(97+colIndex)}{8-rowIndex}
                                </div>
                                <div className="absolute text-2xl">
                                    {/* //render piece using fen */}
                                    <button onClick={ (prev)=>{
                                        console.log(clicked+" "+prev);
                                        setClicked(!prev)
                                    } } className="hover:cursor-grab">
                                        {ChessBoard[rowIndex][colIndex]}
                                    </button>
                                    {/* {ChessBoard[rowIndex][colIndex]} */}
                                </div>
                              </div>
                          );
                      });
                  })}
              </div>
          </div>

            {/* <!-- Local Player Panel --> */}
          <div className="flex items-center justify-between w-full bg-white/5 backdrop-blur-lg rounded-xl px-4 py-3 ring-1 animate-fadeInUp duration-300 relative top-22">
              <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=150&q=40" className="w-10 h-10 rounded-full object-cover border-2 border-teal-400/30"/>
                  <div>
                      <p className="font-medium">You 🇺🇸</p>
                      <p className="text-xs text-white/60">2315 Elo</p>
                  </div>
              </div>
              <div className="flex items-center gap-3">
                  <div id="myClock" className="font-mono text-xl tracking-tight">05:00</div>
                  <span className="px-2 py-1 text-xs rounded bg-teal-500/20">Your Move</span>
              </div>
          </div>
        </section>

             {/* <!-- Game Info --> */}
            <aside className="lg:col-span-3 flex flex-col h-3/4 my-auto mx-10 gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 animate-fadeInUp duration-400">
             {/* <!-- Move History --> */}
              <div className="flex-1 overflow-y-auto">
                  <h3 className="text-xl text-center font-bold tracking-tight mb-2">Move History</h3>
                  <ol id="moveHistory" className="space-y-1 px-4 py-4 text-sm leading-relaxed">
                      {/* <li>1. e4 …</li>
                      <li>1. e4 …</li>
                      <li>1. e4 …</li> */}
                      {chess.history().map((move, index) => {
                          return <li key={index} className="text-center text-white text-xsm">{move}</li>
                      })}
                      {/* <li className="text-center text-white/20 text-xsm">your moves will appear here</li> */}
                  </ol>
            </div>

            {/* <!-- Analysis Toggle --> */}
            <button id="analysisToggle" className="flex items-center justify-center gap-2 mt-2 w-full py-2 bg-white/10 hover:bg-white/20 transition rounded-lg">
                <FaBrain />
                <span className="text-sm">AI Suggestions</span>
            </button>
          </aside>

           <div className="lg:col-span-12 absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3 animate-fadeInUp duration-500" >
            <button className="flex items-center gap-2 text-sm hover:bg-white/10 px-3 py-2 rounded-2xl transition">
            <CiFlag1 />Resign</button>
            <button className="flex items-center gap-2 text-sm hover:bg-white/10 px-3 py-2 rounded-2xl transition"><FaHandHoldingHeart />Offer Draw</button>
            <button className="flex items-center gap-2 text-sm hover:bg-white/10 px-3 py-2 rounded-2xl transition"><IoIosTimer/>5 + 0</button>
            <button className="flex items-center gap-2 text-sm hover:bg-white/10 px-3 py-2 rounded-2xl transition"><IoIosSettings/>Settings</button>
            <button id="chatOpen" className="lg:hidden flex items-center gap-2 text-sm hover:bg-white/10 px-3 py-2 rounded-2xl transition"><i data-lucide="message-circle" className="w-4 h-4"></i>Chat</button>
          </div>          
      </main>

      {/* <!-- Footer Bar --> */}

    </div>
  )
}





























// const ChessBoard = () => {
//     const fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
//     const initialBoard = [
//         ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
//         ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
//         ['', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', ''],
//         ['', '', '', '', '', '', '', ''],
//         ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
//         ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
//     ];

//   return (
//     <div className="h-160 w-160 bg-white rounded-lg grid-cols-8">
//         {/* <div className="flex flex-col border-4 border-gray-700 shadow-2xl rounded-lg overflow-hidden">
//             {initialBoard.map((row, rowIndex) => (
//                 <BoardRow key={rowIndex} row={row} rowIndex={rowIndex} />
//             ))}
//         </div> */}
//     </div>
//   )
// }
// // const Square = ({square, onClick}: {square: string, onClick: () => void}) => {
// //     return (
// //         <span className="w-19 h-19 bg-lime-500 rounded-lg" onClick={onClick}>
// //             {square}
// //         </span>
// //     )
// // }
// // const BoardRow = ({ row, rowIndex }: { row: string[]; rowIndex: number }) => {
// //   return (
// //     <div className="flex">
// //       {row.map((piece, colIndex) => {
// //         const color = (rowIndex + colIndex) % 2 === 0 ? 'light' : 'dark';
// //         return (
// //           <Square
// //             key={`${rowIndex}-${colIndex}`}
// //             color={color}
// //             piece={piece}
// //           />
// //         );
// //       })}
// //     </div>
// //   );
// // };