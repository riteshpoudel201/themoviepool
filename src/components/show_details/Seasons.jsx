/* eslint-disable react/prop-types */
import { useState } from "react";
import DetailRow from "./DetailRow";

const Seasons = ({ seasons }) => {
    const [activeTab, setActiveTab] = useState(0); // Default active season tab is 0
  
    return (
      <div className="space-y-8 w-full overflow-x-auto">
        {/* Scrollable Tab Header */}
        <div className="overflow-x-auto">
          <div className="flex space-x-4 min-w-max ">
            {seasons.map((season, index) => (
              <button
                key={season.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-lg font-semibold rounded-t-lg whitespace-nowrap ${
                  activeTab === index
                    ? "bg-purple-800 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {season.name}
              </button>
            ))}
          </div>
        </div>
  
        {/* Tab Content */}
        <div className="mt-4 space-y-4">
          {seasons[activeTab] && (
            <div>
              <DetailRow label="Air Date" value={seasons[activeTab]?.air_date} />
              <DetailRow
                label="Episode Count"
                value={seasons[activeTab]?.episode_count}
              />
              <DetailRow
                label="Season Number"
                value={seasons[activeTab]?.season_number}
              />
  
              {/* Show season poster */}
              {seasons[activeTab]?.poster_path && (
                <div className="mt-4">
                  <h4 className="font-medium text-lg text-gray-800">Poster</h4>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${seasons[activeTab]?.poster_path}`}
                    alt={`${seasons[activeTab]?.name} Poster`}
                    className="w-full md:w-64 h-auto object-cover mt-2 rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  export default Seasons