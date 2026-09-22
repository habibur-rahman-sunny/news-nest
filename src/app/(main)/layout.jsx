import BreakingNews from '@/component/shared/BreakingNews';
import Header from '@/component/shared/Header';
import Navbar from '@/component/shared/Navbar/Navbar';
import React from 'react';

const mainLayout = ({ children }) => {
    return (
        <div>
            <main>
                <Header></Header>
                <BreakingNews></BreakingNews>
                <Navbar></Navbar>
                {children}
            </main>
        </div>
    );
};

export default mainLayout;