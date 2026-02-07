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
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <p className="text-2xl font-semibold text-red-500 mb-4 mt-10"> 🎵 A Playlist Just For You </p>
      <div className="w-full max-w-[1400px] bg-white rounded-2xl p-6 flex flex-col lg:flex-row gap-10">
        {/* Main Video */}
        <div className="flex-1">
          {/* <h1 className="text-3xl font-semibold font-cursive mb-4 text-gray-800">
            {currentVideo.title}
          </h1> */}

          <div className="w-full h-[50vw] lg:h-[500px] rounded-xl overflow-hidden ">
            <iframe
              key={currentVideo.videoId}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&rel=0`}
              title={currentVideo.title}
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="flex gap-5 mt-5 justify-center">
           <Link to={"/check"}>
                <button className="px-12 py-4  text-xl bg-red-500 text-white-700 rounded-full hover:bg-red-700 transition">
                  Next 🌷
                </button>
              </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[330px] p-5 rounded-xl shadow-inner max-h-[600px] overflow-y-auto">
          {/* <h2 className="text-lg font-semibold text-[#C17474] mb-4">
            Other Videos
          </h2> */}

          <div className="flex flex-col gap-4">
            {videos.map((vid, i) => {
              const active = vid.videoId === currentVideo.videoId;

              return (
                <button
                  key={i}
                  onClick={() => setCurrentVideo(vid)}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                    active
                      ? "bg-[#C17474]/20 border border-[#C17474]"
                      : "bg-white hover:bg-[#F7F3F3] shadow-sm"
                  }`}
                >
                  <img
                    src={vid.thumb}
                    alt={vid.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* <p className="text-sm font-medium text-gray-800">
                    {vid.title}
                  </p> */}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
