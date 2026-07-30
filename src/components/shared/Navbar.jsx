import Link from 'next/link';
import React from 'react';
import useAvater from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';

const NavbarPage = () => {
    return (
        <div className='flex justify-between container mx-auto gap-4 mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-3 text-gray-700 '>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about-us">About</NavLink></li>
                <li><NavLink href="/carrer">Carrer</NavLink></li>
            </ul>
            <div className='flex items-center gap-2'>
                <Image src={useAvater} alt="" widthuser avater={60} height={60} ></Image>
                <button className='btn btn-primary'><NavLink href="/login">Login</NavLink></button>
            </div>
        </div>
    );
};

export default NavbarPage;