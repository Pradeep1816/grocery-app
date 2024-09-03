import React from "react";
import { NavLink, Link } from "react-router-dom";
function MainCategoryCard({ data }) {
  return (
    <NavLink to={`/cn/${data.name}/${data.id}`}>
      <div>
        <img src={data.image_url || "image"} alt="" />
      </div>
    </NavLink>
  );
}

export default MainCategoryCard;
