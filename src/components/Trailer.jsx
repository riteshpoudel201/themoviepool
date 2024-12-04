/* eslint-disable react/prop-types */
import { useState } from "react";
import CrossIcon from '../assets/icons/CrossIcon'
import PlayIcon from '../assets/icons/PlayIcon'
import Modal from "./Modal";

const Trailer = ({ videoKey, isHide=false }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleButtonClick = () => {
    setShowTrailer(true);
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
  };

  return (
    <div className={`trailer-container text-center ${isHide ? 'hidden' : 'flex'}`}>
      {/* Show Trailer Button */}
      <button
        onClick={handleButtonClick}
        className="bg-purple-600/40 text-white p-6 rounded-full hover:bg-purple-700/60 transition relative z-20 backdrop-blur-lg"
        title="Play trailer"
      >
        <PlayIcon className="w-10 aspect-square" />
      </button>

      {/* Trailer Modal */}
      <Modal isOpen={showTrailer} onClose={handleCloseTrailer}>
        <TrailerVideo videoKey={videoKey} handleCloseTrailer={handleCloseTrailer}/>
      </Modal>

    </div>
  );
};

export default Trailer;

const TrailerVideo = ({videoKey, handleCloseTrailer}) => {
  return(
<div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center">
    {/* Modal Content */}
    <div className="relative w-11/12 max-w-4xl bg-gray-900 rounded-lg overflow-hidden">
      {/* Trailer Iframe */}
      <iframe
        className="w-full h-64 sm:h-96"
        src={`https://www.youtube.com/embed/${videoKey}`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>

      {/* Close Button */}
      <button
        onClick={handleCloseTrailer}
        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition"
      >
        <CrossIcon className="w-2" />
      </button>
    </div>
  </div>
  )
}