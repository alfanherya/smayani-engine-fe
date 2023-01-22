import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Header from './components/common/header/Header';
import Home from './components/home/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exect path='/about' component={About} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
