import axios from "axios";
import "./App.css";
import { API_KEY } from "./key";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (query) => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}&per_page=15&orientation=landscape`
      );
      console.log(res.data.results);
      setImages(res.data.results);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} setImages={setImages} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      <Toaster />
    </div>
  );
}

export default App;
