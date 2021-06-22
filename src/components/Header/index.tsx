import { useState } from 'react';
import { FiX, FiAlignJustify } from 'react-icons/fi';

import {Container} from './styles';

export function Header() {
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);

  const handleMenuMobile = () => {
    setIsActiveMenuMobile(!isActiveMenuMobile);
  }
  return (
    <Container>
      <div className="show-desktop">
        <div className="show-desktop__content-blue">
          <h2>Ameta serviços - empresa especializada em consultoria  de telecomunicações</h2>
        </div>

        <div className="show-desktop__content-logo">
          <div className="content">
            <div className="contact">
              <span>
              Whatsapp: <strong>11 99458-4945</strong><br />
              E-mail: <strong>contato@ametaservicos.com.br</strong>
              </span>
            </div>

            <img src="images/logo.png" alt="Ameta Serviços"/>

            <p>Olá, seja bem-vindo! </p>
          </div>
        </div>

        <nav className="show-desktop__nav">
          <div className="nav-content">
            <ul>
              <li><a href="">Inicio</a></li>
              <li><a href="">Quem Somos</a></li>
              <li><a href="">Serviços</a></li>
              <li><a href="">Portfólio</a></li>
              <li><a href="">Contato</a></li>
            </ul>
            <a 
              href="" 
              className="btn--primary"
            >
              Iniciar Conversa
            </a>
          </div>

        </nav>
      </div>


      <div className="show-mobile">
        <div className="show-mobile__content">
          <FiAlignJustify 
            size={40}
            onClick={handleMenuMobile}
          />

          <img src="images/logo.png" alt="Ameta Serviços"/>
        </div>

        <div className={`
          show-mobile__modal
          ${isActiveMenuMobile && 'show-mobile__modal--active'}  
        `}>
          <FiX 
            size={40}
            onClick={handleMenuMobile}
          />

          <div className="modal-content">
            <img src="images/logo.png" alt="Ameta Serviços"/>

            <nav className="nav-menu-mobile">
              <a href="">Inicio</a>
              <a href="">Quem Somos</a>
              <a href="">Serviços</a>
              <a href="">Portfólio</a>
              <a href="">Contato</a>
            </nav>
          </div>
        </div>
      </div>
    </Container>
  );
}