import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/home.jsx';
import Navbar from './components/navbar/navbar.jsx';
import Schedule from './components/Schedule/schedule.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer.jsx'
import Leaderboard from './components/Leaderboard/leaderboard.jsx';
import Coaches from './components/coaches/coaches.jsx';
import Contact from './components/Contact/contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/coaches' element={<Coaches />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
