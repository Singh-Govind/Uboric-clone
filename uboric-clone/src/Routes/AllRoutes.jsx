import {Route, Routes} from "react-router-dom";

export default function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about-us" element={<h1>About Us</h1>} />
            <Route path="/shop" element={<h1>Shop</h1>} />
            <Route path="/categories" element={<h1>Category</h1>} />
            <Route path="/contact-us" element={<h1>Contact Us</h1>} />
        </Routes>
    )

}