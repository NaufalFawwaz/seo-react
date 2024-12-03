import React from "react";
import { away } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const AwayOut = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <Helmet>
        <title>A Way Out - Co-op Escape Adventure</title>
        <meta name="description" content="A Way Out is an action-adventure co-op game where two players must work together to escape prison and unravel mysteries. Experience a story of teamwork, trust, and escape." />
        <meta name="keywords" content="A Way Out, co-op game, Filkom UB Gamce Corner, action-adventure, prison escape, teamwork, puzzle, Leo, Vincent, cooperative gameplay, story-driven game" />
        <meta property="og:title" content="A Way Out - Co-op Escape Adventure" />
        <meta property="og:description" content="Join Leo and Vincent as they attempt to escape prison and uncover a world of challenges in this unique co-op action-adventure game. Only through cooperation can they reach freedom." />
        <meta property="og:image" content="URL_of_your_image" />
        <meta property="og:url" content="https://filkom-ub-game-corner-react.vercel.app/info/a-way-out" />
      </Helmet>

      <h1 className="text-3xl font-bold text-center mb-2">A Way Out</h1>
        <p className="text-lg text-gray-600 text-center mb-6 italic">
          Escape together with a friend in this co-op adventure.
        </p>
        <iframe
          src="https://youtube.com/embed/-r5fY05t_7g?si=BlmtlLJen0bCDZ4o"
          title="A Way Out Trailer"
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
              <span className="font-medium">*A Way Out*</span> adalah permainan petualangan kooperatif yang memungkinkan dua
              pemain bekerja sama untuk melarikan diri dari penjara dan mengungkap misteri di luar tembok penjara. Dengan
              mekanik permainan yang dirancang untuk pengalaman kooperatif, game ini menawarkan pengalaman cerita yang
              mendalam dan penuh ketegangan. Pemain harus memanfaatkan kekuatan unik dari setiap karakter untuk menyelesaikan
              teka-teki dan tantangan yang muncul di sepanjang perjalanan mereka, sementara hubungan antara Leo dan Vincent
              semakin berkembang.
            </p>
            <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
              <FaFeatherAlt className="text-xl" /> Synopsis
            </h2>
            <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
              Dalam <span className="font-medium">*A Way Out*</span>, pemain mengikuti kisah dua narapidana, Leo dan
              Vincent, yang harus bekerja sama untuk melarikan diri dari penjara dan menghadapi dunia luar yang penuh
              tantangan. Setiap keputusan mereka akan mempengaruhi jalan cerita, dan hanya dengan kerja sama mereka dapat
              mencapai kebebasan. Selain berjuang untuk keluar dari penjara, mereka juga harus menghadapi berbagai ancaman
              dari dunia luar yang tidak kalah berbahaya, sambil mengungkap rahasia yang lebih besar dari yang mereka bayangkan.
            </p>
          </div>

        <div className="flex flex-col items-center">
          <img
            src={away}
            alt="A Way Out"
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <FaGamepad className="text-primary1 text-3xl" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Genre</p>
                  <p className="text-gray-600">Action-Adventure, Co-op</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaCalendarAlt className="text-primary1 text-3xl" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Release Date</p>
                  <p className="text-gray-600">March 23, 2018</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AwayOut;
