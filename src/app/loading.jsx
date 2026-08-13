import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-[86vh] items-center justify-center'>
            Global Loading
            <span className="loading loading-spinner text-success"></span>
        </div>
    );
};

export default LoadingPage;