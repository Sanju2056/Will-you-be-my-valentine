import { Link } from "react-router-dom";
import { angry } from "../../assets/images";

const TryAgain = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-gray-700 text-xl">Pitai khana man laxa , No gareko fuchi</p>
      <div className="flex justify-center">
          <img src={angry} className="w-52 object-cover rounded-2xl shadow-md my-8" />
        </div>
      <Link to={"/"}>
        <button className="px-12 py-4  text-xl bg-red-500 text-white-700 rounded-full hover:bg-red-700 transition">
          Try Again
        </button>
      </Link>
    </div>
  );
};

export default TryAgain;
