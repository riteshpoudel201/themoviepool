/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom"


const ComponentContainerWithTitle = ({title,children,path}) => {
  
  return (
    <div className='w-[95vw] h-fit mx-auto mt-5 flex flex-col gap-4'>
      <div className="flex flex-row justify-between items-center">
      <Title title={title} />
      {path && <NavLink to={path} className="uppercase text-purple-800 tracking-wider text-xs font-bold">view all</NavLink>}
      </div>
        
      {children}
    </div>
  )
}

export default ComponentContainerWithTitle

const Title = ({title}) => {
    return (
        <h1 className='text-xl sm:text-3xl font-bold uppercase tracking-wider text-purple-600'>{title}</h1>
    )
}