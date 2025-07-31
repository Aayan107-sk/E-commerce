import React from "react";
import { Monitor, Shirt,Home, Book, Target, Gem , } from "lucide-react"; 

const Category = () => {
  const categories = [
    { name: "Electronics", icon: <Monitor /> },
    { name: "Apparel", icon: <Shirt /> },
    {name:"Home Goods", icon:<Home/>},
    { name: "Books", icon: <Book /> },
    { name: "Sports", icon: <Target />},
     { name: "Jewelry", icon: <Gem /> },
    
  ];

  return (
    <>
      <section className="flex flex-col mt-10">
        <div className="h-20 w-screen">
          <h2 className="text-2xl font-semibold text-center mt-5 font-serif">
            Shop by Category
          </h2>
        </div>

        <div className="h-auto flex justify-center flex-wrap gap-10 mt-5">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white h-20 w-40 border-2 border-[#E0E0E0] rounded-2xl flex flex-col items-center justify-center"
            >
              <div className="text-[#007BFF] text-3xl font-bold">
                {cat.icon}
              </div>
              <h2 className="mt-1">{cat.name}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
