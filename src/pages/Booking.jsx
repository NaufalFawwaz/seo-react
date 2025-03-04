import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { storage, db } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Booking = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [ktm, setKtm] = useState(null);
  const [ktmPreview, setKtmPreview] = useState("");
  const [selectedConsole, setSelectedConsole] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const consoles = ["PC ROG", "PS5", "Xbox", "Pump It Up"];
  const timeSlots = [
    "11:40 - 12:00",
    "13:05 - 13:45",
    "14:00 - 14:40",
    "15:15 - 15:55",
  ];

  const isSlotBooked = bookedSlots.some(
    (slot) =>
      slot.console === selectedConsole &&
      slot.date === selectedDate &&
      slot.time === selectedTime
  );

  const uploadKtmToStorage = async (file) => {
    const ktmRef = ref(storage, `ktm/${file.name}-${Date.now()}`);
    await uploadBytes(ktmRef, file);
    const downloadURL = await getDownloadURL(ktmRef);
    return downloadURL;
  };

  const saveBookingToFirestore = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "bookings"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (isSlotBooked) {
      setAlertMessage("Console sudah dipesan untuk tanggal dan jam tersebut");
      setAlertType("error");
      return;
    }

    try {
      const ktmUrl = await uploadKtmToStorage(ktm);

      const bookingData = {
        name,
        nim,
        ktmUrl,
        console: selectedConsole,
        date: selectedDate,
        time: selectedTime,
      };

      await saveBookingToFirestore(bookingData);
      setBookedSlots([...bookedSlots, { ...bookingData, ktmPreview }]);

      setSelectedConsole("");
      setSelectedDate("");
      setSelectedTime("");

      setAlertMessage("Pemesanan berhasil!");
      setAlertType("success");
    } catch (error) {
      setAlertMessage("Terjadi kesalahan. Silakan coba lagi.");
      setAlertType("error");
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!name || !nim || !ktm) {
      setAlertMessage("Mohon lengkapi semua informasi dan upload foto KTM Anda.");
      setAlertType("error");
      return;
    }
    setIsConfirmed(true);
  };

  const handleKtmUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg")) {
      setKtm(file);
      setKtmPreview(URL.createObjectURL(file));
    } else {
      setAlertMessage("Mohon unggah file gambar dengan format PNG atau JPG.");
      setAlertType("error");
      e.target.value = null;
    }
  };

  const fetchBookedSlots = async () => {
    const querySnapshot = await getDocs(collection(db, "bookings"));
    const slots = querySnapshot.docs.map((doc) => doc.data());
    setBookedSlots(slots);
  };

  useEffect(() => {
    fetchBookedSlots();
  }, []);

  const handleBookingClick = (slot) => {
    setSelectedBooking(slot);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <Helmet>
        <title>Booking Konsol Game Terbaik | Reservasi Mudah dan Cepat</title>
        <meta
          name="description"
          content="Pesan konsol game favorit Anda seperti PC ROG, PS5, Xbox, dan Pump It Up dengan mudah. Pilih tanggal dan waktu yang sesuai untuk pengalaman bermain terbaik."
        />
        <meta
          name="keywords"
          content="Booking Konsol Game, Filkom UB Game Corner, Reservasi Game Console, PS5 Booking, Xbox Booking, PC ROG Reservation, Pump It Up Booking, Pemesanan Game Console"
        />
        <meta property="og:title" content="Booking Konsol Game Terbaik | Reservasi Mudah dan Cepat" />
        <meta
          property="og:description"
          content="Pesan konsol game favorit Anda seperti PC ROG, PS5, Xbox, dan Pump It Up dengan mudah. Pilih tanggal dan waktu yang sesuai untuk pengalaman bermain terbaik."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://filkom-ub-game-corner-react.vercel.app/book+" />
        <link rel="canonical" href="https://filkom-ub-game-corner-react.vercel.app/book+" />
      </Helmet>

      <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">Game Console Booking</h2>
      {alertMessage && (
        <div
          className={`w-full max-w-md p-4 rounded-lg mb-6 text-center ${alertType === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {alertMessage}
        </div>
      )}

      {/* Verifikasi Identitas */}
      {!isConfirmed && (
        <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md" onSubmit={handleConfirm}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Verifikasi Identitas</h3>
          <label className="block mb-4">
            <span className="text-gray-700">Nama:</span>
            <input
              type="text"
              className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">NIM:</span>
            <input
              type="text"
              className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Upload Foto KTM:</span>
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
              onChange={handleKtmUpload}
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
          >
            Confirm
          </button>
        </form>
      )}

      {/* Booking Form */}
      {isConfirmed && (
        <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md" onSubmit={handleBooking}>
          <label className="block mb-4">
            <span className="text-gray-700">Pilih Console:</span>
            <select
              className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
              value={selectedConsole}
              onChange={(e) => setSelectedConsole(e.target.value)}
              required
            >
              <option value="">Pilih Console</option>
              {consoles.map((console) => (
                <option key={console} value={console}>
                  {console}
                </option>
              ))}
            </select>
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Pilih Tanggal:</span>
            <input
              type="date"
              className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Pilih Jam:</span>
            <select
              className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            >
              <option value="">Pilih Jam</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className={`w-full ${isSlotBooked ? "bg-gray-500" : "bg-blue-500"} text-white font-bold py-2 px-4 rounded-lg`}
            disabled={isSlotBooked}
          >
            {isSlotBooked ? "Slot Sudah Dipesan" : "Pesan Sekarang"}
          </button>
        </form>
      )}

      {/* Booking History */}
      <div className="mt-8 w-full flex flex-wrap justify-center gap-6">
        <h3 className="text-2xl font-semibold text-center w-full mb-4">Booking History</h3>
        {bookedSlots.map((slot, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 w-64 flex-shrink-0 cursor-pointer"
            onClick={() => handleBookingClick(slot)}
          >
            <p><strong>Nama:</strong> {slot.name}</p>
            <p><strong>NIM:</strong> {slot.nim}</p>
            <p><strong>Console:</strong> {slot.console}</p>
            <p><strong>Tanggal:</strong> {slot.date}</p>
            <p><strong>Waktu:</strong> {slot.time}</p>
            {slot.ktmUrl && (
              <img
                src={slot.ktmUrl}
                alt="KTM"
                className="mt-4 max-w-full h-auto rounded-lg object-contain"
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal for booking details */}
      {isModalOpen && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/2 max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Booking Details</h3>
            <p><strong>Nama:</strong> {selectedBooking.name}</p>
            <p><strong>NIM:</strong> {selectedBooking.nim}</p>
            <p><strong>Console:</strong> {selectedBooking.console}</p>
            <p><strong>Tanggal:</strong> {selectedBooking.date}</p>
            <p><strong>Waktu:</strong> {selectedBooking.time}</p>
            {selectedBooking.ktmUrl && (
              <img
                src={selectedBooking.ktmUrl}
                alt="KTM"
                className="mt-4 max-w-full h-auto rounded-lg object-contain"
              />
            )}
            <div className="mt-4 text-center">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
