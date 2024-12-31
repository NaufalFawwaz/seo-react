import React from "react";
import { turismo } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Turismo7 = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <Helmet>
        <title>Gran Turismo 7 - Ultimate Racing Experience on PlayStation 5</title>
        <meta
          name="description"
          content="Experience the ultimate racing simulation in Gran Turismo 7 on PlayStation 5. Realistic driving with a variety of cars and tracks for an authentic racing experience."
        />
        <meta
          name="keywords"
          content="Gran Turismo 7, Filkom UB Game Corner, racing game, simulation, PlayStation 5, racing simulation, realistic racing, PS5, arcade racing"
        />
        <meta
          property="og:title"
          content="Gran Turismo 7 - Ultimate Racing Experience on PlayStation 5"
        />
        <meta
          property="og:description"
          content="Gran Turismo 7 offers the most realistic driving experience on PS5, with a wide range of cars, tracks, and racing modes. Perfect for both simulation and arcade racing fans."
        />
        <meta property="og:image" content="URL_of_your_image" />
        <meta property="og:url" content="https://filkom-ub-game-corner-react.vercel.app/games/gran-turismo-7" />
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-2">Gran Turismo 7</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        The ultimate racing experience on PlayStation 5.
      </p>
      <iframe
        src="https://youtube.com/embed/1tBUsXIkG1A?si=_bflfARHpjMVxihK"
        title="Gran Turismo 7 Trailer"
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
            <span className="font-medium">Gran Turismo 7</span> adalah game balap yang membawa pengalaman simulasi
            berkendara realistis dengan berbagai pilihan mobil dan trek dari seluruh dunia. Dengan grafis yang memukau
            dan fisika yang mendalam, game ini memberikan pengalaman balap yang sangat otentik bagi para penggemar mobil
            dan balapan. Pemain dapat menikmati berbagai mode balap, termasuk mode kompetitif yang menguji keterampilan
            dalam mengendalikan berbagai jenis mobil di berbagai kondisi trek yang menantang.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
            Dalam <span className="font-medium">Gran Turismo 7</span>, pemain dapat menikmati berbagai mode balap,
            mulai dari balap sirkuit profesional hingga balap jalanan penuh tantangan. Dengan ribuan mobil yang bisa dikendarai,
            game ini menggabungkan elemen simulasi dengan elemen arcade, memberikan pengalaman balap yang dapat dinikmati oleh
            pemain dari berbagai tingkat keahlian. Setiap mobil terasa berbeda, dengan kontrol yang sangat presisi dan responsif,
            memberikan sensasi berkendara yang sangat nyata. Gran Turismo 7 juga menampilkan berbagai trek balap ikonik dari seluruh dunia.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={turismo}
            alt="Gran Turismo 7"
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Racing, Simulation</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                <p className="text-gray-600">March 4, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turismo7;
