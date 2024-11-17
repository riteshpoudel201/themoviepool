/* eslint-disable react/prop-types */

import CollapsibleSection from "./CollapsibleSection"
import Seasons from "./Seasons"

const CollapsibleInformation = ({show}) => {
  return (
    <>
     <div className="border-t-2 border-gray-200 pt-4 space-y-4">
     {/* Created By */}
     <CollapsibleSection
       label="Created By"
       content={show?.created_by?.map((creator) => (
         <span key={creator.id} className="block">
           {creator.original_name}
         </span>
       ))}
     />

     {/* Production Companies */}
     <CollapsibleSection
       label="Production Companies"
       content={show?.production_companies.map((company) => (
         <span key={company.id} className="block">
           {company.name}
         </span>
       ))}
     />

     {/* Production Countries */}
     <CollapsibleSection
       label="Production Countries"
       content={show?.production_countries
         .map((c) => c.name)
         .join(", ")}
     />
   </div>

   {show?.seasons && (
     <CollapsibleSection
       label="Seasons"
       content={<Seasons seasons={show?.seasons} />}
     />
   )}
 
 </>
  )
}

export default CollapsibleInformation
