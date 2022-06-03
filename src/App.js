import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Profile from './components/Profile'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About'
import Footer from './components/Footer'
const appStyle = {
  textAlign: "center"
}
function App() {
  return (
    <div style={appStyle}>
      <BrowserRouter>
         <Header />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/portfolio" element={<Portfolio />} />
         </Routes>

         <Footer />
      </BrowserRouter>

    </div>
  );
}


export default App;
