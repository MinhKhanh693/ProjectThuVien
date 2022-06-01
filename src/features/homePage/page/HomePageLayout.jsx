import { Image } from "antd";
import { OverPack } from "rc-scroll-anim";
import React, { Fragment } from "react";
import { CarouselLanding } from "../../../components/common/carouselLanding";
import { ProductsFrame } from "../../../components/common/productsFrame";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";

export function HomePageLayout() {
  return (
    <Fragment>
      <CarouselLanding />
      <div className="homepage-content Container">
        <ProductsFrame title="sách mới" />
      </div>
      <OverPack hideProps={{ tweenOne: { reverse: true } }} >
        <TweenOne
          key="0"
          animation={{
            opacity: 1,
            translateY: -50,
          }}
          style={{ opacity: 0 }}
        >
          <QueueAnim key="queue" leaveReverse style={{ marginTop: 50 }}>
            <Image
              src="https://images.unsplash.com/photo-1651047493663-bc21171d7f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="background"
              width="100%"
              style={{ objectFit: "cover", height: "500px", marginTop: 40 }}
              preview={false}
            ></Image>
          </QueueAnim>
        </TweenOne>
        <div className="Container">
          <ProductsFrame title="sách xem nhiều nhất" />
        </div>
      </OverPack>
    </Fragment>
  );
}
