import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: "1",
        title: "Breakign News: Major Events Unfolds in the City",
    },
    {
        id: "2",
        title: "Breakign News: New Policy Announced by the Government",
    },
    {
        id: "3",
        title: "Breakign News: Sports Team Wins Championship",
    }
]

const BreakignNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto'>
            <button className='btn bg-red-500 text-white '>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {news.map( n => {
                    return <span key={n.id}>{n.title}</span>})}
            </Marquee>
        </div>
    );
};

export default BreakignNews;