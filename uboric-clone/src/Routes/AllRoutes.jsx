import { Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Homepage from "./Homepage";
import OrderPlaced from "./OrderPlaced";
import Product from "./Product";
import WishList from "./WishList";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<h1>About Us</h1>} />
      <Route path="/shop" element={<Product />} />
      <Route path="/categories" element={<h1>Category</h1>} />
      <Route path="/contact-us" element={<h1>Contact Us</h1>} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/placeorder" element={<OrderPlaced />} />
    </Routes>
  );
}
