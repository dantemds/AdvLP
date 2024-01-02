import React from 'react'

import { BsCheckLg } from 'react-icons/bs'

import img from '../../../Assets/Images/topic-image.jpg'

import './style.sass'

export default function About() {
    return (
        <section id='about'>
            <div className="content">
                <h2>A <span>melhor solução</span> para os seus <span>problemas</span> jurídicos</h2>
                <p>
                    O sucesso do nosso escritório advém de estar em compromisso com os clientes. Junto com uma equipe determinada e dedicada, oferecemos aos nossos clientes a melhor solução jurídica de acordo com o seu problema.
                </p>
            </div>
        </section>
    )
}
