import './style.css'
import { Routes, Route } from "react-router-dom"

import Sidebar from './Component/SideBar/Sidebar';
import Home from './Component/Body/Home';
import About from './Component/Body/About';
import Portfolio from './Component/Body/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
    <div className="App">
       <Sidebar/>
       <Routes>
        {/* <Route path="/" exact element={<Home/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}

export default App;
