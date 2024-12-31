import React from "react";
import { gtaV } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const GTAV = () => {
    return (
        <div className="flex flex-col items-center py-7">
            <Helmet>
                <title>Grand Theft Auto V - Explore Los Santos</title>
                <meta
                    name="description"
                    content="Grand Theft Auto V (GTA V) is an open-world action-adventure game that takes players to the bustling city of Los Santos and its surrounding areas. Experience the lives of three protagonists in an immersive story."
                />
                <meta
                    name="keywords"
                    content="Grand Theft Auto V, GTA V, Rockstar Games, open-world, action, adventure, Los Santos, gaming, heists"
                />
                <meta property="og:title" content="Grand Theft Auto V" />
                <meta
                    property="og:description"
                    content="Dive into the action-packed world of Los Santos in Grand Theft Auto V. Explore the lives of three unique characters and experience an unparalleled open-world adventure."
                />
                <meta property="og:image" content="URL_of_your_image" />
                <meta
                    property="og:url"
                    content="https://filkom-ub-game-corner-react.vercel.app/games/grand-theft-auto-v"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-2">Grand Theft Auto V</h1>
            <p className="text-lg text-gray-600 text-center mb-6 italic">
                Explore the dynamic world of Los Santos.
            </p>

            <iframe
                src="https://youtube.com/embed/QkkoHAzjnUs"
                title="Grand Theft Auto V Trailer"
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
                        <span className="font-medium">Grand Theft Auto V</span> adalah game open-world yang membawa pemain ke
                        dunia luas dan dinamis di Los Santos dan Blaine County. Game ini menampilkan tiga protagonis: Michael,
                        Franklin, dan Trevor, yang masing-masing memiliki cerita, kepribadian, dan keterampilan unik. Pemain
                        dapat bebas menjelajahi dunia, menyelesaikan misi, atau sekadar menikmati berbagai aktivitas yang tersedia.
                    </p>
                    <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
                        <FaFeatherAlt className="text-xl" /> Synopsis
                    </h2>
                    <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
                        Dalam <span className="font-medium">Grand Theft Auto V</span>, pemain mengikuti kisah tiga karakter utama:
                        Michael, mantan perampok bank yang mencari kehidupan baru; Franklin, seorang pemuda ambisius yang ingin
                        keluar dari jalanan; dan Trevor, seorang kriminal yang tidak stabil namun sangat loyal. Mereka bekerja
                        sama dalam serangkaian perampokan yang menantang, menghadapi pengkhianatan, dan melawan kekuatan besar
                        di Los Santos. Dunia yang kaya dan interaktif memberikan kebebasan luar biasa kepada pemain untuk menentukan
                        cara mereka menjalani permainan.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={gtaV}
                        alt="Grand Theft Auto V"
                        className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
                    />
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <FaGamepad className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Genre</p>
                                <p className="text-gray-600">Action, Adventure, Open World</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCalendarAlt className="text-primary1 text-3xl" />
                            <div>
                                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                                <p className="text-gray-600">September 17, 2013</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GTAV;
