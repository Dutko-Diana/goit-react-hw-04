import axios from "axios";
import "./App.css";
import { API_KEY } from "./key";
import SearchBar from "./components/SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}&per_page=15&orientation=landscape&page=${page}`
        );

        setError(false);
        setImages((prev) => [...prev, ...res.data.results]);
        const calculatedTotalPages = Math.ceil(res.data.total / 15);
        setTotalPages(calculatedTotalPages);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const onSubmit = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (src, alt) => {
    setModalIsOpen(true);
    setModalSrc(src);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalSrc("");
    setModalAlt("");
  };

  return (
    <div>
      <SearchBar
        onSubmit={onSubmit}
        setImages={setImages}
        query={query}
        setQuery={setQuery}
      />
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 &&
        page < totalPages &&
        images.length % 15 === 0 &&
        !isLoading && <LoadMoreBtn handleClick={handleLoadMore} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />
      <Toaster />
    </div>
  );
}

export default App;
