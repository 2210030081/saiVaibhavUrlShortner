import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import './index.css';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import Profile from './Pages/profile';
 // 👈 import Profile

function App() {
  return (
    <Router>
      <HeaderMegaMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={< Profile/>} />  {/* 👈 Add Profile route */}
      </Routes>
    </Router>
  )
}

export default App
