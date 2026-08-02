import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div className='flex flex-col gap-2 mt-4'>
            <button className='flex btn border-blue-500 text-blue-500 items-center justify-center gap-2'><FaGoogle />Login with Google</button>
            <button className='flex btn items-center justify-center gap-2'><FaGithub />Login with Github</button>
        </div>
    );
};

export default RightSidebar;