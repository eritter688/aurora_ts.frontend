import React from 'react';
import './navpane.css';

import NavButton from './navbutton/NavButton';

/*
LOGO

MENU ITEMS


ACCOUNT SETTINGS



 */

export default function NavPane() {


    return (
        <div className={"nav-pane"}>
            <section className={"nav-pane-logo"}>
                <p>LOGO</p>
            </section>
            <section className={"nav-pane-buttons"}>
                <NavButton text={"Dashboard"}/>
                <NavButton text={"Students"}/>
                <NavButton text={"Families"}/>
            </section>
            <section className={"nav-pane-settings"}>
                <p>SETTINGS</p>
            </section>
        </div>
    );

}