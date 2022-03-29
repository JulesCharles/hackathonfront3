import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import './styles/Login.css'

const Login = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div
      className='buttonConnexionContainer'
      onClick={() => loginWithRedirect()}
    >
      <div className='connexion'>Se connecter </div>
    </div>
  )
}

export default Login
