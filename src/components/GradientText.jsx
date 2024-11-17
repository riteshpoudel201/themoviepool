/* eslint-disable react/prop-types */

const GradientText = ({children, className}) => {
  return (
    <h1 className={`w-fit h-fit bg-clip-text text-transparent bg-gradient-from-tl bg-gradient-to-br from-purple-600 from-20% via-blue-500 via-60% to-red-500 to-20% font-bold ${className}`}>
      {children}
    </h1>
  )
}

export default GradientText
