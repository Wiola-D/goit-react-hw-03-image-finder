import { useState, useEffect } from 'react';
import { getImages } from './API/getImg';
import '../components/App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  const [imagesArr, setImagesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [shownIds, setShownIds] = useState([]);

  const onSubmit = event => {
    event.preventDefault();
    setPage(1);
    setQuery(query);
    getImages({ query, page })
      .catch(e => setError(e))
      .then(res => setImagesArr(res.hits))
      .then(() => setIsLoading(false));
    console.log(`Wyszukanie:${query} Strona:${page}`);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (page > 1) {
      getImages({ query, page })
        .catch(e => setError(e))
        .then(res => {
          // Filter out images with duplicate IDs
          const newImages = res.hits.filter(
            image => !shownIds.includes(image.id)
          );
          setImagesArr(prevImages => [...prevImages, ...newImages]);
          setShownIds(prevIds => [
            ...prevIds,
            ...newImages.map(image => image.id),
          ]);
        })
        .then(() => setIsLoading(false));
      console.log(`Wyszukanie:${query}  Strona:${page}`);
    }
  }, [page]);

  return (
    <>
      <Searchbar onSubmit={onSubmit} query={query} setQuery={setQuery} />
      {error && <p>Something went wrong: {error.message}</p>}
      <Loader isLoading={isLoading} />
      {!isLoading && !error && <ImageGallery images={imagesArr} />}
      <button onClick={loadMoreImages}>Load More</button>
    </>
  );
};
