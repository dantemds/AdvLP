import React from 'react'

import img1 from '../../../Assets/Images/topic-image-1.jpg'
import img2 from '../../../Assets/Images/topic-image-2.jpg'

import { BsCheckLg } from 'react-icons/bs'

import './style.sass'

export default function Text() {
    return (
        <section id='text'>
            <div className='content'>
                <div className='card'>
                    <div className='wrap-ul'>
                        <ul>
                            <li><BsCheckLg />Audiências.</li>
                            <li><BsCheckLg />Habeas corpus.</li>
                            <li><BsCheckLg />Defesa criminal.</li>
                            <li><BsCheckLg />Flagrante Criminal.</li>
                            <li><BsCheckLg />Pedidos de Liberdade.</li>
                        </ul>
                        <button><a href='https://api.whatsapp.com/send?phone=5511913732405&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20advogado.'>Conversar com <br />advogado</a></button>
                    </div>
                    <img src={img1} alt="Imagem" />
                </div>
                <div className='card'>
                    <div className='wrap-ul'>
                        <ul>
                            <li><BsCheckLg />Execução Penal.</li>
                            <li><BsCheckLg />Tribunal do JÚRI.</li>
                            <li><BsCheckLg />Audiência de Custódia.</li>
                            <li><BsCheckLg />Acompanhamento em delegacia.</li>

                        </ul>
                        <button><a href='https://api.whatsapp.com/send?phone=5511913732405&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20advogado.'>Conversar com <br />advogado</a></button>
                    </div>
                    <img src={img2} alt="Imagem" />
                </div>
            </div>
        </section>
    )
}
