import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo ve kısa açıklama */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">E-commerce</h2>
          <p className="text-sm leading-relaxed">
            Türkiye’nin en büyük online alışveriş sitesi. Binlerce ürün, uygun fiyatlar ve güvenli alışveriş.
          </p>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Hızlı Linkler</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition">Hakkımızda</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Kariyer</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">İletişim</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Gizlilik Politikası</a></li>
          </ul>
        </div>

        {/* Müşteri Hizmetleri */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Müşteri Hizmetleri</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition">Sipariş Takibi</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">İade ve Değişim</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Sıkça Sorulan Sorular</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Yardım Merkezi</a></li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Bizi Takip Edin</h3>
          <div className="flex space-x-4 text-gray-300">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.098 2.797.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.588l-.467 3.622h-3.121V24h6.116c.726 0 1.326-.6 1.326-1.337V1.337C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-400 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.196 4.917 4.917 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.15 4.916 4.916 0 0 0 3.195 9.86 4.902 4.902 0 0 1 .964 9.1v.062a4.917 4.917 0 0 0 3.941 4.815 4.996 4.996 0 0 1-1.294.172c-.317 0-.626-.03-.928-.086a4.916 4.916 0 0 0 4.588 3.41 9.866 9.866 0 0 1-6.102 2.105c-.397 0-.788-.023-1.175-.068a13.945 13.945 0 0 0 7.557 2.209c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-600 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm4.25 1.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5zm0 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5zm4.75-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.026-3.038-1.85-3.038-1.853 0-2.135 1.445-2.135 2.938v5.669H9.358V9h3.415v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.603 0 4.27 2.37 4.27 5.451v6.29zM5.337 7.433a2.07 2.07 0 1 1 0-4.141 2.07 2.07 0 0 1 0 4.141zM7.119 20.452H3.554V9h3.565v11.452z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Alt kısım */}
      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} SE 3355 ASSIGMENT
      </div>
    </footer>
  );
}

export default Footer;
