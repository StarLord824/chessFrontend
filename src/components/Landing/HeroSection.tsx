import { useState, useEffect } from "react";
import { Play, Users, Trophy, Zap, Star, Crown, Sparkles } from "lucide-react";

export const HeroSection = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [statsCounter, setStatsCounter] = useState({ players: 0, games: 0, rating: 0 });

    // Animation trigger
    useEffect(() => {
        setIsVisible(true);

        const interval = setInterval(() => {
            setStatsCounter(prev => ({
                players: prev.players < 100000 ? prev.players + 2500 : 100000,
                games: prev.games < 50000000 ? prev.games + 125000 : 50000000,
                rating: prev.rating < 4.8 ? prev.rating + 0.02 : 4.8
            }));
        }, 30);

        setTimeout(() => clearInterval(interval), 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div 
          className={`
            relative min-h-screen transition-all duration-500 
            ${sidebarOpen ? "md:ml-64" : "md:ml-20"} ml-0 
            w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
          `}
        >
            {/* Background FX */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 text-6xl text-white/5 animate-bounce">♛</div>
                <div className="absolute top-40 right-20 text-4xl text-white/5 animate-bounce delay-100">♝</div>
                <div className="absolute bottom-32 left-20 text-5xl text-white/5 animate-bounce delay-200">♞</div>
                <div className="absolute bottom-20 right-32 text-7xl text-white/5 animate-bounce delay-300">♜</div>

                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-8">
                <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Side - Chess Board */}
                    <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 scale-110"></div>
                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl border border-slate-700/50 shadow-2xl">
                                <img 
                                    className="w-full h-auto rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500" 
                                    src="https://www.chess.com/bundles/web/images/web/board-puzzles.4a54c49f.png" 
                                    alt="Chess Board" 
                                />
                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                                    Live Games: 12,547
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Hero Text */}
                    <div className={`space-y-8 text-center lg:text-left transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold">
                            <Crown className="w-4 h-4" />
                            World's #1 Chess Platform
                            <Sparkles className="w-4 h-4" />
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                            <span className="block bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                                Master Chess
                            </span>
                            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Like Never Before
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                            Join millions of players worldwide in the most advanced chess experience. 
                            <span className="text-blue-400 font-semibold"> Play, learn, and dominate</span> on the ultimate chess platform.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-6 py-6">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                    {statsCounter.players.toLocaleString()}+
                                </div>
                                <div className="text-slate-400 text-sm">Active Players</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                                    {(statsCounter.games / 1000000).toFixed(0)}M+
                                </div>
                                <div className="text-slate-400 text-sm">Games Played</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1">
                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                        {statsCounter.rating.toFixed(1)}
                                    </div>
                                </div>
                                <div className="text-slate-400 text-sm">App Rating</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                <div className="relative flex items-center justify-center gap-3">
                                    <Play className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                                    <span>Play Online Now</span>
                                    <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                            </button>

                            <button className="group px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold text-xl rounded-2xl border border-slate-600 hover:border-slate-500 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center justify-center gap-3">
                                    <Users className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                                    <span>Join Community</span>
                                </div>
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-8 text-slate-400">
                            <div className="flex items-center gap-2">
                                <Trophy className="w-5 h-5 text-yellow-500" />
                                <span className="text-sm">FIDE Approved</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-blue-500" />
                                <span className="text-sm">Lightning Fast</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-green-500" />
                                <span className="text-sm">24/7 Tournaments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
