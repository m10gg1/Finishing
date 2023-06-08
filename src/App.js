
import './App.css';
import Home from './pages/Home';
import Swich from "./pages/swish"
// import SignUp from  "./pages/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

     <Routes>
      <Route path="/" element={<Home/>}></Route>
         <Route path="/Swich" element={<Swich/>}> </Route>
      <Route path="/signup" element={<SignUp/>}></Route>
     </Routes>
      
    </div>
  );
}

export default App;
