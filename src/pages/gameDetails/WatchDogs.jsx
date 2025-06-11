import React from "react";
import { watchdog } from "../../assets";
import { FaGamepad, FaCalendarAlt, FaFeatherAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const WatchDogs = () => {
  return (
    <div className="flex flex-col items-center py-7">
      <Helmet>
        <title>Resident Evil 2 - Experience the Survival Horror of Raccoon City</title>
        <meta
          name="description"
          content="Experience the remake of the survival horror classic Resident Evil 2. Fight to survive in the zombie-infested Raccoon City with improved graphics and modern gameplay."
        />
        <meta
          name="keywords"
          content="Resident Evil 2, Filkom UB Game Corner, survival horror, action-adventure, zombie outbreak, Raccoon City, Umbrella Corporation, survival game, RE2"
        />
        <meta
          property="og:title"
          content="Resident Evil 2 - Experience the Survival Horror of Raccoon City"
        />
        <meta
          property="og:description"
          content="Resident Evil 2 brings back the horror of Raccoon City. Play as Leon and Claire to uncover the secrets of the Umbrella Corporation while surviving a zombie apocalypse."
        />
        <meta property="og:image" content="URL_of_your_image" />
        <meta property="og:url" content="https://filkom-ub-game-corner-react.vercel.app/games/watch-dog-legion" />
      </Helmet>
      <h1 className="text-3xl font-bold text-center mb-2">Watch Dogs: Legion</h1>
      <p className="text-lg text-gray-600 text-center mb-6 italic">
        Build your resistance and fight back against oppression in a futuristic London.
      </p>
      <iframe
        src="https://www.youtube.com/embed/srXrGKGAU20?si=-q2N9wuSYhfAIwfw"
        title="Watch Dogs: Legion Trailer"
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
            <span className="font-medium">Watch Dogs: Legion</span> adalah game open-world yang memungkinkan pemain
            untuk merekrut dan mengendalikan berbagai karakter di sebuah London dystopian. Pemain dapat merancang taktik
            melalui berbagai kemampuan unik setiap karakter yang dapat direkrut, memungkinkan pendekatan permainan yang sangat
            bervariasi. Dalam dunia yang penuh pengawasan dan teknologi canggih, pemain akan membangun sebuah perlawanan
            yang berjuang melawan rezim otoriter yang menguasai kota. Setiap karakter yang direkrut membawa kelebihan dan
            tantangan tersendiri, membuat setiap keputusan penting dalam merancang strategi untuk mencapai kemenangan.
          </p>
          <h2 className="font-bold text-3xl mb-6 text-primary1 flex items-center gap-2">
            <FaFeatherAlt className="text-xl" /> Synopsis
          </h2>
          <p className="text-lg xl:text-xl max-w-[700px] xl:max-w-[800px] text-gray-700 leading-relaxed text-justify">
            Dalam <span className="font-medium">Watch Dogs: Legion</span>, pemain dapat mengendalikan hampir setiap
            karakter di dunia terbuka London. Pemain dapat merekrut siapa saja yang dijumpai di jalanan untuk bergabung
            dalam pasukan perlawanan, berperang melawan penguasa otoriter yang mendominasi kota. Berbagai gaya bermain dapat
            dipilih, mulai dari pendekatan diam-diam hingga pertempuran terbuka, dengan setiap keputusan yang diambil akan
            mempengaruhi perjalanan cerita dan hasil akhir. Dengan grafis yang menakjubkan dan alur cerita yang penuh
            intrik, game ini menawarkan pengalaman aksi yang mendalam dan penuh strategi.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={watchdog}
            alt="Watch Dogs: Legion"
            className="w-full max-w-md h-auto object-contain bg-gray-100 mb-6 rounded-lg shadow-lg"
          />
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <FaGamepad className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Genre</p>
                <p className="text-gray-600">Action-Adventure, Open-World</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCalendarAlt className="text-primary1 text-3xl" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Release Date</p>
                <p className="text-gray-600">October 29, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchDogs;
