import React, { useState } from "react";
import "./ImageGallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import ImageGallery1 from "../../utils/images/gallery1.jpg";
import ImageGallery2 from "../../utils/images/gallery2.jpg";
import ImageGallery3 from "../../utils/images/gallery3.jpg";
import ImageGallery4 from "../../utils/images/gallery4.jpg";
import ImageGallery5 from "../../utils/images/gallery5.jpg";
import ImageGallery6 from "../../utils/images/gallery6.jpg";
import ImageGallery7 from "../../utils/images/gallery7.jpg";
import ImageGallery8 from "../../utils/images/gallery8.jpg";
import ImageGallery9 from "../../utils/images/gallery9.jpg";
import ImageGallery10 from "../../utils/images/gallery10.jpg";

export default function ImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 my-5"
      >
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              border: "0",
            }}
            src={
              "https://s3-media0.fl.yelpcdn.com/bphoto/oCATpomTQUvE0d28JpAvjg/o.jpg"
            }
            alt="food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              border: "0",
            }}
            src={
              "https://s3-media0.fl.yelpcdn.com/bphoto/hseX-fhfnC7xbI6JcmAZZw/o.jpg"
            }
            alt="food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              border: "0",
            }}
            src={
              "https://s3-media0.fl.yelpcdn.com/bphoto/Ioab4sA-aKb3zqFQKXR6CA/o.jpg"
            }
            alt="food"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
