import { useState } from 'react';
import { FiX, FiAlignJustify } from 'react-icons/fi';

import styles from './header.module.scss';

export function Header() {
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);

  const handleMenuMobile = () => {
    setIsActiveMenuMobile(!isActiveMenuMobile);
  }
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <FiAlignJustify 
          className={styles.iconMenuHamburg}
          size={24}
          onClick={handleMenuMobile}
        />
        <img 
          src="/images/logo.png" 
          alt="AmetaServicos"
        />

        <nav className={styles.nav}>
          <a href="">Inicio</a>
          <a href="">Quem Somos</a>
          <a href="">Projetos</a>
          <a href="">Contato</a>
        </nav>
      </div>

      <div className={`
        ${styles.menuMobile} 
        ${isActiveMenuMobile && styles.menuActive}
      `}>
        <FiX 
          className={styles.iconMenuClose}
          size={24}
          onClick={handleMenuMobile}
        />
        <img 
          src="/images/logo.png" 
          alt="AmetaServicos"
        />

        <nav className={styles.navMobile}>
          <a href="">Inicio</a>
          <a href="">Quem Somos</a>
          <a href="">Projetos</a>
          <a href="">Contato</a>
        </nav>
      </div>
    </header>
  );
}