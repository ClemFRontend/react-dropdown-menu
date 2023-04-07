import React from 'react'
import './Element.css'

function Element({icon, children}) {
    return (
        <li className='element'>
            {icon !== undefined && 
                <div className='element-icon'>
                    {icon}
                </div>
            }
            <p>{children}</p>
        </li>
    )
}

export default Element
