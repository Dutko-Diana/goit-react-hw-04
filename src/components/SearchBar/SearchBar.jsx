import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (query.trim() === "") {
      return toast.error("Please type your request!", {
        duration: 1500,
      });
    }
    onSubmit(query);
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
          className={s.input}
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
