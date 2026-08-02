import LeftSidebar from "@/components/hompage/news/LeftSidebar";
import RightSidebar from "@/components/hompage/news/RightSidebar";
import React from "react";


async function getCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");

    const data = await res.json();
    return data;
}

async function getNewsByCategoryId(category_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const data = await res.json();
    return data;
}


const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "id");

    const categories = await getCategories();
    console.log(categories.data.news_category, "categories");

    const news = await getNewsByCategoryId(id);
    console.log(news, "News");


    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">

            <div className="col-span-3">
                <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
            </div>

            <div className="col-span-6">
                <h2 className="font-bold text-lg">All News</h2>
                {
                     news.data.map(nn => {
                        return <div key={nn._id} className="border p-6 rounded-md my-4">
                            {nn.title}
                        </div>
                    })
                }
            </div>

            <div className="col-span-3">
                <h2 className="font-bold text-lg">Social icons</h2>
                <RightSidebar></RightSidebar>
            </div>

        </div>
    );
};

export default NewsCategoryPage;