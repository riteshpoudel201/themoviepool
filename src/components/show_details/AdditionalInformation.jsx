/* eslint-disable react/prop-types */

import CollapsibleSection from "./CollapsibleSection"
import DetailRow from "./DetailRow"

const AdditionalInformation = ({show}) => {
  return (
    <CollapsibleSection
    label="Additional Information"
    content={
      <div className="space-y-4">
        <DetailRow
          label="Adult Content"
          value={show?.adult ? "Yes" : "No"}
        />
        <DetailRow label="Status" value={show?.status} />
        <DetailRow label="Vote Average" value={show?.vote_average} />
        <DetailRow label="Vote Count" value={show?.vote_count} />
        <DetailRow
          label="Original Language"
          value={show?.original_language}
        />
        <DetailRow
          label="Original Name"
          value={show?.original_name}
        />
      </div>
    }
  />
  )
}

export default AdditionalInformation
