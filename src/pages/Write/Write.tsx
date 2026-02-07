import { Link } from "react-router-dom";
import { p11, two, p15, p9, p22, p12 } from "../../assets/images";

const photo = [
  { img: two, caption: "Our last photo together 🙁" },
  { img: p15, caption: "Family Function Together" },
  { img: p9, caption: "Hami CG ghudai" },
  { img: p22, caption: "Fav Photo tmro" },
  { img: p12, caption: "Sometime Colorful Sometime B/W" },
  { img: p11, caption: "Yo photo paxi hamro bedroom ma hunxa" },
];

const Photo = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-100 flex flex-col items-center justify-center overflow-x-hidden py-12">
      {/* FLOATING HEARTS - More subtle */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${15 + Math.random() * 20}px`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* SPARKLES */}
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

      {/* MAIN CONTENT */}
      <div className="w-full max-w-6xl px-4 z-10">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-2 drop-shadow-sm">
            Our Memories
          </h1>
          <p className="text-lg text-red-400">✨ Moments we cherish forever ✨</p>
        </div>

        {/* GALLERY GRID - Responsive masonry-style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {photo.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={item.caption}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Caption */}
              <div className="p-4 bg-white">
                <p className="text-sm md:text-base text-gray-700 text-center font-medium leading-relaxed">
                  {item.caption}
                </p>
              </div>

              {/* Decorative corner heart */}
              <div className="absolute top-3 right-3 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                💕
              </div>
            </div>
          ))}
        </div>

        {/* NEXT BUTTON - Centered */}
        <div className="flex justify-center">
          <Link to="/music">
            <button className="px-10 py-4 text-lg md:text-xl font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Next
              <span className="text-2xl">🌷</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Photo;