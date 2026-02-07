// OpenLetter.tsx
import { Link } from "react-router-dom";
import { cat } from "../../assets/images";

export default function OpenLetter() {

  return (
    <div className="min-h-screen flex items-center justify-center  relative">
      {/* Floating heart */}
      <span className="absolute right-24 top-1/2 text-pink-300 text-xl animate-pulse">
        ❤️
      </span>

      <div className="text-center space-y-6">
        {/* Title */}
        <h1 className="text-xl font-medium text-gray-800">
          Do you want to open it? ʕ(≧ᴥ≦)ʔ
        </h1>

        {/* Image */}
        <div className="flex justify-center">
          <img src={cat} className="w-52 object-cover rounded-2xl shadow-md" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link to={"/message"}>
            <button className="px-12 py-4  text-xl bg-red-500 text-white-700 rounded-full hover:bg-red-700 transition">
              Open it
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
