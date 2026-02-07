import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomPage/Home.tsx";

import Layout from "./layout/index.tsx";
import No from "./pages/Contact/Contact.tsx";
import Yes from "./pages/BlogDetail/BlogDetail.tsx";
import Photo from "./pages/Write/Write.tsx";
import Message from "./pages/Message/Message.tsx";
import Music from "./pages/Music/Music.tsx";
import Check from "./pages/Check/check.tsx";
import OpenLetter from "./pages/Open/Open.tsx";
import TryAgain from "./pages/Try/Try.tsx";
import Want from "./pages/Want/Want.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Want /> },
      { path: "photo", element: <Photo /> },
      { path: "no", element: <No /> },
      { path: "yes", element: <Yes /> },
      { path: "message", element: <Message /> },
      { path: "music", element: <Music /> },
      { path: "check", element: <Check /> },
      { path: "letter", element: <OpenLetter /> },
      { path: "try", element: <TryAgain /> },
      // { path: "want", element: <Want /> },
      { path: "home", element: <HomePage /> },
    ],
  },
]);

function App() {
  return (
    <div className="h-full  bg-[#FEFEFE]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
