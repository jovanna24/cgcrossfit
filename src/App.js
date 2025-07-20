import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Schedule from './components/Schedule/schedule.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer.jsx'
import Dropin from './components/dropin/dropin.jsx';
import Coaches from './components/coaches/coaches.jsx';
import Contact from './components/Contact/contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/drop-in' element={<Dropin />} />
        <Route path='/coaches' element={<Coaches />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
