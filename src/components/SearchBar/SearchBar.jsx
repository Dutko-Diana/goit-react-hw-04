import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSubmit, setImages }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setImages([]);
    if (query.trim() === "") {
      return toast.error("Please type your request!", {
        duration: 1500,
      });
    }
    onSubmit(query);
    setQuery("");
    e.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          onChange={handleChange}
          className={s.input}
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
