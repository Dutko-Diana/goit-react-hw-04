import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={s.gallery}>
      {images.map(({ id, alt, likes, urls, user }) => {
        return (
          <li key={id} className={s.galleryItem}>
            <ImageCard
              src={urls.small}
              modalSrc={urls.regular}
              alt={alt}
              likes={likes}
              avatar={user.profile_image.large}
              authorName={user.first_name}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
}
