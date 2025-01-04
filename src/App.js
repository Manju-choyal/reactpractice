
import './App.css';

import {  BrowserRouter, Route, Routes } from 'react-router-dom';

import Body from './Components/Body'
import Showtask from './Components/Showtask'
import Addtask from './Components/Addtask'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Container from './Components/Container';
import Edit from './Components/Edit';
function App() {

  return (
    <div className="App">
     
<BrowserRouter>
<Routes>
               <Route path='/body' element={<Body/>}></Route>
               <Route path='/dashboard'element={<Showtask></Showtask>}></Route>
               <Route path='/add'element={<Addtask></Addtask>}></Route>
               <Route path='/signup'element={<Signup></Signup>}></Route>
               <Route path='/'element={<Login></Login>}></Route>
               <Route path='/container'element={<Container></Container>}></Route>
               <Route path='/edit'element={<Edit></Edit>}></Route>
               
            
           </Routes>
           
           </BrowserRouter>
    </div>
  );
}

export default App;
