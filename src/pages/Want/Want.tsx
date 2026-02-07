// OpenLetter.tsx
import { Link } from "react-router-dom";
import { will } from "../../assets/images";

export default function Want() {

  return (
    <div className="min-h-screen flex items-center justify-center  relative">
      {/* Floating heart */}
      <span className="absolute right-24 top-1/2 text-pink-300 text-xl animate-pulse">
        ❤️
      </span>

      <div className="text-center space-y-6">
        {/* Title */}
        <h1 className="text-xl font-medium text-gray-800">
          Will you be my valentine? ʕ(≧ᴥ≦)ʔ
        </h1>

        {/* Image */}
        <div className="flex justify-center">
          <img src={will} className="w-52 object-cover rounded-2xl shadow-md" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link to={"/home"}>
            <button className="px-12 py-4  text-xl bg-red-500 text-white-700 rounded-full hover:bg-red-700 transition">
              Yes
            </button>
          </Link>
          <Link to={"/try"}>
            <button className="px-12 py-4  bg-gray-200 text-gray-600 rounded-full shadow-sm hover:bg-gray-300 transition">
              No Ty
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
