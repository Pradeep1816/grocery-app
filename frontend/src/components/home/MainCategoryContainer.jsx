import React from "react";
import { maincategory } from "../../assets/productdata/maincategory";
import MainCategoryCard from "./homeUI/MainCategoryCard";
function MainCategoryContainer() {
  return (
    <div>
      <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10">
        {maincategory.map((data) => {
          return <MainCategoryCard data={data} />;
        })}
      </div>
    </div>
  );
}

export default MainCategoryContainer;
