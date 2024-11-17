/* eslint-disable react/prop-types */
const Filters = ({ filters, onFilterChange }) => {
    return (
      <div className="flex flex-wrap gap-6 p-4 bg-purple-800 rounded-lg mb-8">
        <div className="flex items-center gap-2">
          <label className="text-purple-400 text-sm">Language:</label>
          <select
            value={filters.language}
            onChange={(e) => onFilterChange("language", e.target.value)}
            className="bg-purple-700 border border-purple-600 text-white p-2 rounded text-sm focus:outline-none focus:border-blue-400"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
          </select>
        </div>
  
        <div className="flex items-center gap-2">
          <label className="text-purple-400 text-sm">Region:</label>
          <select
            value={filters.region}
            onChange={(e) => onFilterChange("region", e.target.value)}
            className="bg-purple-700 border border-purple-600 text-white p-2 rounded text-sm focus:outline-none focus:border-blue-400"
          >
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IT">Italy</option>
            <option value="JP">Japan</option>
            <option value="KR">Korea</option>
          </select>
        </div>
  
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 text-purple-400 text-sm">
            <input
              type="checkbox"
              checked={filters.includeAdult}
              onChange={(e) => onFilterChange("includeAdult", e.target.checked)}
              className="accent-purple-400 w-4 h-4"
            />
            Include Adult Content
          </label>
        </div>
      </div>
    );
  };

export default Filters;
