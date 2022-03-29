import { Link } from 'react-router-dom'
import './styles/Home.css'
import quizz from '../assets/quizz.jpeg'
import fusee from '../assets/fusee.png'
import cadeau from '../assets/cadeau.png'
import bourse from '../assets/bourse.png'
import fb from '../assets/fb.png'
// import { FaRocket } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='homecontainer'>
      <img className='perso' src={fb} width='50px' alt='' />
      <div className='title'>
        <p>Bonjour Olivia !</p>
      </div>
      <div className='jauge'></div>
      <div className='jauge2'></div>
      <div className='points'>4000 pts /6000 pts</div>
      <Link to='/quizz'>
        <img className='logoQuiz' src={quizz} width='200px' alt='' />
      </Link>
      <div className='obj'>
        <div className='objectifs'>
          <p>Objectifs :</p>
        </div>
        <div className='jauge4'></div>
        <div className='point1'>500 pts / 500 pts</div>
        <div className='stylo'>
          <img className='fusee' src={fusee} width='45px' alt='' />
          Un Stylo BP
        </div>

        <div className='jauge3'></div>
        <div className='point2'>1500 pts / 1500 pts</div>
        <div className='enceinte'>
          <div className='jauge5'></div> <div className='jauge6'></div>
          <img className='cadeau' src={bourse} width='45px' alt='' /> Chèque
          cadeau
        </div>
        <div className='jauge7'></div>
        <div className='jauge8'></div>
        <div className='point3'>2000 pts / 4000 pts</div>
        <div className='bourseGlobal'>
          <img className='bourse' src={cadeau} width='45px' alt='' />
          <div className='textBourse'>Une enceinte JBL</div>
        </div>
      </div>
    </div>
  )
}

export default Home
