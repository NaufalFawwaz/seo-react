import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { assassin, gow, re2, re3, spiderman, tekken, turismo, away, cod, watchdog, finalfantasy, dmc5 } from '../assets';
import { useNavigate } from 'react-router-dom';

const InfoCollection = () => {
  const navigate = useNavigate();

  const DataGame = [
    { name: 'Assassins Creed Mirage', img: assassin, route: 'assassins-creed-mirage' },
    { name: 'God of War: Ragnarok', img: gow, route: 'god-of-war-ragnarok' },
    { name: 'Resident Evil 2', img: re2, route: 'resident-evil-2' },
    { name: 'Resident Evil 3', img: re3, route: 'resident-evil-3' },
    { name: 'Spider-Man 2', img: spiderman, route: 'spiderman-2' },
    { name: 'Tekken 8', img: tekken, route: 'tekken8' },
    { name: 'Gran Turismo 7', img: turismo, route: 'gran-turismo-7' },
    { name: 'Devil My Cry 5', img: dmc5, route: 'devil-my-cry-5' },
    { name: 'A Way Out', img: away, route: 'a-way-out' },
    { name: 'Call Of Duty Modern Warfare III', img: cod, route: 'call-of-duty-modern-warfare-III' },
    { name: 'Watch Dog Legion', img: watchdog, route: 'watch-dog-legion' },
    { name: 'Final Fantasy VII Rebirth', img: finalfantasy, route: 'final-fantasy-VII' },
  ];

  return (
    <>
      <Helmet>
        <title>Filkom Game Corner Collection</title>
        <meta name="description" content="Temukan koleksi game terbaru di Filkom Game Corner!" />
        <meta name="keywords" content="Filkom UB Game Corner, koleksi game, PS5, Xbox, game seru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Filkom UB Game Corner Collection" />
        <meta property="og:description" content="Jelajahi berbagai game seru yang bisa dimainkan di berbagai konsol." />
      </Helmet>

      <div className='p-10'>
        <h1 className="text-3xl font-bold text-center mb-6">Filkom Game Corner Collection</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {DataGame.map((game, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105`}
              onClick={() => navigate(`/info/${game.route}`)}
            >
              <img
                src={game.img}
                alt={game.name}
                className="w-full object-contain bg-gray-100"
                loading='lazy'
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-out">
                <p className="text-white font-bold text-lg mb-2">{game.name}</p>
                <p className="text-sm text-gray-300">Click to View Details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoCollection;
