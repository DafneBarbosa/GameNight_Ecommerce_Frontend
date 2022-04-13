import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from './Pages/Home';
import Top10 from "./Components/Top10";
import Categories from "./Components/Categories";
import AboutYourGame from "./Pages/AboutYourGame";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Adm from "./Pages/Adm"; 
import Error404 from "./Pages/Error404";
import CartFinish from "./Pages/CartFinish";
import ChooseYourGame from "./Pages/ChooseYourGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Top10 />} />
          <Route path="/" element={<Categories />} />
          <Route path="/chooseyourgame" element={<ChooseYourGame/>} />
          <Route path="/aboutyourgame" element={<AboutYourGame/>} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/finish" element={<CartFinish />} />
          <Route path="/adm" element={<Adm />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
