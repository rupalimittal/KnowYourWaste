import Navbar from './Navbar';
import Header from './Header';
import WasteDetail from './WasteDetail';
import WasteQuote from './WasteQuote';
import React from 'react';

function mainPage(props) {
    return (
        <div>
            <Navbar {...props} />
            <Header {...props} />
            <WasteDetail {...props} />
            <WasteQuote {...props} />
        </div>
    );
}

export default mainPage;
