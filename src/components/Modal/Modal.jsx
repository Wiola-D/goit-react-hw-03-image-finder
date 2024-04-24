import { useEffect } from 'react';

export const Modal = ({ selectedImage, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    selectedImage && (
      <div className="Overlay" onClick={onClose}>
        <div className="Modal">
          <img
            className="Modal-img"
            src={selectedImage.largeImageURL}
            alt={selectedImage.tags}
          />
        </div>
      </div>
    )
  );
};
