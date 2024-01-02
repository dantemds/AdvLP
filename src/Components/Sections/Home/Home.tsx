import React from 'react'

import HomeImage from '../../HomeImage/Home-image'

import './style.sass'

export default function Home() {

  return (
    <section id='home'>
      <div className='mascara'></div>
      <div className='content'>
        <div>
          <h1>Advocacia Criminal <br />Especializada</h1>
          <p>Não perca os seus direitos, sua liberdade requer soluções jurídicas eficientes.</p>
          <button><a href='https://api.whatsapp.com/send?phone=5511913732405&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20advogado.'>Conversar com <br />advogado</a></button>
        </div>
        <div>
          <HomeImage />
        </div>
      </div>
    </section>
  )
}
