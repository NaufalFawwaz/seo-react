import React from "react";
import { itTakestwo } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const ItTakesTwo = () => {
    return (
        <div className="flex flex-col items-center py-7">
            <Helmet>
                <title>It Takes Two - A Co-op Adventure</title>
                <meta
                    name="description"
                    content="It Takes Two is a unique co-op adventure game designed for two players. Embark on an emotional journey with Cody and May as they navigate their transformed world to save their relationship."
                />
                <meta
                    name="keywords"
                    content="It Takes Two, co-op game, action-adventure, platformer, Hazelight Studios, Cody and May, split-screen"
                />
                <meta property="og:title" content="It Takes Two" />
                <meta
                    property="og:description"
                    content="Experience the award-winning co-op game It Takes Two. Solve puzzles, overcome challenges, and enjoy an emotional story with a friend."
                />
                <meta property="og:image" content="URL_of_your_image" />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-react.vercel.app/games/it-takes-two"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-2">It Takes Two</h1>
            <p className="text-lg text-gray-600 text-center mb-6 italic">
                Embark on a heartfelt co-op journey.
            </p>

            <iframe
                src="https://youtube.com/embed/ohClxMmNLQQ"
                title="It Takes Two Trailer"
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
                        <span className="font-medium">It Takes Two</span> adalah game co-op petualangan yang dirancang untuk dimainkan
                        oleh dua pemain. Dikembangkan oleh Hazelight Studios, game ini menawarkan pengalaman unik dengan gameplay
                        yang kreatif dan variatif. Pemain harus bekerja sama untuk mengatasi berbagai tantangan yang dirancang
                        secara inovatif, sambil menyelami cerita yang penuh emosi tentang hubungan dan kerja sama.
                    </p>
                    <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                        <FaFeatherAlt className="text-xl" /> Synopsis
                    </h2>
                    <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                        Dalam <span className="font-medium">It Takes Two</span>, pemain mengikuti kisah Cody dan May, pasangan yang
                        tengah menghadapi masalah dalam pernikahan mereka. Setelah sebuah sihir mengubah mereka menjadi boneka,
                        mereka harus bekerja sama untuk kembali ke tubuh mereka yang asli. Sepanjang perjalanan, mereka akan
                        menghadapi berbagai rintangan unik yang memaksa mereka untuk bekerja sama dan memahami satu sama lain,
                        sambil mengeksplorasi dunia yang penuh warna dan imajinatif.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={itTakestwo}
                        alt="It Takes Two"
                        className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                    />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <FaGamepad className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Genre</p>
                                <p className="text-gray-600">
                                    Action, Adventure, Co-op, Platformer
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                <p className="text-gray-600">March 26, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItTakesTwo;
