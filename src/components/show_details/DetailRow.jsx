/* eslint-disable react/prop-types */

const DetailRow = ({ label, value, isArray = false }) => {
    return (
      <div className="flex flex-row justify-between items-center py-2 border-b-2 border-gray-200">
        <h1 className="font-semibold text-sm sm:text-xl text-purple-800 uppercase">
          {label}
        </h1>
        <span className="text-xs sm:text-lg text-gray-700">
          {isArray ? value?.join(", ") : value}
        </span>
      </div>
    );
}
export default DetailRow
