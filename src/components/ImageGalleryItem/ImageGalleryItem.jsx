export const ImageGalleryItem = ({ imgagesArr, onClick }) => {
  return (
    <>
      {imgagesArr.length > 0 &&
        imgagesArr.map((image, index) => (
          <li className="ImageGalleryItem" key={`${image.id}_${index}`}>
            <img
              className="ImageGalleryItem-image"
              src={image.largeImageURL}
              alt={image.tags}
              onClick={() => onClick(image)}
            />
          </li>
        ))}
    </>
  );
};
