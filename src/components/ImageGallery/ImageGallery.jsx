import { ImagesGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      <ImagesGalleryItem images={images} />
    </ul>
  );
};
