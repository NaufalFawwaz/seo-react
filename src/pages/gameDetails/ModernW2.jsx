import React from "react";
import { mw2 } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const ModernW2 = () => {
    return (
        <div className="flex flex-col items-center py-7">
            <Helmet>
                <title>Call of Duty: Modern Warfare II</title>
                <meta
                    name="description"
                    content="Call of Duty: Modern Warfare II is an action-packed first-person shooter game that immerses players in gripping missions and intense multiplayer battles."
                />
                <meta
                    name="keywords"
                    content="Call of Duty, Modern Warfare II, FPS, action, multiplayer, Infinity Ward, Activision"
                />
                <meta property="og:title" content="Call of Duty: Modern Warfare II" />
                <meta
                    property="og:description"
                    content="Experience the adrenaline-pumping action of Call of Duty: Modern Warfare II with its captivating campaign and multiplayer modes."
                />
                <meta property="og:image" content="URL_of_your_image" />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-react.vercel.app/games/call-of-duty-modern-warfare-II"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-2">Call of Duty: Modern Warfare II</h1>
            <p className="text-lg text-gray-600 text-center mb-6 italic">
                Immerse yourself in the action-packed world of Modern Warfare.
            </p>

            <iframe
                src="https://youtube.com/embed/ztjfwecrY8E?si=wc6Qd8eDWTJ_m5Y9"
                title="Modern Warfare II Trailer"
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
                        <span className="font-medium">Call of Duty: Modern Warfare 2</span> adalah game first-person shooter (FPS) yang menghadirkan pengalaman realistis dengan grafis menakjubkan dan gameplay yang intens. Game ini menawarkan mode campaign dengan alur cerita yang mendalam, serta mode multiplayer yang sangat kompetitif dan adiktif. Pemain akan merasakan aksi penuh adrenalin dalam berbagai misi yang penuh tantangan, mulai dari pertempuran di kota-kota yang hancur hingga operasi rahasia di daerah yang sulit dijangkau. Dengan berbagai senjata dan peralatan canggih, pemain dapat menyesuaikan gaya bermain mereka untuk menghadapi berbagai situasi yang dihadapi di lapangan.
                    </p>
                    <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                        <FaFeatherAlt className="text-xl" /> Synopsis
                    </h2>
                    <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                        Dalam <span className="font-medium">Modern Warfare 2</span>, pemain mengikuti cerita tim taktis elit yang menghadapi ancaman global yang semakin meningkat. Pemain akan menjelajahi berbagai lokasi eksotis, mulai dari pegunungan bersalju di Rusia hingga gurun yang gersang di Timur Tengah, dan berpartisipasi dalam operasi militer yang mendalam dan menegangkan. Setiap misi dirancang untuk memberikan pengalaman yang mendebarkan, dengan elemen kejutan dan keputusan strategis yang dapat mempengaruhi hasil. Dengan fokus pada realisme dan detail, game ini memberikan pengalaman FPS yang tak terlupakan, di mana pemain tidak hanya berperan sebagai prajurit, tetapi juga sebagai bagian dari narasi yang lebih besar yang mencakup pengkhianatan, aliansi, dan perjuangan untuk keadilan. Selain itu, mode multiplayer menawarkan berbagai peta dan mode permainan yang memungkinkan pemain untuk bersaing dengan teman dan pemain lain di seluruh dunia, menciptakan komunitas yang dinamis dan penuh tantangan.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={mw2}
                        alt="Modern Warfare II"
                        className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                    />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <FaGamepad className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Genre</p>
                                <p className="text-gray-600">Action, FPS, Multiplayer</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                <p className="text-gray-600">October 28, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernW2;
