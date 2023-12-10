import { useState } from "react";
import { FiX, FiAlignJustify } from "react-icons/fi";
import Link from "next/link";

import styles from "./header.module.scss";

export function Header() {
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);

  const message =
    "Olá, vi seus serviços através de seu site e gostaria de saber mais sobre!";

  const handleMenuMobile = () => {
    setIsActiveMenuMobile(!isActiveMenuMobile);
  };
  return (
    <header className={styles.container}>
      <div className={styles.showDesktop}>
        <div className={styles.showDesktopContentBlue}>
          <h2>
            Ameta serviços - empresa especializada em consultoria de
            telecomunicações
          </h2>
        </div>

        <div className={styles.showDesktopContentLogo}>
          <div className={styles.content}>
            <div className={styles.contact}>
              <span>
                Whatsapp: <strong>11 93725-3930</strong>
                <br />
                E-mail: <strong>contato@ametaservicos.com.br</strong>
              </span>
            </div>

            <Link href="/">
              <img src="images/logo.png" alt="Ameta Serviços" />
            </Link>

            <p>Olá, seja bem-vindo! </p>
          </div>
        </div>

        <nav className={styles.showDesktopNav}>
          <div className={styles.navContent}>
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/about">Quem Somos</Link>
              </li>
              <li>
                <Link href="/services">Serviços</Link>
              </li>
              <li>
                <Link href="/contact">Contato</Link>
              </li>
              <li>
                <Link href="/careers">Trabalhe Conosco</Link>
              </li>
              <li>
                <Link href="/jobs">Vagas</Link>
              </li>
            </ul>
            <a
              href={`https://api.whatsapp.com/send?phone=5511937253930&text=${message}`}
              target="_blank"
              className={styles.btnPrimary}
            >
              Iniciar Conversa
            </a>
          </div>
        </nav>
      </div>

      <div className={styles.showMobile}>
        <div className={styles.showMobileContent}>
          <FiAlignJustify size={40} onClick={handleMenuMobile} />

          <Link href="/">
            <img src="images/logo.png" alt="Ameta Serviços" />
          </Link>
        </div>

        <div
          className={`
          ${styles.showMobileModal}
          ${isActiveMenuMobile && styles.showMobileModalActive}  
        `}
        >
          <FiX size={40} onClick={handleMenuMobile} />

          <div className={styles.modalContent}>
            <img src="images/logo.png" alt="Ameta Serviços" />

            <nav className={styles.navMenuMobile}>
              <Link href="/" onClick={handleMenuMobile}>
                Inicio
              </Link>
              <Link href="/about" onClick={handleMenuMobile}>
                Quem Somos
              </Link>
              <Link href="/services" onClick={handleMenuMobile}>
                Serviços
              </Link>
              <Link href="/contact" onClick={handleMenuMobile}>
                Contato
              </Link>
              <Link href="/careers" onClick={handleMenuMobile}>
                Trabalhe Conosco
              </Link>
              <Link href="/jobs" onClick={handleMenuMobile}>
                Vagas
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
