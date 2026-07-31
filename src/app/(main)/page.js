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
        <h2 className="font-bold text-lg">All Categories</h2>   
        
          <ul className="flex flex-col gap-3 mt-6">
          {
            categories.data.news_category.map(n => {

              return <li key={n.category_id} className="bg-slate-100 p-2 rounded-md font-bold text-center text-md">{n.category_name}</li>
            })
          }
          </ul>
       </div>

       <div className="font-bold text-3xl bg-purple-100 col-span-6">
        <h2 className="font-bold text-lg">All News</h2>
       </div>

       <div className="font-bold text-3xl bg-yellow-100 col-span-3">
        <h2 className="font-bold text-lg">Social icons</h2>
       </div>

    </div>
  );
}
