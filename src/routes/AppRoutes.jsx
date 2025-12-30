import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Industries from "../pages/Industries";
import Infrastructure from "../pages/Infrastructure";
import AboutContact from "../pages/AboutContact";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/about" element={<AboutContact />} />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
