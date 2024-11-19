import React, { useState } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange, pagePerGroup }) => {
  const PAGES_PER_GROUP = pagePerGroup || 10;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visiblePages = windowWidth < 640 ? 5 : PAGES_PER_GROUP; //5
  const currentGroupResponsive = Math.floor((currentPage - 1) / visiblePages); //0
  const startPageResponsive = currentGroupResponsive * visiblePages + 1;
  const endPageResponsive = Math.min(
    startPageResponsive + visiblePages - 1,
    totalPages
  ); // 5

  const handlePrevGroup = () => {
    const newPage = startPageResponsive - visiblePages;
    onPageChange("page", newPage);
  };

  const handleNextGroup = () => {
    const newPage = startPageResponsive + visiblePages;
    onPageChange("page", newPage);
  };

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
      <div className="flex items-center justify-center gap-1 sm:gap-3">
        {startPageResponsive > 1 && (
          <button
            className="flex items-center px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-purple-800 hover:text-white
            bg-purple-900/40 hover:bg-purple-800 transition-all duration-200 ease-in-out
            shadow-lg hover:shadow-purple-500/20 text-sm sm:text-base"
            onClick={handlePrevGroup}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Previous</span>
          </button>
        )}

        <div className="flex items-center gap-1 sm:gap-2">
          {Array.from(
            { length: endPageResponsive - startPageResponsive + 1 },
            (_, index) => {
              const pageNumber = startPageResponsive + index;
              return (
                <button
                  key={pageNumber}
                  onClick={() => onPageChange("page", pageNumber)}
                  className={`
                  w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center
                  transition-all duration-200 ease-in-out text-sm sm:text-base
                  ${
                    currentPage === pageNumber
                      ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30 scale-110"
                      : "bg-purple-900/40 text-purple-800 hover:bg-purple-800 hover:text-white"
                  }
                `}
                >
                  {pageNumber}
                </button>
              );
            }
          )}
        </div>

        {endPageResponsive < totalPages && (
          <button
            className="flex items-center px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-purple-800 hover:text-white
            bg-purple-900/40 hover:bg-purple-800 transition-all duration-200 ease-in-out
            shadow-lg hover:shadow-purple-500/20 text-sm sm:text-base"
            onClick={handleNextGroup}
          >
            <span className="hidden sm:inline">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="text-purple-800 text-xs sm:text-sm font-medium bg-purple-900/40 px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
