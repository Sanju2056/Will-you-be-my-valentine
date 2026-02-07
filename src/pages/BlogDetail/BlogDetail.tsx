import { FaImage, FaEnvelope, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";

const Yes = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#FEFEFE] opacity-90 overflow-hidden">
      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(45)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 25}px`,
              animationDuration: `${4 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Sparkles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${5 + Math.random() * 10}px`,
              animationDuration: `${1 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Main Card */}
      <div className="flex flex-col justify-center items-center relative z-10 p-8 gap-5 rounded-2xl shadow-xl backdrop-blur-sm">
        {/* Title Text */}
        <p className="text-3xl md:text-4xl text-gray-700 font-bold font-cursive mb-4">
          pick and click !
        </p>

        {/* Icons Section */}
        <div className="flex space-x-8 mb-6">
          {/* Image Icon */}
          <Link to={"/photo"}>
            <div className="flex justify-center items-center border-4 border-[#D7A1A1] p-2 md:p-6 rounded-xl">
              <FaImage className="text-[#D7A1A1] text-5xl md:text-[150px]" />
            </div>
          </Link>

          <Link to={"/message"}>
            <div className="flex justify-center items-center border-4 border-[#D7A1A1] p-2 md:p-6 rounded-xl">
              <FaEnvelope className="text-[#D7A1A1] text-5xl md:text-[150px]" />
            </div>
          </Link>
          {/* Envelope Icon */}

          {/* Gift Icon */}
          <Link to={"/music"}>
            <div className="flex justify-center items-center border-4 border-[#D7A1A1] p-2 md:p-6 rounded-xl">
              <FaGift className="text-[#D7A1A1] text-5xl md:text-[150px]" />
            </div>
          </Link>
         
        </div>

        {/* Bottom Text */}
        <p className=" text-lg md:text-2xl text-[#C17474] font-semibold font-sans">
          I hope you'll love them, baby ❤️
        </p>
        <div className="col-span-2 sm:col-span-3 flex justify-center">
          <Link to="/">
            <button className="px-10 py-2 border border-gray-600 rounded-full hover:bg-gray-200 transition">
              return
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Yes;
