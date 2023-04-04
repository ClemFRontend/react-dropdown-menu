import React, { useState } from 'react'
import './Dropdown.css'

import ICON_ARROW_DOWN from '../../assets/icon-arrow-down.svg'
import ICON_ARROW_UP from '../../assets/icon-arrow-up.svg'

function Dropdown({title, children}) {

    const [display, setDisplay] = useState('none')
    const [rotation, setRotation] = useState('0')

    function toogleDisplay() {
        
        if (display === 'none') {
            setDisplay("block")
            setRotation("180deg")
        } else {
            setDisplay("none")
            setRotation("0deg")
        }
    }

    return (
        <div className='dropdown-menu'>
            <div className='dropdown-title-container' onClick={() => toogleDisplay()}>
                <p>{title}</p>
                <img 
                    style={{rotate: rotation}}
                    src={ICON_ARROW_UP} alt='arrow' 
                    width={10}
                    height={6} />
            </div>
            <div className='dropdown-items' style={{display: display}}>
                {children}
            </div>
        </div>
    )
}

export default Dropdown