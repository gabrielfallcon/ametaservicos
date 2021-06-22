import { useState } from 'react';
import { FiX, FiAlignJustify } from 'react-icons/fi';

import {Container} from './styles';
import styles from './header.module.scss';

export function Header() {
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);

  const handleMenuMobile = () => {
    setIsActiveMenuMobile(!isActiveMenuMobile);
  }
  return (
    <header className={styles.container}>
      <div className={styles.showDesktop}>
        <div className={styles.showDesktopContentBlue}>
          <h2>Ameta serviços - empresa especializada em consultoria  de telecomunicações</h2>
        </div>

        <div className={styles.showDesktopContentLogo}>
          <div className={styles.content}>
            <div className={styles.contact}>
              <span>
              Whatsapp: <strong>11 99458-4945</strong><br />
              E-mail: <strong>contato@ametaservicos.com.br</strong>
              </span>
            </div>

            <img src="images/logo.png" alt="Ameta Serviços"/>

            <p>Olá, seja bem-vindo! </p>
          </div>
        </div>

        <nav className={styles.showDesktopNav}>
          <div className={styles.navContent}>
            <ul>
              <li><a href="">Inicio</a></li>
              <li><a href="">Quem Somos</a></li>
              <li><a href="">Serviços</a></li>
              <li><a href="">Portfólio</a></li>
              <li><a href="">Contato</a></li>
            </ul>
            <a 
              href="" 
              className={styles.btnPrimary}
            >
              Iniciar Conversa
            </a>
          </div>

        </nav>
      </div>


      <div className={styles.showMobile}>
        <div className={styles.showMobileContent}>
          <FiAlignJustify 
            size={40}
            onClick={handleMenuMobile}
          />

          <img src="images/logo.png" alt="Ameta Serviços"/>
        </div>

        <div className={`
          ${styles.showMobileModal}
          ${isActiveMenuMobile && styles.showMobileModalActive}  
        `}>
          <FiX 
            size={40}
            onClick={handleMenuMobile}
          />

          <div className={styles.modalContent}>
            <img src="images/logo.png" alt="Ameta Serviços"/>

            <nav className={styles.navMenuMobile}>
              <a href="">Inicio</a>
              <a href="">Quem Somos</a>
              <a href="">Serviços</a>
              <a href="">Portfólio</a>
              <a href="">Contato</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}