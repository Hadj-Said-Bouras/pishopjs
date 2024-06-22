import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="image-carousel">
      <Image
        src={images[currentImageIndex]}
        alt="Product Image"
        width={400}
        height={400}
      />
    </div>
  );
};

export default ImageCarousel;