import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Link to='/' >Home</Link>
      <Link to='/about'>About</Link>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
