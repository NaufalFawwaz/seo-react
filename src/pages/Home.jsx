import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Marquee from 'react-marquee-slider';
import { Helmet } from 'react-helmet';
import ContentLayout from "../Layout/ContentLayout";
import { motion } from 'framer-motion';
import { background, garis, pict, pumpItUp, ps5, xbox, rog, assassin, gow, re2, re3, spiderman, tekken, turismo, watchdog, cod, finalfantasy, away, dmc5 } from '../assets';

const StructuredData = () => (
  <Helmet>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Filkom Game Corner",
          "description": "Filkom Game Corner menawarkan pengalaman bermain game yang seru dengan koleksi game terbaru dan fasilitas gaming lengkap.",
          "publisher": {
            "@type": "Organization",
            "name": "FILKOM UB"
          },
          "url": "https://filkom-ub-game-corner-next.vercel.app/",
        }),
      }}
    />
  </Helmet>
);

export const Banner = ({ style }) => {
  return (
    <motion.div
      style={style}
      className="flex flex-col items-center pt-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-primary3 text-3xl sm:text-5xl 2xl:text-[3.15rem] font-bold text-center mb-8 overflow-hidden whitespace-nowrap border-r-4 border-primary1 animate-typing">
        Welcome To Filkom's Game Corner
      </h1>
      <p className="text-white text-center text-xl sm:text-2xl lg:text-2xl font-medium w-full sm:w-auto lg:w-[786px] px-4 sm:px-6 lg:px-0">
        Rasakan pengalaman bermain game yang seru di Filkom's Game Corner! Mainkan koleksi game terbaru kami, atau tantang temanmu dalam pertandingan seru.
      </p>
      <NavLink
        to="/info"
        className="bg-primary3 text-xl rounded-lg font-semibold text-primary1 py-4 text-center w-[350px] mt-10 hover:bg-[#1B9BA2] hover:text-white transition duration-300"
      >
        Explore Filkom's Game Collection
      </NavLink>
    </motion.div>
  );
};

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center pt-7 gap-4 bg-[#EFF0F3]">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl text-primary1">ABOUT</h2>
        <img src={garis} alt="Line separator" className="pt-4" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 text-primary2">
        <p className="text-lg font-semibold leading-relaxed text-center md:text-left md:w-1/2 pb-8">
          FILKOM UB secara resmi telah meresmikan “Game Corner”, sebuah ruang khusus yang diperuntukkan bagi mahasiswa untuk menghabiskan waktu luang mereka antar kuliah. Game Corner ini merupakan bentuk Kerjasama FILKOM UB dengan Bank Rakyat Indonesia (BRI). Letak dari ruang Game Corner ini berada di Gedung F lantai 1 di depan Loket Pelayanan Akademik.
        </p>
        <div className="md:w-1/2 flex justify-center">
          <img src={pict} alt="Filkom Game Corner" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

const Fasilitas = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const consoleData = [
    { img: pumpItUp },
    { img: ps5 },
    { img: xbox },
    { img: rog },
    { img: pumpItUp },
    { img: ps5 },
    { img: xbox },
    { img: rog }
  ];

  const gameData = [
    { img: assassin },
    { img: gow },
    { img: re2 },
    { img: re3 },
    { img: spiderman },
    { img: tekken },
    { img: turismo },
    { img: dmc5 },
    { img: finalfantasy },
    { img: away },
    { img: cod },
    { img: watchdog },
  ];

  return (
    <div
      id="facility"
      className={`flex flex-col items-center pt-7 bg-primary3 transition-opacity duration-1000 transform`}
    >
      <h2 className="font-bold text-3xl text-primary1">FACILITY</h2>
      <img src={garis} alt="Line separator" className="pt-4" />

      <div className="overflow-hidden py-6 w-full">
        <h3 className="font-bold text-2xl text-primary1 p-4">Gaming Console</h3>
        <Marquee gradient={false} speed={90} className="gap-8">
          {consoleData.map((data, index) => (
            <img key={index} src={data.img} alt="Console" className="px-3 w-64" />
          ))}
        </Marquee>
      </div>

      <div className="overflow-hidden py-6 w-full">
        <h3 className="font-bold text-2xl text-primary1 p-4">Available Games</h3>
        <Marquee gradient={false} speed={90} className="gap-8">
          {gameData.map((data, index) => (
            <img key={index} src={data.img} alt="Game" className="px-3 w-64" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '540px',
  };

  return (
    <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <StructuredData />
      <Helmet>
        <title>Filkom's Game Corner | Mainkan Game Terbaru dan Seru!</title>
        <meta name="description" content="Rasakan pengalaman bermain game yang seru di Filkom's Game Corner! Mainkan koleksi game terbaru kami, atau tantang temanmu dalam pertandingan seru." />
        <meta name="keywords" content="Filkom UB Game Corner, Game Corner, gaming console, games, permainan, mahasiswa, gaming, tempat bermain, BRI" />
        <meta property="og:title" content="Filkom's Game Corner | Mainkan Game Terbaru dan Seru!" />
        <meta property="og:description" content="Nikmati koleksi game terbaru dan fasilitas gaming terbaik di Filkom's Game Corner." />
        <meta property="og:image" content={background} />
        <meta property="og:url" content="https://filkom.ub.ac.id/game-corner" />
        <meta name="twitter:title" content="Filkom's Game Corner | Mainkan Game Terbaru dan Seru!" />
        <meta name="twitter:description" content="Mainkan game terbaru dan nikmati fasilitas gaming terbaik di Filkom's Game Corner." />
        <meta name="twitter:image" content={background} />
      </Helmet>

      <ContentLayout>
        <Banner style={backgroundStyle} />
        <About />
        <Fasilitas />
      </ContentLayout>
    </div>
  );
};

export default Home;
