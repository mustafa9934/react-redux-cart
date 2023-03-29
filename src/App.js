import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:productId" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
