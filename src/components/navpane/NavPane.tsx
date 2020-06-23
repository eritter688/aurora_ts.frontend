import React from 'react';
import './navpane.css';

import {ReactComponent as DashboardIcon} from '../../assets/svg/dashboard.svg'
import {ReactComponent as StudentIcon} from '../../assets/svg/student.svg'

import {ReactComponent as SettingsIcon} from '../../assets/svg/settings.svg'

export default function NavPane() {

    const handleClick = () => {
        console.log('click');
    };

    return (
        <div className={'nav-pane'}>
            <section className={'nav-pane-logo'}>
                L
            </section>
            <section className={'nav-pane-navigation'}>
                <ul>
                    <li onClick={handleClick}>
                        <DashboardIcon className={'nav-pane-btn-icon'}/>
                        <a href={'#dash'} className={'nav-pane-btn-text'}>Dashboard</a>
                    </li>
                    <li onClick={handleClick}>
                        <StudentIcon className={'nav-pane-btn-icon'}/>
                        <a href={'#students'} className={'nav-pane-btn-text'}>Students</a>
                    </li>
                </ul>
            </section>
            <section className={'nav-pane-settings'}>
                <ul>
                    <li onClick={handleClick}>
                        <SettingsIcon className={'nav-pane-btn-icon'}/>
                        <a href={'#dash'} className={'nav-pane-btn-text'}>Settings</a>
                    </li>

                </ul>
            </section>
        </div>
    );

}