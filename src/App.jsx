import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import HeaderBar from './components/HeaderBar/HeaderBar'
import Dashboard from './components/Dashboard/Dashboard'
function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* <h1 className='text-5xl text-red-700'>Abox Dashboard</h1> */}
       <Sidebar/>
       <HeaderBar/>
       <Dashboard/>
    </>
  )
}

export default App
