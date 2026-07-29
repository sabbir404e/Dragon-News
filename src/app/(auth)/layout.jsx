import NavbarPage from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const AuthLayoutPage = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <NavbarPage></NavbarPage>
            {children}
        </div>
    );
};

export default AuthLayoutPage;