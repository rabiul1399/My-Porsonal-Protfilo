import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MainBody from './components/HeadBody/HeadBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/MyProjects/Projects';

function App() {
  return (
     <div className=''>
     
         <Routes>
           <Route path='' element={<MainBody></MainBody>}></Route>
           <Route path='/home' element={<MainBody></MainBody>}></Route>
          <Route  path='/project' element={<Projects></Projects>} />
         </Routes>
 
     </div>
  );
}

export default App;
