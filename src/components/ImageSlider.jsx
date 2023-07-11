import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const ImageSlider = () => {
  return (
    <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false} >
    <div>
      <img src="https://res.cloudinary.com/daricnizg/image/upload/v1688822800/WEB_Banner-01_x7bs2o.jpg" alt="Slider Image 1" />
    </div>
    <div>
      <img src="https://res.cloudinary.com/daricnizg/image/upload/v1688822801/WEB_Banner-02_bpypnt.jpg" alt="Slider Image 2" />
    </div>
    <div>
      <img src="https://res.cloudinary.com/daricnizg/image/upload/v1688822800/WEB_Banner-03_imt7hn.jpg" alt="Slider Image 3" />
    </div>
    <div>
      <img src="https://res.cloudinary.com/daricnizg/image/upload/v1688822800/WEB_Banner-01_x7bs2o.jpg" alt="Slider Image 4" />
    </div>
    <div>
      <img src="https://res.cloudinary.com/daricnizg/image/upload/v1688822801/WEB_Banner-02_bpypnt.jpg" alt="Slider Image 5" />
    </div>
  </Carousel>
  );
};
export default ImageSlider;
