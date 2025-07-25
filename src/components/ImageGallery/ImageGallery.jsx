import React, { useState } from "react";
import "./ImageGallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import data from "../../data.json";

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
            src={data.gallery.image1}
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
            src={data.gallery.image2}
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
            src={data.gallery.image3}
            alt="food"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
