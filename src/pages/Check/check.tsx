// Check.tsx
import { Link } from "react-router-dom";

export default function Check() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Envelope */}
        <div className="flex justify-center">
          <div className="w-48 h-32 bg-pink-200 rounded-md relative shadow-md">
            <div className="absolute top-0 left-0 right-0 h-0 border-l-[64px] border-r-[64px] border-t-[48px] border-l-transparent border-r-transparent border-t-pink-300"></div>
            <p className="absolute bottom-2 right-3 text-xs text-pink-500 italic">
              love
            </p>
          </div>
        </div>

        {/* Text */}
        <p className="text-gray-700 text-lg font-medium">
          I wrote a letter for you...
        </p>

        {/* Button */}

        <div className="flex gap-5 mt-5 justify-center">
          <Link to={"/message"}>
            <button className="px-12 py-4  text-xl bg-red-500 text-white-700 rounded-full hover:bg-red-700 transition">
              Next 🌷
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
