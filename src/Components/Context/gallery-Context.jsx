import { createContext, useContext, useState } from "react";

const GalleryContext = createContext();

const GalleryProvider = (props) => {
  const [gallery, setGallery] = useState([]);
  const value = { gallery, setGallery };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
};

const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined") {
    throw new Error("useGalleryContext must be used within a GalleryProvider");
  }
  return context;
};

export { GalleryProvider, useGalleryContext };
