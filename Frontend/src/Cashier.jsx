import React, { useState } from 'react';
import MainMenu from './MainMenu';

function Cashier() {

    const [currentPage, setCurrentPage] = useState('');

    const handleClick = () => {
        setCurrentPage('main');
    };

    if (currentPage === 'main') {
        return <MainMenu />;
    }

    return (
        <>
            <div>Cashier</div>
        </>
    );
}

export default Cashier;