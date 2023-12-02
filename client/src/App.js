import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
function App() {
  return (
    <>
<Routes>
<Route path="/" element={<Homepage/>}/>
<Route path="/about"  element={<About/>}/>
<Route path="/contact"  element={<Contact/>}/>
<Route path="*"  element={<Pagenotfound/>}/>
<Route path="/register"  element={<Register/>}/>
</Routes>
     
    </> 
  );
}

export default App;
