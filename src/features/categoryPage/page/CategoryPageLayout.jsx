import React from "react";
import { CarouselLanding } from "../../../components/common/carouselLanding";
import { ProductsFrame } from "../../../components/common/productsFrame";

export function CategoryPageLayout() {
  return (
    <div className="CategoryPage Container">
        <CarouselLanding />
      <ProductsFrame title="SÁCH THAM KHẢO" isCategoryPage={true} />
    </div>
  );
}
