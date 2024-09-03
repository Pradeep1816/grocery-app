import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { maincategory } from "../../../assets/productdata/maincategory";
function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="banner p-5 relative">
      <Slider {...settings}>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/main_strapi_web_fa797dee45/main_strapi_web_fa797dee45.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/static_web_Stop_Life_83bd58849b/static_web_Stop_Life_83bd58849b.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/static_web_Forever_New_AND_and_more_b62fcda2ba/static_web_Forever_New_AND_and_more_b62fcda2ba.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/static_web_Tommy_Hilfiger_Levis_and_more_8ef00cb60a/static_web_Tommy_Hilfiger_Levis_and_more_8ef00cb60a.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/static_web_Adidas_puma_and_more_fc269fe01d/static_web_Adidas_puma_and_more_fc269fe01d.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cmsimages.shoppersstop.com/static_web_YSL_Burberry_and_more_a8595e6940/static_web_YSL_Burberry_and_more_a8595e6940.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
