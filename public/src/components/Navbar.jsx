import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User2 } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    { name: 'Elektronik', sub: ['Telefon', 'Bilgisayar', 'TV & Ses'] },
    { name: 'Moda', sub: ['Kadın Giyim', 'Erkek Giyim', 'Ayakkabı'] },
    { name: 'Ev & Yaşam', sub: ['Mobilya', 'Dekorasyon', 'Mutfak'] },
    { name: 'Oto & Yapı', sub: ['Oto Aksesuar', 'Bahçe', 'Yapı Market'] },
    { name: 'Anne & Bebek', sub: ['Bebek Bezi', 'Oyuncak', 'Bebek Arabası'] },
    { name: 'Spor & Outdoor', sub: ['Fitness', 'Kamp', 'Bisiklet'] },
    { name: 'Kozmetik', sub: ['Makyaj', 'Cilt Bakımı', 'Parfüm'] },
    { name: 'Kitap & Hobi', sub: ['Roman', 'Müzik', 'Kırtasiye'] }
  ];

  return (
    <nav className="shadow-md sticky top-0 z-50 w-full bg-white">
      {/* Üst Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center flex-wrap gap-2">
        <Link to="/" className="text-2xl font-bold text-orange-500 hover:opacity-80">
          E-commerce
        </Link>

        <input
          type="text"
          placeholder="Ürün, kategori veya marka ara"
          className="flex-1 min-w-[250px] max-w-lg px-4 py-2 border border-orange-300 rounded focus:outline-none"
        />

        <div className="flex items-center space-x-4 text-sm">
          <Link to="/profilim" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
            <User2 size={16} />
            <span>Profilim</span>
          </Link>
          <Link to="/giris" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
            <User2 size={16} />
            <span>Giriş Yap</span>
          </Link>
          <Link to="/sepetim" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500">
            <ShoppingCart size={16} />
            <span>Sepetim</span>
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-500 text-xl">
            ☰
          </button>
        </div>
      </div>

      {/* Masaüstü Alt Menü */}
      <div className="hidden md:flex justify-center bg-gray-100 text-sm">
        <div className="flex space-x-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="relative group px-2 py-1.5">
              <span className="text-gray-700 group-hover:text-orange-500 cursor-pointer">
                {cat.name}
              </span>

              {/* Sadece hover'da görünür submenu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {cat.sub.map((subcat, sidx) => (
                  <Link key={sidx} to="#" className="block px-4 py-2 hover:bg-gray-100">
                    {subcat}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="px-4 pb-4 bg-white shadow-md md:hidden:block">
          {categories.map((cat, idx) => (
            <details key={idx} className="mb-2">
              <summary className="cursor-pointer font-medium text-gray-700">{cat.name}</summary>
              <div className="ml-4 mt-2">
                {cat.sub.map((subcat, sidx) => (
                  <Link key={sidx} to="#" className="block py-1 text-gray-600 hover:text-orange-500">
                    {subcat}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
