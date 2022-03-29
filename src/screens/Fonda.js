import './styles/Fonda.css'
// import { GoTriangleRight } from 'react-icons/go'
import icone1 from '../assets/icone1.png'
import icone2 from '../assets/icone2.png'
import icone3 from '../assets/icone3.png'
import icone4 from '../assets/icone4.png'
import icone5 from '../assets/icone5.png'
import icone6 from '../assets/icone6.png'
import icone7 from '../assets/icone7.png'
import icone8 from '../assets/icone8.png'

const Fonda = () => {
  return (
    <div className='fondacontainer'>
      <h2 className='titlefond'>FONDAMENTAUX SANTE SECURITE</h2>
      <div className='infos'>
        <div className='columns'>
          <div className='registre'>
            <img className='icone' src={icone1} width='50px' alt=''></img>
            <div className='iconeContainer'>
              J’utilise les moyens de protection collective et je porte les EPI
              adaptés.
            </div>
          </div>
          <div className='registre'>
            <img className='icone' src={icone2} width='50px' alt=''></img>
            <div className='iconeContainer'>
              Je réfléchi avant d’agir, pour moi et pour les autres (Temps
              d’observation préalable TOP et point d’arrêt).
            </div>
          </div>
          <div className='registre'>
            <img className='icone' src={icone3} width='50px' alt=''></img>
            <div className='iconeContainer'>
              Je respecte les 5 opérations de la consignation; je réalise
              systématiquement la VAT et l’encadrement MALT/CC.
            </div>
          </div>
          <div className='registre'>
            <img className='icone' src={icone4} width='50px' alt=''></img>
            <div className='iconeContainer'>
              Je ne manipule pas mon téléphone au volant et j'adapte ma vitesse
              à mon environnement.
            </div>
          </div>

          <div className='registre'>
            <img className='icone' src={icone5} width='50px' alt=''></img>
            <div className='iconeContainer'>
              Je ne travaille pas sous l'emprise de l'alcool et de drogues.
            </div>
          </div>
          <div className='registre'>
            <img className='icone' src={icone6} width='50px' alt=''></img>
            <div className='iconeContainer'>
              Avant l'ascension d'un support, je verifie son intégrité.
            </div>
          </div>
          <div className='registre'>
            <img className='icone' src={icone7} width='50px' alt=''></img>
            <div className='iconeContainer'>
              Je suis attentif lors de mes déplacements.
            </div>
          </div>
          <div className='registre'>
            <img className='icone' src={icone8} width='50px' alt=''></img>
            <div className='iconeContainer'>
              Lors de toute manipulation mécanique, je ne passe jamais sous la
              charge et je maintiens une distance de sécurité lors de son
              guidage.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fonda
