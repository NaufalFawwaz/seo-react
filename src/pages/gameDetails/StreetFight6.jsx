import React from "react";
import { StreetFighter6 } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const StreetFight6 = () => {
    return (
        <div className="flex flex-col items-center py-7">
            <Helmet>
                <title>Street Fighter 6 - The Next Evolution</title>
                <meta
                    name="description"
                    content="Street Fighter 6 brings the next evolution in the iconic fighting game series. Experience new characters, enhanced graphics, and dynamic gameplay in the ultimate fighting game."
                />
                <meta
                    name="keywords"
                    content="Street Fighter 6, fighting game, Capcom, action, esports"
                />
                <meta property="og:title" content="Street Fighter 6" />
                <meta
                    property="og:description"
                    content="Challenge yourself in Street Fighter 6, the latest installment of the legendary series. Train, fight, and win in this thrilling experience."
                />
                <meta property="og:image" content="URL_of_your_image" />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-react.vercel.app/games/street-fighter-6"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-2">Street Fighter 6</h1>
            <p className="text-lg text-gray-600 text-center mb-6 italic">
                Unleash your fighting spirit with Street Fighter 6.
            </p>

            <iframe
                src="https://youtube.com/embed/U747IQXEoto?si=ncTO3NbPS9Ey_o8N"
                title="Street Fighter 6 Trailer"
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
                        <span className="font-medium">Street Fighter 6</span> adalah game fighting terbaru dari
                        Capcom yang memperkenalkan mekanisme pertarungan baru, mode permainan inovatif, dan roster karakter yang
                        luas. Game ini dirancang untuk pemain kasual hingga profesional esports.
                    </p>
                    <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                        <FaFeatherAlt className="text-xl" /> Synopsis
                    </h2>
                    <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                        Dalam Street Fighter 6, pemain akan merasakan atmosfer pertarungan epik dengan grafis
                        yang memukau dan kontrol yang responsif. Mode single-player dan multiplayer memberikan pengalaman
                        yang mendalam bagi semua penggemar genre fighting.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={StreetFighter6}
                        alt="Street Fighter 6"
                        className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                    />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <FaGamepad className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Genre</p>
                                <p className="text-gray-600">Fighting, Action, Esports</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                <p className="text-gray-600">June 2, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StreetFight6;
