import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import trophy from '../assets/trophy.png'
import { Link } from 'react-router-dom'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}
const Modal = ({ handleClose, text }) => {
  return (
    // <Backdrop onClick={handleClose}>
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='modaleOrange'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='rstWrap'>
          <h1 className='rstQuizz'>BRAVO !</h1>
          <p className='modalParagraphe'>
            Vous avez gagné 30 points d'expérience !
          </p>
          {console.log(trophy)}
          <img
            className='trophy'
            src={trophy}
            alt='trophé'
            // onClick={handleClose}
          />
          <Link to='/'>
            <button className='buttonModal' onClick={handleClose}>
              Mon profil
            </button>
          </Link>
        </div>
      </motion.div>
    </Backdrop>
  )
}
export default Modal
