import React from 'react';
import QuickLinks from '../components/QuickLinks';
import ElectronicDeals from '../components/ElectronicDeals';
import Recommended from '../components/Recommended';
import VisitedProducts from '../components/VisitedProducts';
import MainSlider from '../components/MainSlider';

function Homepage() {
  return (
    <main className="bg-gray-50 min-h-screen px-4 py-6">

      {/* Kampanya Linkleri */}
      <section className="mb-6 px-4 lg:px-20">
        <h2 className="text-xl font-semibold mb-0"></h2>
        <QuickLinks />
      </section>

      {/* Ana Slider + Elektronik Ürünler */}
      <section className="flex flex-col lg:flex-row gap-1 mb-10 px-4 lg:px-20">
        <div className="w-full lg:w-[65%]">
          <MainSlider />
        </div>
        <div className="w-full lg:w-[65%]">
          <ElectronicDeals />
        </div>
      </section>

      {/* Sana Özel Öneriler */}
      <section className="mb-10 px-4 lg:px-20">
        <h2 className="text-xl font-semibold mb-4">Sana Özel Öneriler</h2>
        <Recommended />
      </section>

      {/* Gezilen Ürünler */}
      <section className="mb-10 px-4 lg:px-20">
        <h2 className="text-xl font-semibold mb-4">Gezdiğin Ürünler</h2>
        <VisitedProducts />
      </section>
    </main>
  );
}

export default Homepage;
