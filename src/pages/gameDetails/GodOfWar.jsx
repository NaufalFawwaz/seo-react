import React from 'react';
import { gow } from '../../assets';
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const GodOfWar = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <Helmet>
        <title>God of War Ragnarök - Kratos and Atreus' Journey in Norse Mythology</title>
        <meta name="description" content="Join Kratos and Atreus in God of War Ragnarök, an action-packed RPG set in Norse mythology. Face gods, monsters, and prevent Ragnarök, the end of the world." />
        <meta name="keywords" content="God of War Ragnarök, Filkom UB Game Corner, Kratos, Atreus, Norse mythology, action RPG, adventure, video game, Ragnarök, gods, Norse gods" />
        <meta property="og:title" content="God of War Ragnarök - Kratos and Atreus' Journey in Norse Mythology" />
        <meta property="og:description" content="Experience the thrilling journey of Kratos and Atreus as they battle gods and monsters in a stunning Norse mythology world. Prevent Ragnarök in this epic action RPG." />
        <meta property="og:image" content="URL_of_your_image" />
        <meta property="og:url" content="https://filkom-ub-game-corner-react.vercel.app/info/god-of-war-ragnarok" />
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-2">God of War Ragnarök</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        Explore the thrilling journey of Kratos and Atreus in Norse mythology.
      </p>

      <iframe
        src="https://www.youtube.com/embed/hfJ4Km46A-0?si=vYXBmzjyDsw1tMKH"
        title="God of War Ragnarök Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10 mb-4 shadow-lg"
      ></iframe>

      <div className="flex flex-col md:flex-row items-start justify-between w-full xl:px-40 px-10 gap-10">
        <div className="text-left flex-1 bg-gray-50 rounded-lg p-6 shadow-lg">
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Game Description
          </h2>
          <p className="text-lg xl:text-xl mb-8 max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
            <span className="font-medium">*God of War Ragnarök*</span> adalah game aksi-petualangan
            yang mengikuti perjalanan Kratos dan Atreus di dunia mitologi Nordik. Dalam game ini,
            mereka berdua menghadapi dewa-dewa dan makhluk legendaris dari berbagai dunia, sambil
            berusaha menghindari kehancuran yang diprediksi dalam ramalan Ragnarök. Dengan gameplay yang
            memadukan pertarungan brutal dan cerita emosional, game ini menyuguhkan pengalaman
            mendalam tentang hubungan ayah dan anak, takdir, dan pengorbanan.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed">
            Dalam *God of War Ragnarök*, Kratos dan Atreus melanjutkan perjalanan mereka yang penuh
            tantangan. Setelah peristiwa dari game sebelumnya, mereka kini menghadapi ancaman besar yang
            datang dari dunia Nordik, termasuk pertempuran dengan dewa-dewa dan makhluk mitologi yang
            legendaris. Kratos yang masih berjuang dengan takdirnya sebagai dewa perang, kini harus
            menghadapi ancaman terbesar dalam hidupnya, yaitu kemungkinan akhir dunia—Ragnarök.
            Bersama Atreus, yang semakin dewasa dan penuh rasa ingin tahu, mereka berusaha mencegah
            kehancuran yang tak terhindarkan. Cerita ini tidak hanya berfokus pada pertarungan,
            tetapi juga menggali lebih dalam tentang hubungan ayah-anak dan pengorbanan yang diperlukan
            untuk menghadapi takdir yang penuh kekacauan.
          </p>
        </div>

        {/* Gambar dan Informasi Tambahan */}
        <div className="flex flex-col items-center">
          <img
            src={gow}
            alt="God of War Ragnarök"
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Action, Adventure, RPG</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                <p className="text-gray-600">November 12, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GodOfWar;
