// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  // Mock data for the player profile
  const playerProfile = {
    avatar: '/avatar-placeholder.png',
    wins: 42,
    losses: 15,
    rank: 'Gold',
    skillLevel: 8
  };

  // Mock data for wallet connection status
  const walletConnected = false;

  return (
    <>
      <Head>
        <title>SnookNet - Play Snooker Online</title>
        <meta name="description" content="Play snooker online, join tournaments, and connect with players worldwide" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
        {/* Header */}
        <header className="px-6 py-4 bg-black/40 backdrop-blur-sm flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              SnookNet
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/play" className="hover:text-yellow-400 transition-colors">
              Play
            </Link>
            <Link href="/tournaments" className="hover:text-yellow-400 transition-colors">
              Tournaments
            </Link>
            <Link href="/marketplace" className="hover:text-yellow-400 transition-colors">
              Marketplace
            </Link>
            <Link href="/profile" className="hover:text-yellow-400 transition-colors">
              Profile
            </Link>
            <Link href="/settings" className="hover:text-yellow-400 transition-colors">
              Settings
            </Link>
          </nav>

          {/* Wallet Status */}
          <div className="flex items-center">
            {walletConnected ? (
              <div className="px-4 py-2 rounded-full bg-green-500/20 border border-green-500 text-sm">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
                0.05 ETH
              </div>
            ) : (
              <button className="px-4 py-2 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors text-sm">
                Connect Wallet
              </button>
            )}
          </div>
        </header>

        {/* Main Section */}
        <main className="container mx-auto px-4 py-10">
          {/* Play Now Button */}
          <div className="flex justify-center mb-12">
            <button className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xl font-bold shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all">
              Play Now
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tournaments Card */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-700/20 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-500/30 hover:border-orange-400 transition-colors group">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-orange-400">Tournaments</h3>
                <p className="text-gray-300 mb-4">Join competitive matches and win rewards</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-orange-300 text-sm">Next Tournament</p>
                    <p className="font-medium">Daily Cup</p>
                    <p className="text-xs text-gray-400">Starts in 2h 15m</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-orange-300 text-sm">Prize Pool</p>
                    <p className="font-medium">$500</p>
                    <p className="text-xs text-gray-400">Top 3 players</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 bg-black/50 group-hover:bg-orange-900/30 transition-colors">
                <Link href="/tournaments" className="text-sm font-medium text-orange-300 flex items-center">
                  View All Tournaments
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Leaderboards Card */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/30 hover:border-purple-400 transition-colors group">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">Leaderboards</h3>
                <p className="text-gray-300 mb-4">See top players and rankings</p>
                <div className="bg-black/30 rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="bg-yellow-500 text-black font-bold w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">1</span>
                      <span>PlayerOne</span>
                    </div>
                    <span className="text-yellow-400">1250 pts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="bg-gray-300 text-black font-bold w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">2</span>
                      <span>PlayerTwo</span>
                    </div>
                    <span className="text-gray-300">1120 pts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="bg-orange-600 text-black font-bold w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2">3</span>
                      <span>PlayerThree</span>
                    </div>
                    <span className="text-orange-400">980 pts</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 bg-black/50 group-hover:bg-purple-900/30 transition-colors">
                <Link href="/leaderboards" className="text-sm font-medium text-purple-300 flex items-center">
                  View Full Leaderboard
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Marketplace Card */}
            <div className="bg-gradient-to-br from-green-500/20 to-blue-700/20 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-400 transition-colors group">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">Marketplace</h3>
                <p className="text-gray-300 mb-4">Buy and sell virtual equipment</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-blue-300 text-sm">Featured Item</p>
                    <p className="font-medium">Gold Cue</p>
                    <p className="text-xs text-gray-400">Limited Edition</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-blue-300 text-sm">Price</p>
                    <p className="font-medium">0.05 ETH</p>
                    <p className="text-xs text-gray-400">3 items left</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 bg-black/50 group-hover:bg-blue-900/30 transition-colors">
                <Link href="/marketplace" className="text-sm font-medium text-blue-300 flex items-center">
                  Browse Marketplace
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Player Profile Summary */}
          <div className="mt-12 bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-xl font-bold mb-4">Player Profile Summary</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold">
                  {playerProfile.avatar ? (
                    <Image src={playerProfile.avatar} alt="Player Avatar" width={96} height={96} className="rounded-full" />
                  ) : (
                    <span>PN</span>
                  )}
                </div>
              </div>
              
              <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-gray-400 text-sm mb-1">Win/Loss Record</h4>
                  <p className="text-lg font-medium">
                    <span className="text-green-400">{playerProfile.wins}W</span> / 
                    <span className="text-red-400">{playerProfile.losses}L</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Win Rate: {Math.round((playerProfile.wins / (playerProfile.wins + playerProfile.losses)) * 100)}%
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-gray-400 text-sm mb-1">Rank</h4>
                  <p className="text-lg font-medium text-yellow-400">{playerProfile.rank}</p>
                  <p className="text-xs text-gray-500">Top 15% of players</p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-gray-400 text-sm mb-1">Skill Level</h4>
                  <p className="text-lg font-medium">{playerProfile.skillLevel}/10</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                      style={{ width: `${(playerProfile.skillLevel/10)*100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/60 backdrop-blur-sm mt-12 py-8 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-700/50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center hover:bg-indigo-700/50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-700/50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-red-900/50 flex items-center justify-center hover:bg-red-700/50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766c-1.566-.43-7.83-.437-7.83-.437s-6.265-.007-7.832.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.51 2.51 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Game Information</h3>
                <p className="text-gray-400 mb-2">SnookNet v0.1.0 - Beta</p>
                <p className="text-gray-400 mb-2">© 2025 SnookNet Development Team</p>
                <p className="text-gray-400">For support: support@snooknet.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};