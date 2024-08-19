// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import ProductCard from './components/ProductCard';

// function App() {
//   return (
//     <div className="App">
//       <h1>hello sir</h1>
//       <Navbar/>
//       <ProductCard/>
//     </div>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
// import CartPage from "./components/CartPage";
import Cartpages from "./components/Cartpages";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route exact path="/cart" element={<Cartpages />} />
          {/* <Route path="/cart" element={<CartPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;