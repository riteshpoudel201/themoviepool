/* eslint-disable react/prop-types */

const PageContainer = ({children, className=''}) => {
  return (
    <div className={`w-full min-h-screen  mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default PageContainer
