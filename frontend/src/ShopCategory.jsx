import React from "react";
import { Monitor, Shirt, Home, Book, Target, Gem } from "lucide-react";
import { Link } from "react-router-dom"; 

const Category = () => {
  const categories = [
    { name: "Electronics", icon: Monitor },
    { name: "Apparel", icon: Shirt },
    { name: "Home Goods", icon: Home },
    { name: "Books", icon: Book },
    { name: "Sports", icon: Target },
    { name: "Jewelry", icon: Gem },
  ];
    

  return (
    <section className="flex flex-col mt-10">
      <div className="h-20 w-screen">
        <h2 className="text-3xl text-[#333333] font-semibold text-center mt-5">
          Shop by Category
        </h2>
      </div>

      <div className="h-auto flex justify-center flex-wrap gap-10 mt-5">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          const slug = cat.name.toLowerCase().replace(/\s+/g, "-");

          return (
            <Link
              key={index}
              to={`/api/${slug}`}
              className="bg-white h-20 w-40 border-2 border-[#E0E0E0] rounded-2xl flex flex-col items-center justify-center hover:shadow-md hover:scale-105 transition-transform duration-200"
            >
              <Icon size={28} className="text-[#007BFF]" />
              <h2 className="mt-1 text-sm">{cat.name}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Category;

  //  <Routes>
  //     <Route path="/" element={<Hero />}></Route>
  //     <Route path="/Category" element={<Category/>}></Route>
  //     <Route path = "Products" element={<Products/>}></Route>
      
    
    
 
  //    </Routes>
