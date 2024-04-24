import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchImages } from './API/getImg';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';
import { SearchBar } from './Searchbar/Searchbar';

export const App = ({ inputValue }) => {
  const [imgagesArr, setImgagesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetchImages(query, page)
      .then(({ images, totalHits }) => {
        if (page === 1) {
          setImgagesArr(images);
        } else {
          setImgagesArr(prevImages => [...prevImages, ...images]);
        }
        setIsLoading(false);
        setTotalHits(totalHits); // ustaw totalHits w stanie
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setIsLoading(false);
      });
  }, [query, page]);

  const onSubmit = inputValue => {
    setQuery(inputValue);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const maxImagesReached = imgagesArr.length >= totalHits;
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <Modal selectedImage={selectedImage} onClose={handleCloseModal} />
      {query !== '' && (
        <div className="Container">
          {totalHits === 0 ? (
            <p>Images not found</p>
          ) : (
            <ImageGallery>
              {isLoading ? (
                <Loader />
              ) : (
                <ImageGalleryItem
                  imgagesArr={imgagesArr}
                  onClick={handleImageClick}
                />
              )}
            </ImageGallery>
          )}
          {!maxImagesReached && imgagesArr.length > 0 && (
            <Button onClick={loadMore} />
          )}
        </div>
      )}
    </div>
  );
};
