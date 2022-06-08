import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
function App() {
  return (
    <div className="App">
      <Link to='/' >Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/user'>User</Link>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/user' element={<User />}/>
      </Routes>
    </div>
  );
}

export default App;
