import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="font-bold text-lg">All Categories</h2>

            <ul className="flex flex-col gap-3 mt-6">
                {
                    categories?.data?.news_category?.map(n => {

                        return <li key={n.category_id} className={`${activeId == n.category_id && "bg-purple-500 text-white"} p-2 rounded-md font-bold text-center text-md`}>
                            
                            <Link href={`/category/${n.category_id}`}  className='block p-2'>{n.category_name}</Link>
                            
                            </li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;