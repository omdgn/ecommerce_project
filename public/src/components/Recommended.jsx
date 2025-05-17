import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Heart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addVisited } from '../redux/visitedSlice';

import 'swiper/css';
import 'swiper/css/navigation';

function Recommended() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:5050/api/recommended')
      .then((res) => setProducts(res.data.Recommended))
      .catch((err) => console.error('Recommended verisi alınamadı:', err));
  }, []);

  const getStarsFromRating = (ratingStr) => {
    if (!ratingStr) return { stars: '', count: '' };
    const [scoreRaw, count] = ratingStr.split(' - ');
    const score = parseFloat(scoreRaw.split('/')[0]);
    const rounded = score >= 4.8 ? 5 : Math.floor(score);
    const stars = '★★★★★☆☆☆☆☆'.slice(5 - rounded, 10 - rounded);
    return { stars, count };
  };

  return (
    <div className="relative group w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.recommended-next',
          prevEl: '.recommended-prev',
        }}
        loop={false} // Kayma döngüsü de yok
        spaceBetween={12}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
          1280: { slidesPerView: 5 },
        }}
      >
        {products.map((item) => {
          const { stars, count } = getStarsFromRating(item.rating);
          return (
            <SwiperSlide key={item.id}>
              <a
                href={item.productLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  dispatch(
                    addVisited({
                      id: item.id,
                      productName: item.productName || '',
                      imageLink: item.imageLink || '',
                      price: item.price || '',
                      rating: item.rating || '',
                      productLink: item.productLink || '',
                    })
                  )
                }
                className="min-w-[200px] h-[270px] bg-white rounded-[18px] shadow-sm hover:shadow-md transition-all duration-300 px-3 pt-3 pb-2 flex flex-col justify-between relative"
              >
                {/* Kalp simgesi */}
                <div className="absolute top-2 right-2 bg-white rounded-full p-[6px] shadow-md">
                  <Heart size={16} className="text-gray-600" />
                </div>

                {/* Ürün görseli */}
                <img
                  src={item.imageLink || ''}
                  alt={item.productName || 'Ürün'}
                  className="w-full h-[110px] object-contain rounded-t-lg"
                />

                {/* Ürün bilgileri */}
                <div className="flex flex-col gap-[2px] mt-2">
                  <p className="text-xs font-medium text-gray-800 line-clamp-2 leading-snug">
                    {item.productName || 'Ürün adı yok'}
                  </p>

                  {stars && (
                    <div className="text-yellow-500 text-sm leading-none">
                      {stars}
                      <span className="text-gray-500 text-xs ml-1">({count})</span>
                    </div>
                  )}

                  <p className="text-[15px] font-bold text-gray-800">{item.price || ''}</p>
                </div>

                {/* Sepete ekle butonu */}
                <div className="w-full mt-2">
                  <button className="w-full bg-orange-500 text-white text-sm font-semibold py-1.5 rounded-lg hover:bg-orange-600 transition">
                    Sepete Ekle
                  </button>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Sol Buton */}
      <button
        className="recommended-prev hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-8 h-8 rounded-full shadow items-center justify-center z-10 transition"
      >
        &#8592;
      </button>

      {/* Sağ Buton */}
      <button
        className="recommended-next hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-8 h-8 rounded-full shadow items-center justify-center z-10 transition"
      >
        &#8594;
      </button>
    </div>
  );
}

export default Recommended;
