import React from "react";
import { spiderman } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const SpiderMan2 = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <Helmet>
        <title>Resident Evil 2 - Experience the Survival Horror of Raccoon City</title>
        <meta
          name="description"
          content="Experience the remake of the survival horror classic Resident Evil 2. Fight to survive in the zombie-infested Raccoon City with improved graphics and modern gameplay."
        />
        <meta
          name="keywords"
          content="Resident Evil 2, Filkom UB Game Corner, survival horror, action-adventure, zombie outbreak, Raccoon City, Umbrella Corporation, survival game, RE2"
        />
        <meta
          property="og:title"
          content="Resident Evil 2 - Experience the Survival Horror of Raccoon City"
        />
        <meta
          property="og:description"
          content="Resident Evil 2 brings back the horror of Raccoon City. Play as Leon and Claire to uncover the secrets of the Umbrella Corporation while surviving a zombie apocalypse."
        />
        <meta property="og:image" content="URL_of_your_image" />
        <meta property="og:url" content="https://filkom-ub-game-corner-react.vercel.app/games/spiderman-2" />
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-2">Spider-Man 2</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        Swing into action as Peter Parker and Miles Morales in Spider-Man 2.
      </p>
      <iframe
        src="https://youtube.com/embed/nq1M_Wc4FIc?si=78w1n01u5DEXDLoA"
        title="Spider-Man 2 Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="self-center rounded-md w-full md:w-[50%] h-[200px] md:h-[58vh] z-10 mb-4 shadow-lg"
      ></iframe>

      <div className="flex flex-col md:flex-row items-start justify-between w-full xl:px-40 px-10 gap-10">
        <div className="text-left flex-1 bg-gray-50 rounded-lg p-6 shadow-lg">
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Game Description
          </h2>
          <p className="text-lg xl:text-xl mb-8 max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
            <span className="font-medium">Spider-Man 2</span> adalah game aksi petualangan dunia terbuka yang
            menghadirkan dua pahlawan superhero legendaris, Peter Parker dan Miles Morales. Pemain dapat mengendalikan
            kedua karakter ini untuk melawan ancaman baru yang muncul di kota New York. Dengan grafis memukau dan dunia
            terbuka yang luas, game ini menawarkan pengalaman menjadi Spider-Man dalam segala hal, termasuk kemampuan
            unik masing-masing karakter. Setiap karakter memiliki gaya bertarung dan kemampuan spesial, seperti web-swinging,
            pertarungan tangan kosong, dan penggunaan kekuatan super lainnya.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
            Dalam <span className="font-medium">Spider-Man 2</span>, pemain mengendalikan dua Spider-Men yang berbeda—Peter
            Parker dan Miles Morales—yang bekerja sama untuk melawan ancaman besar yang muncul di New York. Musuh utama
            mereka kali ini adalah Venom, yang membawa kehancuran dan kekacauan ke kota. Dengan dunia terbuka yang luas,
            pemain dapat menjelajahi setiap sudut kota, melakukan misi utama maupun sampingan, dan bertarung melawan musuh-musuh
            ikonik dari dunia Spider-Man. Game ini juga menghadirkan banyak elemen interaktif, seperti kemampuan untuk berayun
            di antara gedung-gedung pencakar langit dan menggunakan teknologi serta kekuatan super untuk mengalahkan musuh.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={spiderman}
            alt="Spider-Man 2 PS5"
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Action-Adventure, Open-World</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                <p className="text-gray-600">October 20, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiderMan2;