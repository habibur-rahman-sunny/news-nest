import Header from '@/component/shared/Header';
import Navbar from '@/component/shared/Navbar/Navbar';
import React from 'react';

const mainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
        </div>
    );
};

export default mainLayout;