import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <ul className={s.gallery}>
      {images.map(({ id, alt, likes, urls, user }) => (
        <li key={id} className={s.galleryItem}>
          <ImageCard
            src={urls.small}
            alt={alt}
            likes={likes}
            avatar={user.profile_image.large}
            authorName={user.first_name}
          />
        </li>
      ))}
    </ul>
  );
}
