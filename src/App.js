import React, { Fragment, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Footer } from "./components/common/footer/Footer";
import { Headers } from "./components/common/headers";
import { CategoryPageLayout } from "./features/categoryPage";
import { DetailPageLayout } from "./features/detailPage";
import { HomePageLayout } from "./features/homePage";
import { ViewOnlineProductLayout } from "./features/viewOnlineProduct";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, [navigate]);
  return (
    <Fragment>
      <Headers />
      <Routes>
        <Route path="/ProjectThuVien" element={<HomePageLayout />} />
        <Route path="/ProjectThuVien/detail-page/:id" element={<DetailPageLayout />} />
        <Route path="/ProjectThuVien/category-page" element={<CategoryPageLayout />} />
        <Route path="/ProjectThuVien/view-online/:id" element={<ViewOnlineProductLayout />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
