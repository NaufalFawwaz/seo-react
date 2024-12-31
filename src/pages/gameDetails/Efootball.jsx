import React from "react";
import { pes } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Efootball = () => {
    return (
        <div className="flex flex-col items-center py-7">
            <Helmet>
                <title>E-Football 2024 - The Evolution of Soccer Gaming</title>
                <meta
                    name="description"
                    content="E-Football 2024 brings the thrill of soccer to your fingertips with cutting-edge gameplay, realistic graphics, and immersive online features."
                />
                <meta
                    name="keywords"
                    content="E-Football 2024, soccer game, online multiplayer, realistic gameplay, sports simulation"
                />
                <meta property="og:title" content="E-Football 2024" />
                <meta
                    property="og:description"
                    content="Experience the future of soccer gaming with E-Football 2024. Enjoy the most realistic soccer gameplay ever developed."
                />
                <meta property="og:image" content="URL_of_your_image" />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-react.vercel.app/games/e-football-2024"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-2">E-Football 2024</h1>
            <p className="text-lg text-gray-600 text-center mb-6 italic">
                Experience the next level of soccer gaming.
            </p>

            <iframe
                src="https://youtube.com/embed/BdyXsZMPjWo?si=b4qH21oAxZ5dJfHT"
                title="E-Football 2024 Trailer"
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
                            <span className="font-medium">eFootball 2024</span> adalah game simulasi sepak bola yang
                            membawa gameplay yang lebih realistis, kontrol yang ditingkatkan, dan visual memukau. Game ini
                            menawarkan mode online multiplayer yang kompetitif, mode karier mendalam, dan pembaruan konten
                            berkala yang menjaga permainan tetap segar.
                        </p>
                    <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                        <FaFeatherAlt className="text-xl" /> Features
                    </h2>
                    <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                            <span className="font-medium">eFootball 2024</span> menempatkan pemain di tengah pertandingan
                            sepak bola dengan atmosfer stadion yang hidup. Nikmati pengembangan strategi, kontrol pemain yang
                            mendalam, dan fitur kompetitif yang dirancang untuk para penggemar sepak bola di seluruh dunia.
                        </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={pes}
                        alt="E-Football 2024"
                        className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                    />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <FaGamepad className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Genre</p>
                                <p className="text-gray-600">Sports, Simulation, Multiplayer</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                <p className="text-gray-600">September 14, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Efootball;
