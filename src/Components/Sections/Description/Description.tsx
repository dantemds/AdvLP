import React from 'react'

import './style.sass'

export default function Description() {
    return (
        <section id='description'>
            <div className='mascara'></div>
            <div className="content">
                <h2>Quem somos</h2>
                <p>
                    O escritório <span>Sarmento Advogados</span> tem mais de 04 anos de experiência jurídica, composto por uma banca de <span>advogados especialistas</span>, sempre garantindo aos nossos clientes segurança e a <span>melhor solução para os seus problemas.</span> E além de sermos um escritório especialista e experiente, temos como principal diferencial a proposta de solução jurídica eficiente.
                </p>
                <button><a href='https://api.whatsapp.com/send?phone=5511913732405&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20advogado.'>Conversar com <br />advogado</a></button>
            </div>
        </section>
    )
}
