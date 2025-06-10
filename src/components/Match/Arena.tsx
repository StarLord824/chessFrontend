import { HeaderBar } from "../Login/HeaderBar";


export const Arena = () => {
  return (
    <div className="h-screen w-full 1/3 w-1/4 flex flex-col justify-center items-center bg-white/5 text-white font-bold rounded-4xl">
      <div className="text-5xl font-extrabold pb-6 mx-4">Timer</div>
      <ChessBoard/>
      <HeaderBar whitePlayer="Abhinav" blackPlayer="Aditya"/>
    </div>
  )
}

const ChessBoard = () => {
    const fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    const initialBoard = [
        ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
        ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
        ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
    ];

  return (
    <div className="h-160 w-160 bg-white rounded-lg grid-cols-8">
        {/* <div className="flex flex-col border-4 border-gray-700 shadow-2xl rounded-lg overflow-hidden">
            {initialBoard.map((row, rowIndex) => (
                <BoardRow key={rowIndex} row={row} rowIndex={rowIndex} />
            ))}
        </div> */}
    </div>
  )
}
// const Square = ({square, onClick}: {square: string, onClick: () => void}) => {
//     return (
//         <span className="w-19 h-19 bg-lime-500 rounded-lg" onClick={onClick}>
//             {square}
//         </span>
//     )
// }
// const BoardRow = ({ row, rowIndex }: { row: string[]; rowIndex: number }) => {
//   return (
//     <div className="flex">
//       {row.map((piece, colIndex) => {
//         const color = (rowIndex + colIndex) % 2 === 0 ? 'light' : 'dark';
//         return (
//           <Square
//             key={`${rowIndex}-${colIndex}`}
//             color={color}
//             piece={piece}
//           />
//         );
//       })}
//     </div>
//   );
// };