import BreakignNews from '@/components/shared/BreakignNews';
import HeaderPage from '@/components/shared/Header';
import NavbarPage from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
            <HeaderPage></HeaderPage>
            <BreakignNews></BreakignNews>
            <NavbarPage></NavbarPage>
            {children}
        </>
    );
};

export default MainLayout;