import { useState, useEffect } from "react";
import { Home, Play, Settings, Info, ChevronLeft, ChevronRight, Menu, X, Users} from "lucide-react";

const menuItems = [
  { attribute: "Home", value: "/home", icon: <Home className="w-5 h-5" /> },
  { attribute: "Play", value: "/match", icon: <Play className="w-5 h-5" /> },
  { attribute: "Settings", value: "/settings", icon: <Settings className="w-5 h-5" /> },
  { attribute: "About", value: "/about", icon: <Info className="w-5 h-5" /> },
];

export default function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Sidebar menuItems={menuItems} open={sidebarOpen} setOpen={setSidebarOpen} />
      <HeroSection sidebarOpen={sidebarOpen} />
    </div>
  );
}

function HeroSection({ sidebarOpen }: { sidebarOpen: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const [statsCounter, setStatsCounter] = useState({ players: 0, games: 0, tournaments: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setStatsCounter(prev => ({
        players: prev.players < 50000 ? prev.players + 1250 : 50000,
        games: prev.games < 12000000 ? prev.games + 300000 : 12000000,
        tournaments: prev.tournaments < 2400 ? prev.tournaments + 60 : 2400
      }));
    }, 40);

    setTimeout(() => clearInterval(interval), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`
        flex-1 relative min-h-screen transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'}
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
      `}
    >
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"></div>
        
        {/* Single subtle chess piece */}
        <div className="absolute top-32 right-32 text-6xl text-white/[0.02] select-none">♛</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 lg:px-16">
        <div className="max-w-6xl w-full">
          
          {/* Center-aligned content */}
          <div className="text-center space-y-16">
            
            {/* Minimal Brand Badge */}
            <div 
              className={`
                inline-flex items-center gap-2 bg-slate-900/40 backdrop-blur-sm 
                border border-slate-800/50 text-slate-400 px-5 py-2 rounded-full text-sm
                transform transition-all duration-1000 delay-200
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
              `}
            >
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              Chess Mastery Platform
            </div>

            {/* Clean Typography Hierarchy */}
            <div 
              className={`
                space-y-8 transform transition-all duration-1000 delay-400
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-white/95 leading-none">
                Chess
              </h1>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                  Where strategy meets perfection.
                </p>
                <p className="text-lg text-slate-500 mt-4 font-light">
                  Join thousands of players in the ultimate chess experience.
                </p>
              </div>
            </div>

            {/* Elegant Stats Grid */}
            <div 
              className={`
                max-w-3xl mx-auto transform transition-all duration-1000 delay-600
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
              `}
            >
              <div className="grid grid-cols-3 gap-12 py-12">
                <div className="group cursor-default">
                  <div className="text-4xl md:text-5xl font-extralight text-white/90 mb-2 group-hover:text-white transition-colors duration-300">
                    {(statsCounter.players / 1000).toFixed(0)}K
                  </div>
                  <div className="text-slate-500 text-sm font-light uppercase tracking-widest">
                    Players
                  </div>
                </div>
                
                <div className="group cursor-default">
                  <div className="text-4xl md:text-5xl font-extralight text-white/90 mb-2 group-hover:text-white transition-colors duration-300">
                    {(statsCounter.games / 1000000).toFixed(0)}M
                  </div>
                  <div className="text-slate-500 text-sm font-light uppercase tracking-widest">
                    Games
                  </div>
                </div>
                
                <div className="group cursor-default">
                  <div className="text-4xl md:text-5xl font-extralight text-white/90 mb-2 group-hover:text-white transition-colors duration-300">
                    {(statsCounter.tournaments / 100).toFixed(0)}+
                  </div>
                  <div className="text-slate-500 text-sm font-light uppercase tracking-widest">
                    Daily
                  </div>
                </div>
              </div>
            </div>

            {/* Sophisticated CTA */}
            <div 
              className={`
                flex flex-col sm:flex-row gap-4 justify-center items-center
                transform transition-all duration-1000 delay-800
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
              `}
            >
              <button className="group relative px-10 py-4 bg-white text-slate-900 font-medium rounded-full hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <Play className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  <span>Start Playing</span>
                </div>
              </button>

              <button className="group px-10 py-4 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-medium rounded-full transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 group-hover:scale-105 transition-transform duration-300" />
                  <span>Join Community</span>
                </div>
              </button>
            </div>

            {/* Minimal Trust Indicators */}
            <div 
              className={`
                flex items-center justify-center gap-12 pt-16 text-slate-600
                transform transition-all duration-1000 delay-1000
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
            >
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <span>FIDE Recognized</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                <span>Global Tournaments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ menuItems, open, setOpen }: { 
  menuItems: { attribute: string; value: string; icon: React.ReactElement }[]; 
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/home");

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-800 p-4 border-b border-slate-700/50 backdrop-blur-sm">
        <button 
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-200 backdrop-blur-sm"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-2">
          <div className="text-2xl animate-pulse">♟</div>
          <span className="text-white font-bold text-lg bg-gradient-to-r from-white to-slate-300 bg-clip-text">
            MyChess
          </span>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={`
          hidden md:flex fixed top-0 left-0 h-screen 
          bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900
          text-slate-300 flex-col transition-all duration-300 ease-in-out z-50
          border-r border-slate-700/30 backdrop-blur-xl
          shadow-2xl shadow-black/20
          ${open ? "w-64" : "w-20"}
        `}
      >
        {/* Logo Section with enhanced styling */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="relative flex items-center justify-between px-6 py-6 border-b border-slate-700/50">
            {open && (
              <div className="flex items-center gap-3">
                <div className="text-3xl animate-bounce">♟</div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  MyChess
                </h1>
              </div>
            )}
            {!open && (
              <div className="text-3xl animate-pulse mx-auto">♟</div>
            )}
            <button 
              onClick={() => setOpen(!open)} 
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-200 text-slate-400 hover:text-white ml-auto"
            >
              {open ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col gap-2 mt-6 px-3">
          {menuItems.map((item, index) => (
            <NavItem 
              key={index} 
              item={item} 
              open={open} 
              isActive={activeItem === item.value}
              onClick={() => setActiveItem(item.value)}
            />
          ))}
        </nav>

        {/* Company Info & Trademark */}
        <div className={`mt-auto ${open ? 'px-4 pt-4 pb-2' : 'px-2 pt-4 pb-2'} border-t border-slate-700/50`}>
          {open ? (
            <div className="text-center space-y-2 mb-4">
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <div className="text-lg">♟</div>
                <span className="text-xs font-medium">GRANDMASTER EDITION</span>
              </div>
              <div className="text-xs text-slate-500 leading-relaxed">
                © 2025 MyChess™<br />
                <span className="text-slate-600">World's #1 Chess Platform</span>
              </div>
              <div className="flex justify-center gap-1 text-xs text-slate-600">
                <span>⭐</span>
                <span>50M+ Players</span>
                <span>⭐</span>
              </div>
            </div>
          ) : (
            <div className="text-center mb-4">
              <div className="text-xs text-slate-500 transform -rotate-90 whitespace-nowrap">
                © 2025
              </div>
            </div>
          )}
          
          {/* Enhanced Auth Buttons */}
          <div className="space-y-3">
            <button className={`
              w-full py-3 rounded-xl font-semibold transition-all duration-300
              bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
              text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/20
              transform hover:scale-105 hover:-translate-y-0.5
              ${!open && 'px-0'}
            `}>
              {open ? "Login" : "L"}
            </button>
            <button className={`
              w-full py-3 rounded-xl font-semibold transition-all duration-300
              bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700
              text-white border border-slate-600 hover:border-slate-500
              shadow-lg hover:shadow-xl
              transform hover:scale-105 hover:-translate-y-0.5
              ${!open && 'px-0'}
            `}>
              {open ? "Sign Up" : "S"}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-80 
          bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900
          text-white flex flex-col 
          transform transition-all duration-300 ease-out z-50
          border-r border-slate-700/30 backdrop-blur-xl
          shadow-2xl shadow-black/30
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        {/* Mobile Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="relative flex items-center justify-between p-6 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="text-3xl animate-bounce">♟</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                MyChess
              </h1>
            </div>
            <button 
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex-1 flex flex-col gap-2 mt-6 px-4">
          {menuItems.map((item, index) => (
            <NavItem 
              key={index} 
              item={item} 
              open={true} 
              mobile={true}
              isActive={activeItem === item.value}
              onClick={() => {
                setActiveItem(item.value);
                setMobileOpen(false);
              }}
            />
          ))}
        </nav>

        {/* Mobile Auth Buttons */}
        <div className="p-6 space-y-3 border-t border-slate-700/50">
          <button className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
            Login
          </button>
          <button className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white border border-slate-600">
            Sign Up
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}

function NavItem({ 
  item, 
  open, 
  mobile = false,
  isActive,
  onClick
}: { 
  item: { attribute: string; value: string; icon: React.ReactElement }; 
  open: boolean;
  mobile?: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium
        transition-all duration-300 cursor-pointer overflow-hidden w-full text-left
        ${
          isActive
            ? "text-white bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 shadow-lg shadow-blue-500/10"
            : "text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-slate-800/50 hover:to-slate-700/50 hover:border-slate-600/30 border border-transparent"
        }
        ${mobile ? 'hover:scale-[1.02] hover:-translate-y-0.5' : ''}
      `}
    >
      {/* Active indicator */}
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"></div>
      )}
      
      {/* Icon with enhanced styling */}
      <div className={`
        relative z-10 p-1 rounded-lg transition-all duration-300
        ${isActive 
          ? 'bg-blue-500/20 text-blue-400' 
          : 'group-hover:bg-slate-700/50 group-hover:scale-110'
        }
      `}>
        {item.icon}
      </div>
      
      {/* Text with fade effect */}
      {open && (
        <span className={`
          relative z-10 transition-all duration-300
          ${isActive ? 'text-white font-semibold' : 'group-hover:text-white'}
        `}>
          {item.attribute}
        </span>
      )}
      
      {/* Hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-full transform"></div>
    </button>
  );
}