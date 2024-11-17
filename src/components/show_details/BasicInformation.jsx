/* eslint-disable react/prop-types */
import DetailRow from "./DetailRow"

const BasicInformation = ({show,type}) => {
  return (
    <div className="space-y-4">
    <DetailRow label="Name" value={show?.title || show?.name} />
    <DetailRow label="Type" value={type} />

    {/* Release / Air Dates */}
    
      {show?.first_air_date && (
        <DetailRow
          label="First Aired At"
          value={show?.first_air_date}
        />
      )}

      {show?.last_air_date && (
        <DetailRow
        label="Last Aired At"
        value={show?.last_air_date}
      />
      )}

      {show?.release_date && <DetailRow
        label="Released Date"
        value={show?.release_date}
      />}

    {/* Country of Origin */}
    {show?.origin_country && <DetailRow
      label="Country"
      value={show?.origin_country}
      isArray={true}
    />}
    
  </div>
  )
}

export default BasicInformation
