import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div className='flexflex-col gap-2 mt-4'>
            <button className='flex btn  border-blue-500 text-blue-500'><FaGoogle />Login with Google</button>
            <button className='flex btn'><FaGithub />Login with Github</button>
        </div>
    );
};

export default RightSidebar;