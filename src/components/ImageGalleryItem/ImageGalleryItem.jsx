export const ImagesGalleryItem = ({ images }) => {
  return (
    <>
      {images.length > 0 &&
        images.map(({ id, webformatURL, largeImageURL }) => (
          <li className="ImageGalleryLink" key={id}>
            <a className="ImageGalleryItem" href={webformatURL}>
              <img
                className="ImageGalleryItem-image"
                src={largeImageURL}
                alt={`Image-${id}`}
              />
            </a>
          </li>
        ))}
    </>
  );
};
