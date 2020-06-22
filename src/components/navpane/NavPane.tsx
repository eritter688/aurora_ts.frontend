import React from 'react';
import './navpane.css';

import NavButton from './navbutton/NavButton';

/*
LOGO

MENU ITEMS


ACCOUNT SETTINGS



 */

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
                {/*<NavButton text={"Families"} onClick={tempClick}/>*/}
            </section>
            <section className={"nav-pane-settings"}>
                <p>S</p>
            </section>
        </div>
    );

}