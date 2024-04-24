export const getImages = async ({ query, page }) => {
  const Api = `https://pixabay.com/api/?key=42471477-c4305623f815b95e7b6c9543d&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;

  try {
    const response = await fetch(Api);
    const Image = await response.json();
    console.log(Image);

    return Image;
  } catch (error) {
    return error;
  }
};
