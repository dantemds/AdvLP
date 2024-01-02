import React from 'react'
import HomeImage from '../HomeImage/Home-image'

import { RiMapPin2Fill, RiWhatsappFill, RiInstagramFill } from 'react-icons/ri'
import { BsFillTelephoneFill } from 'react-icons/bs'

import './style.sass'


export default function Footer() {
    return (
        <footer>
            <div className="content">
                <div className="row">
                    <div className="wrap-content-footer">
                        <HomeImage />
                    </div>
                    <div className="wrap-content-footer">
                        <h3>Localização</h3>
                        <a href="https://goo.gl/maps/pMvD64B3QS7eK6xM9" target={'_blank'}> <RiMapPin2Fill/> Rua Jurubatuba, 1350, sala 306, centro,<br/> São Bernardo do Campo-SP, cep: 09725-000</a>
                    </div>
                    <div className="wrap-content-footer">
                        <h3>Contato</h3>
                        <a target={'_blank'} href="https://api.whatsapp.com/send?phone=5511913732405&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20advogado."><RiWhatsappFill/> (11) 91373-2405</a>
                        <a target={'_blank'} href="tel:(11) 91373-2405"><BsFillTelephoneFill/> (11) 91373-2405</a>
                        <a target={'_blank'} href="https://www.instagram.com/adv_sarmentocostabatista/"><RiInstagramFill/> Instagram</a>
                    </div>
                </div>
                <div className="row">
                    <p>Sarmento Advogados &copy; 2022 - Todos os direitos reservados</p>
                    <p>OAB/SP 464.397 Dra Aline</p>
                    <p>Desenvolvido em parceiria com Leads Media Jurídica e Vinicius N. Bringel</p>
                </div>
            </div>
        </footer>
    )
}