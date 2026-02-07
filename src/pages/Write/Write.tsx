import { Link } from "react-router-dom";
import { p11,two, p15, p9, p22, p12 } from "../../assets/images";

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
    // UPDATED LINE BELOW: Changed justify-start to md:justify-center
    <div className="relative w-full min-h-screen bg-gray-100 flex flex-col items-center justify-start md:justify-center overflow-x-hidden">
      {/* FLOATING HEARTS - Changed absolute to fixed so they cover screen during scroll */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
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

      {/* SPARKLES - Changed absolute to fixed */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
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

      {/* MAIN CONTENT */}
      <div className="w-full max-w-5xl px-4 py-10 z-10">
        <div className=" rounded-lg p-6 md:p-10">
          {/* FLEX LAYOUT - STACK ON MOBILE */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <p className="text-2xl font-semibold text-red-500">Our Memories :*</p>
           

            {/* RIGHT SIDE GRID */}
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {photo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* <div className="border-2 border-[#D7A1A1] rounded-full flex items-center justify-center "> */}
                  <img
                    src={item.img}
                    className="w-36 h-36 sm:w-40 sm:h-44 border-2 border-[#D7A1A1]  object-cover mb-2"
                    alt="circle"
                  />
                  {/* </div> */}
                  <p className="text-sm font-sans">"{item.caption}"</p>
                </div>
              ))}

              {/* RETURN BUTTON */}

            </div>
              <Link to={"/music"}>
                <button className="px-12 py-4  text-xl bg-red-500 text-white-700 rounded-full hover:bg-red-700 transition">
                  Next 🌷
                </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
