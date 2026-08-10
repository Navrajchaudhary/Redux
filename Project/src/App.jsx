import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <div className='w-full min-h-screen bg-linear-to-t from-slate-950 via-gray-900 to-slate-950 text-white '>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collections' element={<CollectionPage />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
