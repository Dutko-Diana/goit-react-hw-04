import s from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ handleClick }) {
  return (
    <>
      <button type="button" onClick={handleClick} className={s.button}>
        Load More...
      </button>
    </>
  );
}
