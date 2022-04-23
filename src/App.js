import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MainBody from './components/HeadBody/HeadBody';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
     <div className=''>
     
         <Routes>
           <Route path='' element={<MainBody></MainBody>}></Route>
           <Route path='/home' element={<MainBody></MainBody>}></Route>
          
         </Routes>
 
     </div>
  );
}

export default App;
