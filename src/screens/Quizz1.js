import React, { useState } from 'react'
import './styles/Quizz1.css'
import logo from '../assets/enedis.png'
// import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'

export default function Quizz1(props) {
  const questions = [
    {
      questionText:
        'Attention, dans le quiz suivant certaines images peuvent choquer !',
      images: 'https://cdn-icons-png.flaticon.com/512/2288/2288859.png',
      answerOptions: [
        { answerText: 'Retour', isCorrect: true },
        { answerText: 'Poursuivre', isCorrect: false },
      ],
    },
    {
      questionText:
        'Faut il toujours faire le TOP avant de commencer le chantier ?',
      images: 'https://zupimages.net/up/22/11/qgkj.png',
      answerOptions: [
        { answerText: 'Vrai', isCorrect: false },
        { answerText: 'Faux', isCorrect: true },
      ],
    },
    {
      questionText:
        'Le TOP permet de travailler dans un environnement sécurisé.',
      images:
        'https://i.postimg.cc/RZT6q0fy/depositphotos-38313399-stock-photo-handyman-fell-from-ladder.webp',
      answerOptions: [{ answerText: 'Next Question', isCorrect: false }],
    },
    {
      questionText: 'Sur chantier, le port du casque est il facultatif ?.',
      images: 'https://i.postimg.cc/XYGG1r3R/pexels-kindel-media-8488037.jpg',
      answerOptions: [
        { answerText: 'Vrai', isCorrect: true },
        { answerText: 'Faux', isCorrect: false },
      ],
    },
    {
      questionText:
        'Ce qui peut arriver en cas de non port du casque! Portez le systématiquement.',
      images: 'https://zupimages.net/up/22/11/ax66.jpg',
      answerOptions: [{ answerText: 'Next Question', isCorrect: false }],
    },
    {
      questionText: 'La VAT est la Vérification d’Alimentation de Tension. ',
      images: 'https://i.postimg.cc/T3cd9b42/hab6.gif',
      answerOptions: [
        { answerText: 'Vrai', isCorrect: true },
        { answerText: 'Faux', isCorrect: false },
      ],
    },
    {
      questionText:
        "Cela n'arrive pas qu'aux autres. Portez vos gants et pratiquez systématiquement la vérification d'absence de Tension",
      images: 'https://i.postimg.cc/52kH8R7S/t-l-chargement.jpg',
      answerOptions: [{ answerText: 'Next Question', isCorrect: false }],
    },
    {
      questionText:
        'Je conduis. Mon patron m’appelle 3 fois d’affilée car je suis en retard. Je prends mon téléphone et je le rappelle pour m’excuser de mon retard.',
      images: 'https://i.postimg.cc/Gpy1fsMs/pexels-tim-samuel-5835017.jpg',
      answerOptions: [
        { answerText: 'Vrai', isCorrect: true },
        { answerText: 'Faux', isCorrect: false },
      ],
    },
    {
      questionText:
        "Téléphone au volant, multiplie les risques d'accident ! Utilisez votre kit main-libre ou rapellez votre correspondant à l'arrêt total de votre véhicule ",
      images: 'https://i.postimg.cc/T1J8XB58/image.jpg',
      answerOptions: [{ answerText: 'Next Question', isCorrect: false }],
    },
    {
      questionText: 'Je peux boire 6 verres de vin durant ma pause déjeuner.',
      images: 'https://i.postimg.cc/PqPFVs53/wine-g25a82e5d5-1920.jpg',
      answerOptions: [
        { answerText: 'Vrai', isCorrect: true },
        { answerText: 'Faux', isCorrect: false },
      ],
    },
    {
      questionText:
        'Nous ne connaissons pas notre heure. Ne la provoquez pas et rester sobre sur votre lieu de travail afin de favoriser votre sécurité.',
      images: 'https://i.postimg.cc/jdhvYPvJ/funerals-hearse-580x392.jpg',
      answerOptions: [{ answerText: 'Next Question', isCorrect: false }],
    },
    {
      questionText:
        'Avant l’ascension d’un support, je vérifie systématiquement son intégrité.',
      images: 'https://i.postimg.cc/DZYGCHmg/crane-ge1b850a7c-1280.png',
      answerOptions: [
        { answerText: 'Vrai', isCorrect: true },
        { answerText: 'Faux', isCorrect: false },
      ],
    },
    {
      questionText:
        'Gardez vos membres et préservez votre corps ! Cela passe par la vérification de la sureté des supports avant leurs ascensions',
      images: 'https://i.postimg.cc/J75dMfzn/870x489-gettyimages-124205935.jpg',
      answerOptions: [{ answerText: 'Next Question', isCorrect: false }],
    },
    {
      questionText:
        'Il neige. J’ai une réunion mais je suis en retard. Je dois courir rapidement mais prudemment dans les escaliers afin d’arriver à l’heure.',
      images: 'https://i.postimg.cc/zfhTf8DR/snow-g070a153a8-1920.jpg',
      answerOptions: [
        { answerText: 'Vrai', isCorrect: true },
        { answerText: 'Faux', isCorrect: false },
      ],
    },
    {
      questionText:
        'Personne ne souhaite se retrouver à l’hôpital. Evitez l’accident et soyez vigilants lors de vos déplacements.',
      images:
        'https://i.postimg.cc/J44Mbw6D/xuploded-stock-image-51250205-m-2015-1505314770-jpg-pagespeed-ic-FUb187-VAB3.webp',
      answerOptions: [{ answerText: 'Next Question', isCorrect: false }],
    },
    {
      questionText:
        'Lors de toute manutention mécanique, je dois systématiquement rester loin de la charge et maintenir une distance de sécurité.',
      images: 'https://i.postimg.cc/52rNRzVw/hook-g20c5a3f08-1920.jpg',
      answerOptions: [
        { answerText: 'Vrai', isCorrect: true },
        { answerText: 'Faux', isCorrect: false },
      ],
    },
    {
      questionText:
        'Evitez la vie en fauteuil roulant en choisissant la prudence. Restez loin de la charge et maintenez une dustance de sécruité lors de chaque manutention mécanique',
      images: 'https://i.postimg.cc/C1qWg0h1/Tretraplegie-2.png',
      answerOptions: [{ answerText: 'Next Question', isCorrect: false }],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
      props.setModalOpen()
    }
  }
  return (
    <>
      {/* <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='140'
          image='./assets/photochoc3.jpg'
          alt='photo choque'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Les 5 opérations de consignation -VAT et MALT/CC
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card> */}
      <div className='globalQuizz'>
        <img src={logo} alt='' class='imgLogo' />
        <div className={`quizContainer ${showScore ? 'setSizeNull' : ''}`}>
          {showScore ? (
            <div className='score-section'>
              {/* You scored {score} out of {questions.length} */}
            </div>
          ) : (
            <>
              <div className='question-section'>
                {/* <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div> */}
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
                <div className='imageContainer'>
                  <img
                    className='changeImage'
                    src={questions[currentQuestion].images}
                    alt='choquante'
                  />
                </div>
              </div>
              <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      className='buttonQuiz'
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
