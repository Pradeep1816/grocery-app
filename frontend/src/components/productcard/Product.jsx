import React from "react";
import AddProductButton from "./AddProductButton";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();
  const onClickHandleProduct = () => {
    navigate(`/pd/${product.id}`);
  };
  console.log(product);

  return (
    <div
      className="shrink-0 relative bg-white text-xs  shadow p-2  h-64 flex rounded-md  flex-col gap-3 border "
      onClick={onClickHandleProduct}
    >
      <div className="flex justify-center">
        <figure>
          <img
            src="image"
            alt=""
            className="h-24 w-24 object-cover object-center"
          />
        </figure>
      </div>

      <p className="">{product.name}</p>
      <div className="flex justify-between">
        <p>price</p>
        <p>null</p>
      </div>
      <div>
        <AddProductButton />
      </div>
    </div>
  );
}

export default Product;
