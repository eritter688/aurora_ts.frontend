import React from 'react';
import './navbutton.css';

import {ReactComponent as DashboardLogo} from '../../../assets/svg/dashboard.svg';
import {ReactComponent as StudentLogo} from '../../../assets/svg/student.svg';

type NavButtonProps = {
    text: string,
    onClick: () => void,
}

export default function NavButton({text, onClick}: NavButtonProps) {

    const selectIcon = () => {
        switch (text) {
            case 'Dashboard': {
                return <DashboardLogo className={'nav-button-icon'}/>;
            }
            case 'Students': {
                return <StudentLogo className={'nav-button-icon'}/>;
            }
            default: {
                return <div/>;
            }
        }
    };

    return (
        <button className={'nav-button'} onClick={onClick}>
            <div className={'nav-button-content'}>
                {selectIcon()}
                <p className={'nav-button-text'}>{text}</p>
            </div>
        </button>
    );

}

