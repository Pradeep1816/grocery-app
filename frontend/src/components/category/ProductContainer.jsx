import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../productcard/Product";
import { maincategory } from "../../assets/productdata/maincategory";
function ProductContainer() {
  const { subID } = useParams();
  // const subCategory = maincategory.find((cat) => cat.id === parseInt(subID));

  return maincategory[0].categories.length > 0 ? (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 bg-gray-100 p-1">
      {maincategory[0].categories.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <div className="text-center text-xs mt-10 text-gray-500">
      No Results Found
    </div>
  );
}

export default ProductContainer;
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCoUtOal33JWLqals1Wq7p6GGCnr3o-lwpQ&s
{
  /* <Product key={data.id} data={data} /> */
}
