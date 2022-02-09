import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// components
import Layout from './components/Layout';
import Home from './pages/Home';
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import Store from "./pages/Store";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/page-one" element={ <PageOne /> } />
            <Route path="/page-two" element={ <PageTwo /> } />
            <Route path="/page-three" element={ <PageThree /> } />
            <Route path="/store" element={ <Store /> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
