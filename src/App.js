import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import LifeAdvice from './components/LifeAdvice';
function App() {
  return (
    <div className="App">
      <div className="nav-bar">
      <Link to='/' >Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/life-advice'>Life Advice</Link>
      
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/life-advice' element={<LifeAdvice />}/>
      </Routes>
    </div>
  );
}

export default App;
