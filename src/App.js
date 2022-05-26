import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Addcardetails from './pages/Addcardetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/addcardetails"  element={<Addcardetails/>  } ></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
