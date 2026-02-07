import { useState } from "react";
import { Link } from "react-router-dom";

export default function Music() {
  const videos = [
    {
      title: "Song 1 ❤️",
      videoId: "HAcLoqZO-Z0",
      thumb: "https://img.youtube.com/vi/HAcLoqZO-Z0/mqdefault.jpg",
    },
    {
      title: "Song 2 🥺",
      videoId: "Sh8ZYHnb86c",
      thumb: "https://img.youtube.com/vi/Sh8ZYHnb86c/mqdefault.jpg",
    },
    {
      title: "Song 3 🎥",
      videoId: "rOUuGvJkBrQ",
      thumb: "https://img.youtube.com/vi/rOUuGvJkBrQ/mqdefault.jpg",
    },
    {
      title: "Song 4 🏍️",
      videoId: "Po6u6iT4YnU",
      thumb: "https://img.youtube.com/vi/Po6u6iT4YnU/mqdefault.jpg",
    },
    {
      title: "Song 5 💕",
      videoId: "XbM6PyRsJc4",
      thumb: "https://img.youtube.com/vi/XbM6PyRsJc4/mqdefault.jpg",
    },
    {
      title: "Song 6 🌙",
      videoId: "cNBmzxE6Jf0",
      thumb: "https://img.youtube.com/vi/cNBmzxE6Jf0/mqdefault.jpg",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-100 flex flex-col items-center justify-center p-4 md:p-6">
      {/* Floating sparkles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${6 + Math.random() * 8}px`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-6 md:mb-8 z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 drop-shadow-sm">
          🎵 A Playlist Just For You
        </h1>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-7xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 z-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Video Section */}
          <div className="flex-1 flex flex-col">
            {/* Video Player */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                key={currentVideo.videoId}
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&rel=0`}
                title={currentVideo.title}
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Current Song Title */}
            {/* <div className="mt-4 text-center lg:text-left">
              <p className="text-xl md:text-2xl font-semibold text-gray-800">
                {currentVideo.title}
              </p>
            </div> */}

            {/* Next Button - Desktop */}
            <div className="hidden lg:flex justify-center mt-6">
              <Link to="/check">
                <button className="px-10 py-3 text-lg font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Next
                  <span className="text-xl">🌷</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Playlist Sidebar */}
          <div className="w-full lg:w-80 xl:w-96">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 shadow-inner">
              <h2 className="text-lg font-semibold text-red-500 mb-4 text-center lg:text-left">
                Playlist
              </h2>

              {/* Video Grid/List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 max-h-[400px] lg:max-h-[500px] overflow-y-auto pr-2">
                {videos.map((vid, i) => {
                  const active = vid.videoId === currentVideo.videoId;

                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentVideo(vid)}
                      className={`relative group rounded-lg overflow-hidden transition-all duration-300 ${
                        active
                          ? "ring-4 ring-red-400 scale-105 shadow-lg"
                          : "hover:scale-105 hover:shadow-md"
                      }`}
                    >
                      <img
                        src={vid.thumb}
                        alt={vid.title}
                        className="w-full aspect-video object-cover"
                      />
                      
                      {/* Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity ${
                        active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}>
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-xs md:text-sm font-medium truncate">
                            {vid.title}
                          </p>
                        </div>
                      </div>

                      {/* Play Icon for Active */}
                      {active && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl animate-pulse">
                          ▶️
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Next Button - Mobile */}
        <div className="flex lg:hidden justify-center mt-6">
          <Link to="/check">
            <button className="px-10 py-3 text-lg font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Next
              <span className="text-xl">🌷</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}