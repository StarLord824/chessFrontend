

const NotLoggedIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-light text-white">Welcome Back</h1>
            <p className="text-slate-400">Continue your chess journey where strategy meets excellence.</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-slate-400 text-sm mb-1">Profile</div>
              <div className="text-white font-medium">Sign In</div>
            </div>
            <div>
              <div className="text-slate-400 text-sm mb-1">Games</div>
              <div className="text-white font-medium">Create Account</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotLoggedIn