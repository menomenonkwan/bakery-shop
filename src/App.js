import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// components
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Story from "./pages/Story";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="bakery-shop/" element={ <Home /> } />
            <Route path="/our-menu" element={ <Menu /> } />
            <Route path="/our-story" element={ <Story /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
