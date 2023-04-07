import React, { useEffect, useState } from 'react'
import './DropdownMenu.css'

import ICON_ARROW_DOWN from '../../assets/icon-arrow-down.svg'
import ICON_ARROW_UP from '../../assets/icon-arrow-up.svg'

function DropdownMenu({title, icon, children}) {

    const [display, setDisplay] = useState('none')
    const [rotation, setRotation] = useState('0')
    const [maxIconWidth, setMaxIconWidth] = useState(0)

    /**
     * Get the max width of an icon and apply it to div icon
     * The aim is to center icon according to icon width to avoid offset
     */
    React.Children.toArray(children).forEach((item) => {
        if (item.props.icon !== undefined) {
            const iconWidth = item.props.icon.props.width
            if (maxIconWidth < iconWidth) {
                setMaxIconWidth(iconWidth)
            }
        }
    })

    useEffect(() => {
        if (maxIconWidth !== 0) {
            const itemIconWidthElement = document.querySelectorAll('.element-icon')
            itemIconWidthElement.forEach((icon) => {
                icon.style.width = `${maxIconWidth}px`
            })
        }
    }, [maxIconWidth])
    /* */

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
        <li className='dropdown-menu'>
            <button type='button' onClick={() => toogleDisplay()}>
                {title}
                {icon === undefined ?
                    <img 
                        style={{rotate: rotation}}
                        src={ICON_ARROW_DOWN} alt='arrow' 
                        width={10}
                        height={6} 
                    />
                    :
                    icon
                }
            </button>

            <ul style={{display: display}}>
                {children}
            </ul>
        </li>
        // <div className='dropdown-menu'>
        //     <div className='dropdown-title-container' onClick={() => toogleDisplay()}>
        //         <p>{title}</p>
        //         <img 
        //             style={{rotate: rotation}}
        //             src={ICON_ARROW_UP} alt='arrow' 
        //             width={10}
        //             height={6} />
        //     </div>
        //     <div className='dropdown-items' style={{display: display}}>
        //         {children}
        //     </div>
        // </div>
    )
}

export default DropdownMenu