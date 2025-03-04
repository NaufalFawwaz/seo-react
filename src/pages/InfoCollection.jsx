import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { assassin, gow, re2, re3, spiderman, tekken, turismo, away, cod, watchdog, finalfantasy, dmc5, eldenRing, fifa, ghost, godOfwar, gtaV, itTakestwo, miles, mw2, nba, pes, stray, StreetFighter6, uncharted, untilDawn, valhalla } from "../assets";
import { useNavigate } from "react-router-dom";

const InfoCollection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const DataGame = [
    { name: "Assassins Creed Mirage", img: assassin, route: "assassins-creed-mirage" },
    { name: "God of War: Ragnarok", img: gow, route: "god-of-war-ragnarok" },
    { name: "Resident Evil 2", img: re2, route: "resident-evil-2" },
    { name: "Resident Evil 3", img: re3, route: "resident-evil-3" },
    { name: "Spider-Man 2", img: spiderman, route: "spiderman-2" },
    { name: "Tekken 8", img: tekken, route: "tekken8" },
    { name: "Gran Turismo 7", img: turismo, route: "gran-turismo-7" },
    { name: "Devil My Cry 5", img: dmc5, route: "devil-my-cry-5" },
    { name: "A Way Out", img: away, route: "a-way-out" },
    { name: "Call Of Duty Modern Warfare III", img: cod, route: "call-of-duty-modern-warfare-III" },
    { name: "Watch Dog Legion", img: watchdog, route: "watch-dog-legion" },
    { name: "Final Fantasy VII Rebirth", img: finalfantasy, route: "final-fantasy-VII" },
    { name: 'Elden Ring', img: eldenRing, route: 'elden-ring' },
    { name: 'FIFA 2023', img: fifa, route: 'fifa-2023' },
    { name: 'Ghost Of Tsushima', img: ghost, route: 'ghost-of-tsushima' },
    { name: 'God Of War', img: godOfwar, route: 'god-of-war' },
    { name: 'Grand Theft Auto V', img: gtaV, route: 'grand-theft-auto-v' },
    { name: 'It Takes Two', img: itTakestwo, route: 'it-takes-two' },
    { name: 'Spider-man Miles Morales', img: miles, route: 'spiderman-miles-morales' },
    { name: 'Stray', img: stray, route: 'stray' },
    { name: 'Call Of Duty Modern Warfare II', img: mw2, route: 'call-of-duty-modern-warfare-II' },
    { name: 'NBA 2K25', img: nba, route: 'nba-2025' },
    { name: 'PES 2024', img: pes, route: 'e-football-2024' },
    { name: 'Street Fighter 6', img: StreetFighter6, route: 'street-fighter-6' },
    { name: 'Uncharted 4', img: uncharted, route: 'uncharted-4' },
    { name: 'Until Dawn', img: untilDawn, route: 'until-dawn' },
    { name: 'Assassins Creed Valhalla', img: valhalla, route: 'assassins-creed-valhalla' },
  ];

  const filteredGames = DataGame.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Filkom Game Corner Collection</title>
        <meta name="description" content="Temukan koleksi game terbaru di Filkom Game Corner!" />
        <meta name="keywords" content="Filkom UB Game Corner, Filkom Game Corner, koleksi game, PS5, Xbox, game seru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Filkom UB Game Corner Collection" />
        <meta property="og:description" content="Jelajahi berbagai game seru yang bisa dimainkan di berbagai konsol." />
      </Helmet>

      <div className="p-10">
        <h1 className="text-3xl font-bold text-center mb-6">Filkom Game Corner Collection</h1>
        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Cari game"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredGames.map((game, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => navigate(`/games/${game.route}`)}
            >
              <img
                src={game.img}
                alt={game.name}
                className="w-full object-contain bg-gray-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-out">
                <p className="text-white font-bold text-lg mb-2">{game.name}</p>
                <p className="text-sm text-gray-300">Click to View Details</p>
              </div>
            </div>
          ))}
          </div>
          {filteredGames.length === 0 && (
            <p className="text-center text-3xl font-bold text-gray-500 mt-6">Game belum ada.</p>
          )}
      </div>
    </>
  );
};

export default InfoCollection;
