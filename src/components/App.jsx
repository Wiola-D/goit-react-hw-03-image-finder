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

  useEffect(() => {
    setIsLoading(true);
    fetchImages(query, page)
      .then(images => {
        if (page === 1) {
          setImgagesArr(images);
        } else {
          setImgagesArr(prevImages => [...prevImages, ...images]);
        }
        setIsLoading(false);
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

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <Modal selectedImage={selectedImage} onClose={handleCloseModal} />
      {query !== '' && (
        <div className="Container">
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
          {imgagesArr.length > 0 && <Button onClick={loadMore} />}
        </div>
      )}
    </div>
  );
};

//   useEffect(() => {
//     if (page > 1) {
//       getImages({ query, page })
//
//           setImagesArr(prevImages => [...prevImages, ...newImages]);
//           setShownIds(prevIds => [
//             ...prevIds,
//             ...newImages.map(image => image.id),
//           ]);
//         })
//         .then(() => setIsLoading(false));
//       console.log(`Wyszukanie:${query}  Strona:${page}`);
//     }
//   }, [page]);

//   return (
//     <div className="App">
//       <Searchbar onSubmit={onSubmit} query={query} setQuery={setQuery} />
//       <div className="Container">
//         {error && <p>Something went wrong: {error.message}</p>}
//         <Loader isLoading={isLoading} />
//         {!isLoading && !error && (
//           <ImageGallery images={imagesArr} onClick={handleImageClick} />
//         )}

//         {selectedImage && (
//           <Modal
//             imageUrl={selectedImage.largeImageURL}
//             onClose={handleCloseModal}
//           />
//         )}
//         <Button onClick={loadMoreImages} />
//       </div>
//     </div>
//   );
// };
