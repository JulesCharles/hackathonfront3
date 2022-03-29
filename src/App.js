import { Routes, Route } from 'react-router-dom'
import Fonda from './screens/Fonda'
import Quizz1 from './screens/Quizz1'
import NavBar from './components/Navbar'
import Login from './screens/Login'
import Logout from './screens/Logout'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import { useState } from 'react'
import Modal from './components/Modal'
import Home from './screens/Home'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <div className='App'>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
      <NavBar />

      <Routes>
        <Route path='/fondamentaux' element={<Fonda />}></Route>
        <Route path='/quizz' element={<Quizz1 setModalOpen={open} />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
