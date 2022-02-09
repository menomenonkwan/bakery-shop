import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// components
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/our-menu" element={ <Menu /> } />
            <Route path="/our-story" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/store" element={ <Store /> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
