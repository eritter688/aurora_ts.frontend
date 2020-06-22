import React, {CSSProperties} from 'react';
import './App.css';

import NavPane from "./components/navpane/NavPane";

function App() {

    const divStyle: CSSProperties = {
        backgroundColor: '#FAFBFD',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: -1000,
    }

    return (
        <>
            <NavPane/>
            <div id={'content'} style={divStyle}/>
        </>
    );
}

export default App;
