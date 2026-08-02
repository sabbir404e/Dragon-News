import LeftSidebar from "@/components/hompage/news/LeftSidebar";
import RightSidebar from "@/components/hompage/news/RightSidebar";
import { lightFormat } from "date-fns";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");

  const data = res.json();
  return data;
}


export default async function Home() {

  const categories = await getCategories();
  console.log(categories.data.news_category, "categories");

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">

       <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={"06"}></LeftSidebar>
       </div>

       <div className="font-bold text-3xl bg-purple-100 col-span-6">
        <h2 className="font-bold text-lg">All News</h2>
       </div>

       <div className="col-span-3">
        <h2 className="font-bold text-lg">Social icons</h2>
        <RightSidebar></RightSidebar>
       </div>

    </div>
  );
}
