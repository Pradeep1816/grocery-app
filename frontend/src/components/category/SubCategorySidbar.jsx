import React from "react";
import SubCategory from "./UI/SubCategory";
import { maincategory } from "../../assets/productdata/maincategory";
import { useParams } from "react-router-dom";
function SubCategorySidbar() {
  const { id } = useParams();
  console.log(id);
  const { categories } = maincategory.find((cat) => cat.id === parseInt(id));
  console.log(categories);
  return (
    <div className="no-scrollbar h-[calc(100vh-8rem)] shrink-0  overflow-y-scroll  w-24 md:w-40 lg:w-60 flex flex-col">
      {categories.map((item) => {
        return (
          <SubCategory
            key={item.id}
            name={item.name}
            image={item.image_full_url}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

export default SubCategorySidbar;
