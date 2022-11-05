/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App () {
  return (
    <div className='App'>
      <div className='SidebarDiv'>
        <Sidebar />
      </div>
      <div>
        home
      </div>
    </div>
  )
}

export default App
