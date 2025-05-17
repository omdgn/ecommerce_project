import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addVisited } from '../redux/visitedSlice';

function ElectronicDeals() {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const dispatch = useDispatch();
  const CARD_WIDTH = 270 + 16;

  useEffect(() => {
    axios
      .get('http://localhost:5050/api/electronic-deals')
      .then((res) => setProducts(res.data.ElectronicDeals))
      .catch((err) => console.error('ElectronicDeals verisi alınamadı', err));
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [products]);

  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      scroll('right', true);
    }, 5000);
  };

  const scroll = (direction, isAuto = false) => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;

    if (direction === 'right' && scrollEl.scrollLeft >= maxScroll - CARD_WIDTH) {
      scrollEl.scrollTo({ left: 0, behavior: isAuto ? 'auto' : 'smooth' });
    } else if (direction === 'left' && scrollEl.scrollLeft <= 0) {
      scrollEl.scrollTo({ left: maxScroll, behavior: isAuto ? 'auto' : 'smooth' });
    } else {
      scrollEl.scrollBy({
        left: direction === 'left' ? -CARD_WIDTH : CARD_WIDTH,
        behavior: 'smooth',
      });
    }
  };

  const getStarsFromRating = (ratingStr) => {
    if (!ratingStr) return { score: 0, stars: '', count: '', rounded: 0 };
    const [scoreRaw, rest] = ratingStr.split(' - ');
    const [scoreStr] = scoreRaw.split('/');
    const score = parseFloat(scoreStr);
    const rounded = score >= 4.8 ? 5 : Math.floor(score);
    const stars = '★★★★★☆☆☆☆☆'.slice(5 - rounded, 10 - rounded);
    return { score, stars, count: rest, rounded };
  };

  return (
    <div
      className="w-full md:w-[670px] h-[264px] relative rounded-xl overflow-hidden shadow-md group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage:
          "url('https://images.hepsiburada.net/banners/s/1/980-530/Elektronik_CMS_Desktop_Sag_930x530_(2)133912626201364770.jpg')",
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
    >
      {/* Sol Buton */}
      <button
        onClick={() => scroll('left')}
        className={`absolute left-2 bottom-8 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:shadow-md transition ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronLeft size={18} />
      </button>

      {/* Sağ Buton */}
      <button
        onClick={() => scroll('right')}
        className={`absolute right-2 bottom-8 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:shadow-md transition ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronRight size={18} />
      </button>

      {/* Ürünler */}
      <div
        ref={scrollRef}
        className={`absolute bottom-[0px] left-0 right-0 px-3 flex gap-4 items-end overflow-x-auto overflow-y-hidden transition-all duration-300 scrollbar-thin scrollbar-track-transparent ${
          isHovered ? 'scrollbar-thumb-gray-400' : 'scrollbar-thumb-transparent'
        }`}
        style={{ paddingBottom: '8px', scrollBehavior: 'smooth' }}
      >
        {products.map((item) => {
          const { stars, count, score } = getStarsFromRating(item.rating);
          return (
            <a
              key={item.id}
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
              className="min-w-[240px] h-[105px] bg-white rounded-lg p-3 flex justify-between items-center shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.imageLink || ''}
                  alt={item.productName || 'Ürün'}
                  className="w-14 h-14 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-[10px] px-2 py-1 bg-purple-100 text-purple-700 rounded font-semibold w-fit">
                    Kartsız 36 taksit
                  </span>
                  <p className="text-gray-800 text-[13px] font-medium truncate max-w-[150px] mt-1">
                    {item.productName || 'Ürün adı yok'}
                  </p>
                  {stars && (
                    <p className="text-yellow-500 text-sm font-semibold">
                      {stars}
                      <span className="text-gray-500 text-xs font-normal ml-1">
                        ({count}) – {score ? score.toFixed(1) : ''}
                      </span>
                    </p>
                  )}
                  <p className="text-black font-bold text-sm mt-1">{item.price || ''}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ElectronicDeals;
