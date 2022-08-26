import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import WishList from "./WishList";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<h1>About Us</h1>} />
      <Route path="/shop" element={<h1>Shop</h1>} />
      <Route path="/categories" element={<h1>Category</h1>} />
      <Route path="/contact-us" element={<h1>Contact Us</h1>} />
      <Route path="/wishlist" element={<WishList />} />
    </Routes>
  );
}
