import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function MainSlider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5050/api/main-slider')
      .then((res) => setSlides(res.data.MainSlider))
      .catch((err) => console.error('MainSlider verisi alınamadı', err));
  }, []);

  return (
    <div className="group w-full md:w-[819px] h-[180px] md:h-[264px] relative rounded-lg shadow-md overflow-hidden mr-2">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <a href={slide.sliderLink} target="_blank" rel="noopener noreferrer">
              <img
                src={slide.resimLink}
                alt={`Slider ${slide.id}`}
                className="w-full h-full object-cover md:object-cover"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Sol Buton (sadece masaüstünde göster) */}
      <div className="custom-prev hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 group-hover:flex items-center justify-center w-9 h-9 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-md cursor-pointer z-10 transition">
        <span className="text-lg font-bold">&#8592;</span>
      </div>

      {/* Sağ Buton (sadece masaüstünde göster) */}
      <div className="custom-next hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 group-hover:flex items-center justify-center w-9 h-9 bg-white/80 hover:bg-white text-gray-700 rounded-full shadow-md cursor-pointer z-10 transition">
        <span className="text-lg font-bold">&#8594;</span>
      </div>
    </div>
  );
}

export default MainSlider;
