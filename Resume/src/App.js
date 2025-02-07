import Sid from './components/nav/nav.jsx';
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx';
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";
import Template from "./components/templates/templates.jsx";
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from "./components/loginpage/login.jsx"
import Services from "./components/services/services.jsx"




function App() {
  return (
    <BrowserRouter>
    <Sid></Sid>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/templates" element={<Template />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
    


    </Routes>
    <Footer></Footer> 
  </BrowserRouter>

  );
}

export default App;
