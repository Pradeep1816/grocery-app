import React from "react";
import { maincategory } from "../../assets/productdata/maincategory";
import Product from "../productcard/Product";
function ProductCarousel() {
  return (
    <div className="">
      {maincategory.map((category) => (
        <div key={category.id} className="mb-6 md:mb-10">
          <div className="flex justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-3xl gap-2 lg:text-2xl font-bold mb-2 md:mb-4">
              {category.name}
            </h2>
            <span className="text-pink-500 text-sm md:text-base cursor-pointer">
              See All
            </span>
          </div>
          <div className="flex gap-2 md:gap-3 overflow-x-scroll no-scrollbar">
            {category.categories.map((cat) => {
              return cat.subcategories.map((subCat) => (
                <div
                  key={subCat.id}
                  className="w-[45%] md:w-[19%] lg:w-[19%] xl:w-[16%] p-[0.2rem] flex-none relative text-center rounded-md"
                >
                  <Product key={subCat.id} product={subCat} />
                </div>
              ));
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCarousel;
