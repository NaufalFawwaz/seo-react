import React from "react";
import { eldenRing } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const EldenRing = () => {
    return (
        <div className="flex flex-col items-center py-7">
            <Helmet>
                <title>Elden Ring - Explore the Lands Between</title>
                <meta
                    name="description"
                    content="Elden Ring is an action RPG set in a vast open world, featuring epic battles, rich lore, and challenging gameplay. Created by FromSoftware and George R.R. Martin."
                />
                <meta
                    name="keywords"
                    content="Elden Ring, game, action RPG, open world, FromSoftware, George R.R. Martin, challenging gameplay"
                />
                <meta property="og:title" content="Elden Ring" />
                <meta
                    property="og:description"
                    content="Venture into the Lands Between in Elden Ring, a masterpiece by FromSoftware. Explore a vast open world filled with danger, secrets, and lore."
                />
                <meta property="og:image" content="URL_of_your_image" />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-react.vercel.app/games/elden-ring"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-2">Elden Ring</h1>
            <p className="text-lg text-gray-600 text-center mb-6 italic">
                Embark on an epic journey through the Lands Between.
            </p>

            <iframe
                src="https://youtube.com/embed/E3Huy2cdih0"
                title="Elden Ring Trailer"
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
                        <span className="font-medium">Elden Ring</span> adalah sebuah mahakarya action RPG yang lahir dari kolaborasi antara Hidetaka Miyazaki,
                        sang maestro desain game Soulsborne, dan George R.R. Martin, penulis saga epik "Game of Thrones".
                        Terletak di dunia terbuka yang luas dan penuh keajaiban, Elden Ring mengajak pemain untuk menjadi Tarnished,
                        seorang pengembara yang terbuang dan mencari Elden Ring yang hancur. Dengan sistem pertarungan yang mendalam,
                        kustomisasi karakter yang luas, serta narasi yang kaya dan penuh misteri, Elden Ring menawarkan pengalaman bermain
                        yang tak terlupakan bagi para penggemar genre action RPG.
                    </p>
                    <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                        <FaFeatherAlt className="text-xl" /> Synopsis
                    </h2>
                    <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                        Dalam <span className="font-medium">Elden Ring</span>, dunia Lands Between telah hancur akibat perang saudara antara para demigod.
                        Sebagai Tarnished, Anda dipanggil kembali untuk memperbaiki Elden Ring dan menjadi Elden Lord.
                        Jelajahi dunia terbuka yang luas, penuh dengan reruntuhan kuno, kastil megah, dan makhluk mengerikan.
                        Temukan senjata dan sihir yang kuat, panggil roh untuk membantu Anda dalam pertempuran, dan ungkap rahasia yang tersembunyi di balik setiap sudut.
                        Bersiaplah untuk menghadapi tantangan yang tak terduga dan mengungkap nasib dunia Lands Between.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={eldenRing}
                        alt="Elden Ring"
                        className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                    />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <FaGamepad className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Genre</p>
                                <p className="text-gray-600">Action, RPG, Open World</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                <p className="text-gray-600">February 25, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EldenRing;
