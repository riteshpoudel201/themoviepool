/* eslint-disable react/prop-types */

import Trailer from "../Trailer"

const PosterWIthTrailer = ({show,imageUrl,videoKey}) => {
  return (
    <div className="flex-1 max-w-full h-auto">
    <div className="flex max-w-full h-[256px] relative items-center justify-center">
      {/* Poster Image */}
      <img
        src={`${imageUrl}original/${show?.poster_path || show?.backdrop_path}`}
        alt={`${show?.title || show?.name} Poster`}
        className="aspect-video w-full h-full object-cover rounded-lg shadow-md absolute"
      />

      {/* Centered Trailer Button */}
      
        { videoKey == "N" ? <Trailer videoKey={videoKey} isHide={true}/> : <Trailer videoKey={videoKey} isHide={false}/> }
        {videoKey === "N" && <p className="text-white relative z-30 bg-black/60 p-2 px-3 rounded-md pointer-events-none">Video Unavailabl😓</p>}
      
    </div>
    <p className="mt-4 tracking-wide text-justify leading-8">{show?.overview}</p>
  </div>
  )
}

export default PosterWIthTrailer
