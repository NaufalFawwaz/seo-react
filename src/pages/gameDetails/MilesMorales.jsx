import React from "react";
import { miles } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const MilesMorales = () => {
    return (
        <div className="flex flex-col items-center py-7">
            <Helmet>
                <title>Marvel's Spider-Man: Miles Morales</title>
                <meta
                    name="description"
                    content="Marvel's Spider-Man: Miles Morales is an action-adventure game where you play as Miles Morales. Swing through the city, fight crime, and discover your own path as a superhero."
                />
                <meta
                    name="keywords"
                    content="Spider-Man, Miles Morales, action-adventure, superhero, Insomniac Games, PlayStation"
                />
                <meta property="og:title" content="Marvel's Spider-Man: Miles Morales" />
                <meta
                    property="og:description"
                    content="Experience the thrilling adventures of Miles Morales as he becomes his own Spider-Man. Fight crime, master new powers, and protect your city."
                />
                <meta property="og:image" content="URL_of_your_image" />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-react.vercel.app/games/spiderman-miles-morales"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-2">
                Marvel's Spider-Man: Miles Morales
            </h1>
            <p className="text-lg text-gray-600 text-center mb-6 italic">
                Step into the shoes of Miles Morales and discover your unique powers.
            </p>

            <iframe
                src="https://youtube.com/embed/ymEnvJSFqfw?si=TZaQBIazIgQSSleM"
                title="Miles Morales Trailer"
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
                        <span className="font-medium">Spider-Man: Miles Morales</span> adalah game aksi-petualangan yang dikembangkan oleh
                        Insomniac Games. Pemain mengikuti perjalanan Miles Morales saat ia melatih kekuatannya dan mengambil
                        tanggung jawab sebagai Spider-Man baru di New York City. Dengan grafis memukau dan gameplay dinamis,
                        game ini menawarkan pengalaman yang intens dan emosional.
                    </p>
                    <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                        <FaFeatherAlt className="text-xl" /> Synopsis
                    </h2>
                    <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                        Dalam <span className="font-medium">Spider-Man: Miles Morales</span>, pemain akan mengikuti kisah Miles, yang
                        berjuang untuk menemukan tempatnya sebagai Spider-Man saat Peter Parker sedang pergi. Dengan kekuatan
                        baru yang unik seperti bio-electric venom blast dan kamuflase, Miles harus melindungi kota dari ancaman
                        berbahaya, termasuk konflik antara perusahaan energi Roxxon dan kelompok militan The Underground.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={miles}
                        alt="Spider-Man Miles Morales"
                        className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                    />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <FaGamepad className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Genre</p>
                                <p className="text-gray-600">
                                    Action, Adventure, Superhero
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                <p className="text-gray-600">November 12, 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MilesMorales;
