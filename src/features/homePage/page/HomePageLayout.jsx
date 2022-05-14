import { Image } from "antd";
import React, { Fragment } from "react";
import { CarouselLanding } from "../../../components/common/carouselLanding";
import { ProductsFrame } from "../../../components/common/productsFrame";

export function HomePageLayout() {
  return (
    <Fragment>
       <CarouselLanding />
      <div className="homepage-content Container">
        <ProductsFrame title="sách mới"/>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1651047493663-bc21171d7f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="background"
        width="100%"
        style={{ objectFit: "cover", height: "500px", marginTop: 40 }}
        preview={false}
      ></Image>
      <div className="Container">
        <ProductsFrame title="sách xem nhiều nhất"/>
      </div>
    </Fragment>
  );
}
