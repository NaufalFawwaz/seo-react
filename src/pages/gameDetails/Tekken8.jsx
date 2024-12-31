import React from "react";
import { tekken } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Tekken8 = () => {
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
        <meta property="og:url" content="https://filkom-ub-game-corner-react.vercel.app/games/tekken8" />
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-2">Tekken 8</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        The legendary fighting game series returns with new characters and mechanics.
      </p>
      <iframe
        src="https://youtube.com/embed/2hPuRQz6IlM?si=xC_TVvQRHBdIiOoF"
        title="Tekken 8 Trailer"
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
            <span className="font-medium">Tekken 8</span> adalah game fighting legendaris yang kembali dengan karakter-karakter baru
            dan mekanik pertempuran yang lebih seru. Game ini menghadirkan grafis yang lebih memukau, gameplay yang lebih dinamis,
            serta kecepatan bertarung yang meningkat. Setiap karakter memiliki keunikan dalam teknik dan gaya bertarungnya, memberi
            pemain banyak pilihan strategi untuk meraih kemenangan. Sistem pertarungan baru yang fluid memungkinkan pemain untuk
            lebih mudah mengakses kombo-kombo serangan baru, menciptakan pengalaman pertarungan yang lebih mendalam dan kompetitif.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
            Dalam <span className="font-medium">Tekken 8</span>, pemain akan menghadapi berbagai karakter ikonik dari seri sebelumnya
            serta wajah baru yang turut memperkaya dunia Tekken. Gameplay kali ini lebih mengutamakan kecepatan dan taktik dalam setiap
            pertarungan, di mana gerakan yang lebih fluid dan reaksi cepat sangat menentukan hasil akhir. Karakter-karakter baru dan
            lama akan bergabung dalam pertarungan yang semakin sengit, menghadirkan tantangan bagi pemain yang ingin menguasai setiap
            gerakan dan teknik yang ada.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={tekken}
            alt="Tekken 8"
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Fighting, Action</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                <p className="text-gray-600">TBA 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tekken8;
