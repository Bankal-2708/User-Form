import React, { useState } from 'react'
import InputBar from './Components/InputBar'
import AdminPanel from './Components/AdminPanel'
import { Route, Routes } from 'react-router-dom';

function App() {

   const [users, setUsers] = useState(() => {
          const savedUsers = localStorage.getItem("users");
          return savedUsers ? JSON.parse(savedUsers) : [];
      });
      

  return (
    <div>
      <Routes>
        <Route path='/' element={<InputBar users={users} setUsers={setUsers} />}/>
        <Route path='/ap' element={<AdminPanel users={users} setUsers={setUsers} />} />
      </Routes>
    </div>
  )
}

export default App