import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuickLinks() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5050/api/quickLinks')
      .then((res) => {
        setCards(res.data.QuickLinks);
      })
      .catch((err) => {
        console.error("Veri çekme hatası:", err);
      });
  }, []);

  return (
    <div className="w-full bg-white pt-[0px]">
      <div className="flex flex-wrap justify-center items-center gap-4 px-2 md:px-6">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.cardLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[100px] h-[100px] flex items-center justify-center bg-white rounded-md border border-gray-200 hover:shadow-md transition"
          >
            <img
              src={card.imageLink}
              alt={`Kampanya ${card.id}`}
              className="max-w-full max-h-full object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks;
