import React from 'react'


function Navbar({plusElement,dowloadElement}) {



  return (
    <>
      <div className='navContainer'>
        <div className='navMainContainer'>
          <div className='navTitleContainer'> 
          <img className='brandLogo' src="images/OV LOGO.svg" alt="brandlogo" />
          <h1 className='navTitle'>ffice VISION</h1>
          <p className='navtext'> Design and Developed by <a href="https://www.linkedin.com/in/emanuel-rosa-462334119/">Emanuel Rosa </a></p>
          </div>
          <div className='navIconsContainer'>
            <img className='plusIcon' src="images/NewMoodIcon.svg" alt="plusIcon" onClick={plusElement} />
            <img className='dowloadIcon' src="images/DowloadIcon.svg" alt="dowloadIcon" onClick={dowloadElement}  />
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar