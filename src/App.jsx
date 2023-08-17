import "./App.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Lifestyle from "./Pages/Lifestyle";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <BrowserRouter>
<Navbar/>
        <Routes>
          <Route index  element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/lifestyle" element={<Lifestyle/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;

