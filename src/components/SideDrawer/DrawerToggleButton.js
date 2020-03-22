import React from 'react'
import "./DrawerToggleButton.css"
export default function DrawerToggleButton(props) {
    return (
        <div>
            <button className="toggle-button" onClick={props.click}>
                <div className="toggle-button-line" />
                <div className="toggle-button-line" />
                <div className="toggle-button-line" />
            </button>
        </div>
    )
}
