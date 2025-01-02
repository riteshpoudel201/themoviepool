import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShowDetails, getYouTubeKey } from "../utils/axios";
import PageContainer from "../components/Container";
import Banner from "../components/show_details/Banner";
import BasicInformation from "../components/show_details/BasicInformation";
import AdditionalInformation from "../components/show_details/AdditionalInformation";
import PosterWIthTrailer from "../components/show_details/PosterWIthTrailer";
import CollapsibleInformation from "../components/show_details/CollapsibleInformation";
import SimilarShows from "../components/show_details/SimilarShows";
import RecommendedShows from "../components/show_details/RecommendedShows";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_PATH;

const ShowDetails = () => {
  const { id, type } = useParams();
  const [show, setShow] = useState();
  const [videoKey, setVideoKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const show = await fetchShowDetails(id, type);
      const video_key = await getYouTubeKey(id, type);
      setVideoKey(video_key[0]);
      setShow(show);
      setIsLoading(false);
    };
    fetchDetails();
  }, [id, type]);
  return (
    <PageContainer>
      {isLoading ? <p className="w-[100vw] h-[100vh] flex items-center justify-center">Loading...</p> :<div className="w-full h-full">
        {/* banner starts here  */}
        <Banner show={show} />
        {/* banner ends here  */}
        {/* show details starts here  */}
        <div className="w-screen flex flex-col lg:flex-row gap-8 px-2 lg:px-8 mt-3">
          <div className="w-full lg:w-[70%] flex flex-col gap-8 p-6 bg-white rounded-lg shadow-lg">
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
          <div className="flex flex-col">
            {show && (
              <>
                <SimilarShows type={type} showId={show?.id} />
                <RecommendedShows type={type} showId={show?.id} />{" "}
              </>
            )}
          </div>
        </div>
        {/* show details ends here  */}
      </div>}
    </PageContainer>
  );
};

export default ShowDetails;
