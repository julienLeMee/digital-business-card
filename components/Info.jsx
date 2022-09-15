import react from 'react'

export default function Info() {
  return (
    <div id='info' className="info">
      <h1 className='name'>Julien Le Mée</h1>
      <h2 className='function'>Développeur web Full-Stack</h2>
      <h4 className="portfolio"><a href="http://www.julienlemee.com">Portfolio</a></h4>
      <button className='button-mail'><i class="fa-regular fa-envelope"></i>E-mail</button>
      <button className='button-linkedin'><i class="fab fa-linkedin"></i>Linkedin</button>
    </div>
  )
}
