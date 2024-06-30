import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import WelcomePage from './Components/WelcomePage'
import LogsIndex from './Components/LogsIndex'
import LogDetails from './Components/LogDetails'
import LogForm from './Components/LogForm';


function App() {
  return <div>Hello World
    <div>
    <NavBar />
    <Routes>
      <Route path='/' element={<WelcomePage />}></Route>

      <Route path='/logs' element={<LogsIndex />}></Route>
  
      <Route path='/logs/new' element={<LogForm />}></Route>

      <Route path='/logs/:id' element={<LogDetails />}></Route>
      
    </Routes>
    
    
   

    </div>
   
  </div>;
}

export default App;
