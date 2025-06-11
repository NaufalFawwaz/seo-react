import React from "react";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { nba } from "../../assets";

const NBA = () => {
    return (
        <div className="flex flex-col items-center py-7">
            <Helmet>
                <title>NBA 2K25 - Basketball at Its Finest</title>
                <meta
                    name="description"
                    content="NBA 2K25 brings you the most realistic basketball gaming experience. Build your dream team, compete online, and experience the thrill of NBA action."
                />
                <meta
                    name="keywords"
                    content="NBA 2K25, basketball game, sports simulation, online gaming, career mode"
                />
                <meta property="og:title" content="NBA 2K25" />
                <meta
                    property="og:description"
                    content="Experience NBA 2K25 with stunning graphics, immersive gameplay, and exciting new features."
                />
                <meta property="og:image" content="URL_of_your_image" />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-react.vercel.app/games/nba-2025"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-2">NBA 2K25</h1>
            <p className="text-lg text-gray-600 text-center mb-6 italic">
                Experience the ultimate basketball simulation.
            </p>

            <iframe
                src="https://www.youtube.com/embed/zwQ9RjfvJN0?si=bKkI6JG1ZpllNyQB"
                title="NBA 2K25 Trailer"
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
                        <span className="font-medium">NBA 2K25</span> adalah game simulasi bola basket terbaik yang
                        menghadirkan grafis canggih dan gameplay realistis. Game ini memungkinkan pemain untuk bermain sebagai
                        tim favorit mereka atau menciptakan pemain impian dalam mode karier yang mendalam. Dengan fitur online
                        multiplayer dan konten yang diperbarui secara berkala, game ini memberikan pengalaman basket yang
                        mendalam.
                    </p>
                    <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                        <FaFeatherAlt className="text-xl" /> Features
                    </h2>
                    <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                        <span className="font-medium">NBA 2K25</span> membawa pemain ke dunia bola basket dengan fitur-fitur
                        seperti alur cerita menarik dalam mode MyCareer, manajemen tim dalam MyGM, dan tantangan kompetitif
                        online. Dengan kontrol yang ditingkatkan dan animasi yang realistis, game ini menjadi pilihan utama
                        bagi penggemar olahraga.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={nba}
                        alt="NBA 2K25"
                        className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                    />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <FaGamepad className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Genre</p>
                                <p className="text-gray-600">Sports, Simulation</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                <p className="text-gray-600">September 8, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NBA;
