import React from 'react'
import { useState } from "react"


export default function SidebarItem({ item, addElement }) {

    const [open, setOpen] = useState(false)

    const handleClick = (imageId) => {
        addElement(imageId);
    };
 

    return (
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className='sidebar-title'>
                <span>
                    {item.icon && <img className='logo' src={item.icon} alt="imageLogo" />}
                    {item.title}
                </span>
                <img className='arrowDown toggle-btn' src="images/ArrowDownLogo.svg" alt="arrowLogo" onClick={() => setOpen(!open)} />
            </div>
            <div className="sidebar-content" >
                {item.childrens.map((child) => <img className='objects'  key={child.id}  id={child.id} src={child.item} alt={child.caption} onClick={() => handleClick(child.id)}
                />)}

            </div>
        </div>
    )
}



