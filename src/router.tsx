import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./ScrollToTop";
import HomePage from "./views/HomePage";
import BrandPage from "./views/BrandPage";
import ProductsPage from "./views/ProductsPage";
import AllProducts from "./views/AllProducts";
import ContactUs from "./views/ContactUs";
import LoginPage from "./views/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/Login-for-admin" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/Our-Products" element={<AllProducts />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/brands/:brandId" element={<BrandPage />} />
          <Route path="/Login-for-admin" element={<LoginPage />} />
          <Route
            path="/brands/:brandId/:categorySlug"
            element={<ProductsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
