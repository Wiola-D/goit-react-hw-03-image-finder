export const fetchImages = async (query, page) => {
  const Api = `https://pixabay.com/api/?q=${query}&page=${page}&key=39663593-8d04c2e8107bf32f11cf1c5f8&image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const response = await fetch(Api);
    const data = await response.json();
    const images = data.hits;
    const totalHits = data.totalHits;
    console.log(images);

    return { images, totalHits };
  } catch (error) {
    return error;
  }
};
