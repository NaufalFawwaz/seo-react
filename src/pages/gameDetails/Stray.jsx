import React from "react";
import { stray } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Stray = () => {
    return (
        <div className="flex flex-col items-center py-7">
            <Helmet>
                <title>Stray - Adventure in a Cyberpunk World</title>
                <meta
                    name="description"
                    content="Stray is an adventure game where you play as a stray cat navigating a dystopian cyberpunk world. Solve puzzles, interact with droids, and uncover mysteries."
                />
                <meta
                    name="keywords"
                    content="Stray, cat adventure, cyberpunk, puzzle game, BlueTwelve Studio, Annapurna Interactive"
                />
                <meta property="og:title" content="Stray" />
                <meta
                    property="og:description"
                    content="Experience the unique journey of a stray cat in a beautifully crafted cyberpunk world. Solve puzzles and unravel the mysteries of a forgotten society."
                />
                <meta property="og:image" content="URL_of_your_image" />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-react.vercel.app/games/stray"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-2">Stray</h1>
            <p className="text-lg text-gray-600 text-center mb-6 italic">
                Navigate the life of a stray cat in a cyberpunk world.
            </p>

            <iframe
                src="https://youtube.com/embed/u84hRUQlaio?si=S1yVnq-LNtwYO0jI"
                title="Stray Trailer"
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
                        <span className="font-medium">Stray</span> adalah game petualangan aksi di mana pemain mengendalikan
                        seekor kucing di dunia futuristik yang penuh dengan robot, makhluk misterius, dan teknologi yang
                        terlupakan. Dengan grafis yang memukau dan gameplay yang imersif, Stray mengajak pemain untuk menjelajahi
                        kota yang luas, memecahkan teka-teki, dan bertarung melawan musuh yang menantang.
                    </p>
                    <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                        <FaFeatherAlt className="text-xl" /> Synopsis
                    </h2>
                    <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                        Dalam <span className="font-medium">Stray</span>, pemain mengikuti petualangan seekor kucing yang
                        terjebak di dunia futuristik yang penuh dengan rahasia. Pemain harus menjelajahi dunia tersebut, berinteraksi
                        dengan robot, menghindari bahaya, dan mengungkap misteri yang ada di balik kota yang hancur. Dengan gameplay
                        yang menggabungkan eksplorasi dan aksi, Stray menawarkan pengalaman yang unik dan memikat.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={stray}
                        alt="Stray"
                        className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                    />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <FaGamepad className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Genre</p>
                                <p className="text-gray-600">Adventure, Puzzle, Cyberpunk</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                <p className="text-gray-600">July 19, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stray;
