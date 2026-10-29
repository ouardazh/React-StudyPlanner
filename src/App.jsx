import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Header />
       <Routes>
        <Route path='/about' element={<About/>} />

      </Routes>
    </div>

    
    
  );
}

export default App;
