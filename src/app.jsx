import AOS from "aos";
import "aos/dist/aos.css";
import "./main.css";

import spotlight from "spotlight.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useState } from "preact/hooks";
import { useEffect } from "preact/hooks";

import Landing from "./pages/Landing";
import Gallery from "./pages/Gallery";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Packs from "./pages/Packs";
import { Photos } from "./pages/Photos";
import { NotFound } from "./pages/NotFound.jsx";

export function App() {
  const [photoCategory, setPhotoCategory] = useState(() => {
    const localCategoryVal = localStorage.getItem("photoCategory");
    if (localCategoryVal == null) return "";

    return localCategoryVal;
  });

  useEffect(() => {
    localStorage.setItem("photoCategory", photoCategory);
  }, [photoCategory]);

  AOS.init();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <NotFound />,
    },
    {
      path: "/gallery",
      element: <Gallery setPhotoCategory={setPhotoCategory} />,
      errorElement: <NotFound />,
    },
    {
      path: "/gallery/photos",
      element: <Photos photoCategory={photoCategory} />,
      errorElement: <NotFound />,
    },
    {
      path:"/packs",
      element: <Packs />,
      errorElement: <NotFound />,
    },
    {
      path:"/about",
      element: <AboutMe />,
      errorElement: <NotFound />,
    },
    {
      path: "/contatti",
      element: <Contact />,
      errorElement: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
