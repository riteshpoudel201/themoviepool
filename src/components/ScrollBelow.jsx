
const ScrollBelow = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[10vh] pointer-events-none z-[1]">
        <div className="w-full h-full flex justify-center items-center">

          <button
            className="hidden md:flex flex-col items-center w-20 h-20 text-purple-500 animate-bounce pointer-events-auto hover:animate-none "
            onClick={() => {
              window.scrollTo({ top: 500, behavior: "smooth" });
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 16.0609L5.96956 10.0278L7.03046 8.96739L12 13.9391L16.9696 8.96739L18.0305 10.0278L12 16.0609Z"
                  fill="currentColor"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
  )
}

export default ScrollBelow