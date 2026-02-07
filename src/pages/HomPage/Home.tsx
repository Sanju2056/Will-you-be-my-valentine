import {  Teddy } from "../../assets/images";
import { Link } from "react-router-dom";
const Home = () => {
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
            🌸
          </div>
        ))}
      </div>

      {/* Sparkles
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
      </div> */}

      {/* Main Card */}
      <div className="relative z-10 text-center p-8">
        <h1 className="text-3xl md:text-4xl  font-semibold text-red-700 ">
          Happy Valentine's Day ❤️
        </h1>
        <img
          src={Teddy}
          alt="teddy waving"
          className="mx-auto  w-72 h-64 bg-black-solid"
        />

        <div className="px-6 py-2 text-xl rounded-full transition mb-4">
          Click the next button 🥺!
        </div>

        <div className="flex gap-5 justify-center font-sans">
          <Link to={"/photo"}>
            <button className="px-12 py-4  text-xl bg-red-500 text-white-700 rounded-full hover:bg-red-700 transition">
              Next 🌷
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
