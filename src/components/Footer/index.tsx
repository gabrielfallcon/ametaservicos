import styles from './footer.module.scss';

export function Footer() {
  return(
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img 
          src="images/logo.png" 
          alt="Ameta Serviços"
          className={styles.footerImageAmeta}
        />

        <p className={styles.footerDescription}>
          11  93725-3930 | www.ametaservicos.com | contato@ametaservicos.com.br <br/>
          Todos os direitos reservados.
        </p>

        
      </div>
    </footer>
  );
}