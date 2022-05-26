import React, { Fragment } from "react";
import { CarouselLanding } from "../../../components/common/carouselLanding";
import { ProductsFrame } from "../../../components/common/productsFrame";

export function CategoryPageLayout() {
  return (
    <Fragment>
      <CarouselLanding />
      <div className="CategoryPage Container">
        <ProductsFrame title="SÁCH THAM KHẢO" isCategoryPage={true} />
      </div>
    </Fragment>
  );
}
