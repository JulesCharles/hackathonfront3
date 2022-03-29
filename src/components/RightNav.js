import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import './styles/RightNav.css'
import compte from '../assets/compte.png'
import de from '../assets/de.png'
import feedback from '../assets/feedback.png'
import livre from '../assets/livre.png'
import home from '../assets/home.png'
import avatar from '../assets/avatar.png'
import enedis from '../assets/enedis.png'
import User from './User'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 845px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(90%)')};
    transition: transform 0.3s ease-in-out;
    bottom: -1%;
    left: 0%;
    height: 100%;
    width: 100%;
    border-radius: 24px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      color: var(--fontColor);
      font-size: 24px;
    }
  }
`

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <div className='navbarWrap'>
        <img className='logo' src={enedis} alt='logo' />
      </div>

      <div className='linkNavbar'>
        <NavLink to='/' onClick={() => setOpen(!open)}>
          <li className='navbarText'>
            <img className='NavbarImg' src={home} alt='maison' />
            <p>Home</p>
          </li>
        </NavLink>
        <NavLink to='/quizz' onClick={() => setOpen(!open)}>
          <li className='navbarText'>
            <img className='navbarImg' src={de} alt='de' />
            <p>Quizz</p>
          </li>
        </NavLink>
        <NavLink to='/fondamentaux' onClick={() => setOpen(!open)}>
          <li className='navbarText'>
            <img className='navbarImg' src={livre} alt='livre' />
            <p>Fondamentaux</p>
          </li>
        </NavLink>
      </div>
      <div className='avatarWrap'>
        <User />
      </div>
    </Ul>
  )
}
export default RightNav
