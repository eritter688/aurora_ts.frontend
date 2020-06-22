import React from 'react';
import './navpane.css';

import NavButton from './navbutton/NavButton';

export default function NavPane() {

    const tempClick = () => {
        console.log('button clicked');
    };


    return (
        <div className={"nav-pane"}>
            <section className={"nav-pane-logo"}>
                <p>L</p>
            </section>
            <section className={"nav-pane-buttons"}>
                <NavButton text={"Dashboard"} onClick={tempClick}/>
                <NavButton text={"Students"} onClick={tempClick}/>
            </section>
            <section className={"nav-pane-settings"}>
                <NavButton text={"Settings"} onClick={tempClick}/>
            </section>
        </div>
    );

}