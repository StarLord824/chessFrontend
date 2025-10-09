import { useState, useEffect } from 'react';
import { 
  Flag, 
  RotateCcw, 
  MessageSquare, 
  Settings,
  Crown,
  User,
  ArrowLeft,
  Volume2,
  VolumeX
} from 'lucide-react';
import { useUserStore } from '../../utils/store';

export default function Arena() {
  const [whiteTime, setWhiteTime] = useState(600); // 10 minutes in seconds
  const [blackTime, setBlackTime] = useState(600);
  const [currentTurn, setCurrentTurn] = useState('white');
  const [gameStatus, setGameStatus] = useState('playing'); // playing, paused, ended
  const [moveCount, setMoveCount] = useState(1);
  const [showChat, setShowChat] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(null);

  const { username, rating, avatar } = useUserStore.getState();
  // Player data
  const players = {
    white: { name: username, rating: rating, avatar: avatar },
    black: { name: 'ChessNinja', rating: 1923, avatar: '♚' }
  };

  // Initial board setup
  const initialBoard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
  ];

  const [board, setBoard] = useState<(string | null)[][]>(initialBoard);

  // Chess piece symbols
  const pieceSymbols = {
    'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
    'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟'
  };

  // Timer effect
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const timer = setInterval(() => {
      if (currentTurn === 'white') {
        setWhiteTime(prev => Math.max(0, prev - 1));
      } else {
        setBlackTime(prev => Math.max(0, prev - 1));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTurn, gameStatus]);

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle square click
  const handleSquareClick = (row: number, col: number) => {
    if (selectedSquare) {
      // Move piece
      const newBoard = board.map(r => [...r]);
      const [fromRow, fromCol] = selectedSquare as [number, number];
      newBoard[row][col] = board[fromRow][fromCol];
      newBoard[fromRow][fromCol] = null;
      setBoard(newBoard);
      setSelectedSquare(null);
      setCurrentTurn(currentTurn === 'white' ? 'black' : 'white');
      if (currentTurn === 'white') setMoveCount(prev => prev + 1);
    } else if (board[row][col]) {
      // Select piece
      const piece = board[row][col];
      const isWhitePiece = piece === piece.toUpperCase();
      if ((currentTurn === 'white' && isWhitePiece) || (currentTurn === 'black' && !isWhitePiece)) {
        setSelectedSquare([row, col]);
      }
    }
  };

  // Game actions
  const handleResign = () => {
    setGameStatus('ended');
    // Handle resignation logic
  };

  const handleOfferDraw = () => {
    // Handle draw offer logic
  };

  // Get rank and file labels
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col overflow-hidden">
      
      {/* Compact Header */}
      <div className="flex items-center justify-between p-3 border-b border-slate-700/50">
        <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" />
          Lobby
        </button>
        
        <div className="text-center">
          <div className="text-white font-medium text-sm">Move {moveCount}</div>
          <div className="text-slate-400 text-xs">Rated Blitz</div>
        </div>

        <div className="flex items-center gap-1">
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 bg-slate-800/50 hover:bg-slate-700/50 rounded-md transition-colors"
          >
            {soundEnabled ? 
              <Volume2 className="w-4 h-4 text-slate-400" /> : 
              <VolumeX className="w-4 h-4 text-slate-400" />
            }
          </button>
          <button className="p-1.5 bg-slate-800/50 hover:bg-slate-700/50 rounded-md transition-colors">
            <Settings className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Game Board Section */}
        <div className="flex-1 flex flex-col p-4 min-w-0">
          
          {/* Black Player Info - Compact */}
          <div className={`
            flex items-center justify-between p-3 rounded-lg border mb-3 transition-all duration-300
            ${currentTurn === 'black' ? 'bg-slate-700/50 border-slate-600 shadow-lg shadow-emerald-500/10' : 'bg-slate-800/30 border-slate-700/30'}
          `}>
            <div className="flex items-center gap-2">
              <div className="text-xl">{players.black.avatar}</div>
              <div>
                <div className="text-white font-medium flex items-center gap-1 text-sm">
                  {players.black.name}
                  {players.black.rating > players.white.rating && <Crown className="w-3 h-3 text-yellow-400" />}
                </div>
                <div className="text-slate-400 text-xs">{players.black.rating}</div>
              </div>
            </div>
            <div className={`
              text-lg font-mono px-3 py-1.5 rounded-md transition-all duration-300
              ${currentTurn === 'black' ? 'bg-emerald-500/20 text-emerald-400 shadow-md' : 'bg-slate-700/50 text-white'}
            `}>
              {formatTime(blackTime)}
            </div>
          </div>

          {/* Enhanced Chess Board */}
          <div className="flex-1 flex items-center justify-center min-h-0">
            <div className="relative">
              {/* Board with coordinates */}
              <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-2xl shadow-2xl border-4 border-amber-900/20">
                
                {/* File labels (top) */}
                <div className="flex justify-center mb-2">
                  {files.map(file => (
                    <div key={file} className="w-12 h-4 flex items-center justify-center text-amber-800 text-xs font-semibold">
                      {file}
                    </div>
                  ))}
                </div>

                <div className="flex">
                  {/* Rank labels (left) */}
                  <div className="flex flex-col justify-center mr-2">
                    {ranks.map(rank => (
                      <div key={rank} className="w-4 h-12 flex items-center justify-center text-amber-800 text-xs font-semibold">
                        {rank}
                      </div>
                    ))}
                  </div>

                  {/* Chess Board */}
                  <div className="grid grid-cols-8 gap-0 rounded-lg overflow-hidden shadow-inner border-2 border-amber-800/30">
                    {board.map((row, rowIndex) =>
                      row.map((piece, colIndex) => {
                        const isLight = (rowIndex + colIndex) % 2 === 0;
                        const isSelected = selectedSquare && selectedSquare[0] === rowIndex && selectedSquare[1] === colIndex;
                        
                        return (
                          <button
                            key={`${rowIndex}-${colIndex}`}
                            onClick={() => handleSquareClick(rowIndex, colIndex)}
                            className={`
                              w-12 h-12 flex items-center justify-center text-3xl transition-all duration-200 relative
                              hover:brightness-110 hover:scale-105 hover:z-10 active:scale-95
                              ${isLight 
                                ? 'bg-gradient-to-br from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200' 
                                : 'bg-gradient-to-br from-amber-800 to-amber-900 hover:from-amber-700 hover:to-amber-800'
                              }
                              ${isSelected ? 'ring-2 ring-blue-500 ring-offset-1 ring-offset-amber-200 shadow-lg z-20' : ''}
                            `}
                            style={{ 
                              textShadow: isLight ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(255,255,255,0.3)',
                              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))'
                            }}
                          >
                            {piece && (
                              <span className={`
                                ${isLight ? 'text-amber-900' : 'text-amber-50'}
                                drop-shadow-md
                              `}>
                                {pieceSymbols[piece as keyof typeof pieceSymbols]}
                              </span>
                            )}
                          </button>
                        );
                      })
                    )}
                  </div>

                  {/* Rank labels (right) */}
                  <div className="flex flex-col justify-center ml-2">
                    {ranks.map(rank => (
                      <div key={rank} className="w-4 h-12 flex items-center justify-center text-amber-800 text-xs font-semibold">
                        {rank}
                      </div>
                    ))}
                  </div>
                </div>

                {/* File labels (bottom) */}
                <div className="flex justify-center mt-2">
                  {files.map(file => (
                    <div key={file} className="w-12 h-4 flex items-center justify-center text-amber-800 text-xs font-semibold">
                      {file}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* White Player Info - Compact */}
          <div className={`
            flex items-center justify-between p-3 rounded-lg border mt-3 transition-all duration-300
            ${currentTurn === 'white' ? 'bg-slate-700/50 border-slate-600 shadow-lg shadow-emerald-500/10' : 'bg-slate-800/30 border-slate-700/30'}
          `}>
            <div className="flex items-center gap-2">
              <div className="text-xl">{players.white.avatar}</div>
              <div>
                <div className="text-white font-medium flex items-center gap-1 text-sm">
                  {players.white.name} 
                  <User className="w-3 h-3 text-blue-400" />
                  {players.white.rating > players.black.rating && <Crown className="w-3 h-3 text-yellow-400" />}
                </div>
                <div className="text-slate-400 text-xs">{players.white.rating}</div>
              </div>
            </div>
            <div className={`
              text-lg font-mono px-3 py-1.5 rounded-md transition-all duration-300
              ${currentTurn === 'white' ? 'bg-emerald-500/20 text-emerald-400 shadow-md' : 'bg-slate-700/50 text-white'}
            `}>
              {formatTime(whiteTime)}
            </div>
          </div>
        </div>

        {/* Compact Sidebar */}
        <div className="w-72 bg-slate-800/30 border-l border-slate-700/30 flex flex-col">
          
          {/* Game Actions */}
          <div className="p-4 border-b border-slate-700/30">
            <h3 className="text-sm font-medium text-white mb-3">Actions</h3>
            <div className="space-y-2">
              <button
                onClick={handleOfferDraw}
                className="w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 text-blue-400 rounded-md py-2 px-3 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3 h-3" />
                Draw
              </button>
              
              <button
                onClick={handleResign}
                className="w-full bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-400 rounded-md py-2 px-3 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Flag className="w-3 h-3" />
                Resign
              </button>
            </div>
          </div>

          {/* Move History */}
          <div className="p-4 border-b border-slate-700/30 flex-1 min-h-0">
            <h3 className="text-sm font-medium text-white mb-3">Moves</h3>
            <div className="overflow-y-auto space-y-1 max-h-32">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-slate-400">1.</div>
                <div className="text-white">e4</div>
                <div className="text-white">e5</div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-slate-400">2.</div>
                <div className="text-white">Nf3</div>
                <div className="text-slate-400">...</div>
              </div>
            </div>
          </div>

          {/* Chat Toggle */}
          <div className="p-4">
            <button
              onClick={() => setShowChat(!showChat)}
              className="w-full bg-slate-700/50 hover:bg-slate-600/50 rounded-md p-3 transition-all duration-300 flex items-center justify-center gap-2 text-white text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              {showChat ? 'Hide Chat' : 'Chat'}
            </button>

            {/* Chat Panel */}
            {showChat && (
              <div className="mt-3 bg-slate-700/30 rounded-md p-3 border border-slate-600/30">
                <div className="space-y-1 max-h-24 overflow-y-auto mb-2">
                  <div className="text-xs text-slate-400">ChessNinja: Good luck!</div>
                  <div className="text-xs text-slate-400">You: Thanks, you too!</div>
                </div>
                <input
                  type="text"
                  placeholder="Type..."
                  className="w-full bg-slate-600/50 border border-slate-500/50 rounded px-2 py-1 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}