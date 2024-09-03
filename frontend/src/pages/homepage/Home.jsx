import React from "react";
import Banner from "../../components/home/homebanner/Banner";
import PageWrapper from "../../components/wrapper/PageWrapper";
import MainCategoryContainer from "../../components/home/MainCategoryContainer";
import Services from "../../components/services/Services";
import ProductCarousel from "../../components/home/ProductCarousel";
function Home() {
  return (
    <PageWrapper>
      <Banner />
      <MainCategoryContainer />
      <ProductCarousel />
      <Services />
    </PageWrapper>
  );
}

export default Home;
