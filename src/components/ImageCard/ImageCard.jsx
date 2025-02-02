import s from "./ImageCard.module.css";

export default function ImageCard({
  src,
  alt,
  likes,
  avatar,
  authorName,
  openModal,
  modalSrc,
}) {
  return (
    <div onClick={() => openModal(modalSrc, alt)}>
      <div className={s.thumb}>
        <img src={src} alt={alt} className={s.image} />
      </div>
      <ul className={s.info}>
        <li>
          <p>Likes</p>
          <p>{likes}</p>
        </li>
        <li>
          <p>Author</p>
          <p>{authorName}</p>
        </li>
        <li>
          <img src={avatar} alt="image author" className={s.avatar} />
        </li>
      </ul>
    </div>
  );
}
