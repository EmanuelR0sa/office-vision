import React from 'react'
import SidebarItem from "./SidebarItem"
import items from "./sidebar.json"


function Sidebar({addElement}) {
  
 
  return (
    <>
      <div className='sideContainer'>
        <div className='sideMain' >
        {items.map((item, index ) => <SidebarItem key={index} item={item}  addElement={addElement} /> )}
        </div>
      </div>
    </>
  )
}

export default Sidebar

