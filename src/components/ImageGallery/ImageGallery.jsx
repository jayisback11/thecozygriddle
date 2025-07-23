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
              "https://plus.unsplash.com/premium_photo-1668771085743-1d2d19818140?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              "https://images.unsplash.com/photo-1613564834361-9436948817d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphfGVufDB8fDB8fHww"
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
              "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fHww"
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
              "https://images.unsplash.com/photo-1571066811602-716837d681de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphfGVufDB8fDB8fHww"
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
              "https://plus.unsplash.com/premium_photo-1730829140510-68f7cf61d621?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emElMjBhbmQlMjBzdWJzfGVufDB8fDB8fHww"
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
              "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqSLS3PaliBH14gKmgJccW72oz1c_ooFOiNRyQPUSdxmMvhPhBojU-FmrlLgwRh5L5YcV4mgKd5Jske9356Mzs5Y2vcsLvv0sA7GX92HgDhNkZOTPwjDo4NP-EOPSMsBuxUiawG=s680-w680-h510-rw"
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
              "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noqoeDYR8LMLs9uenoIkdZz2d3Jd9k0XlhjikE6EJ5ykOBZBU3beyUESFXdBVdmJYeOqMYtEp-FHS7GUxgUOH5mate0Psy-amOPuccBiLvphwwaDpLKBavMVSEPSlR4wJ5Qt7grKLg1cc6a=s680-w680-h510-rw"
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
              "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npK8b0E5Dx6e2PVynoy9edVkhuQRmMNVCl_f9qYI3PwzYHHomIT2Z39mC8OpE_Tj9vksNKTFhpZbvysgt-r1dsLElrbppRi9ZcFH7T9vQ1_VS8ZtmUzr47qv5aa4Sg2ne-RZ25E=s680-w680-h510-rw"
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
              "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npVm8LeHZrSJXOr43IDlChO5YCidW4CClSBo3BjJDO0IDe16b0T0AQjJK-7KFXsD7wMpx61hOK2M5s1TvgP00Ws9V3ul9NfhyUvcLLQtM5FJwgjIz1E6T9yEPAtK3xCdvdJleUg=s680-w680-h510-rw"
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
              "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq9asRKlkjn55w0l914m44SnbqLVWTPiQEI16LW1fSm61M5jbpBaZIikLjwWJaw1rlanNAe4OrqMEsUNV9Rv7DDrF72oau4qo7kBVvcn7_9ryHPlEYgXLFySfoj2yffpaiPKuTNHA=s680-w680-h510-rw"
            }
            alt="food"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
