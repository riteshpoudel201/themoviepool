import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShowDetails, getYouTubeKey } from "../utils/axios";
import PageContainer from "../components/Container";
import Banner from "../components/show_details/Banner";
import BasicInformation from "../components/show_details/BasicInformation";
import AdditionalInformation from "../components/show_details/AdditionalInformation";
import PosterWIthTrailer from "../components/show_details/PosterWIthTrailer";
import CollapsibleInformation from "../components/show_details/CollapsibleInformation";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_PATH;

const ShowDetails = () => {
  const { id, type } = useParams();
  const [show, setShow] = useState();
  const [videoKey, setVideoKey] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      const show = await fetchShowDetails(id, type);
      const video_key = await getYouTubeKey(id, type);
      console.log("Video Key: ", video_key);
      setVideoKey(video_key[0]);
      setShow(show);
    };
    fetchDetails();
  }, [id, type]);
  console.log(show);
  return (
    <PageContainer>
      <div className="w-full h-full">
        {/* banner starts here  */}
        <Banner show={show} />
        {/* banner ends here  */}
        <div className="flex flex-col lg:flex-row gap-8 p-6 bg-white rounded-lg shadow-lg">
          <PosterWIthTrailer
            show={show}
            imageUrl={IMAGE_URL}
            videoKey={videoKey}
          />
          {/* Show Details */}
          <div className="flex-1 w-full flex flex-col gap-6 overflow-hidden">
            <BasicInformation show={show} type={type} />
            <AdditionalInformation show={show} />
            <CollapsibleInformation show={show} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ShowDetails;
