import styles from './sectionImageText.module.scss';

export function SectionImageText() {
  return (
    <section className={styles.bannerImageText}>
      <div className={styles.contentBlockText}  >
        <h1 className={styles.contentTitle}>
          Ameta serviços  - Serviços de Telecomunicações
        </h1>

        <p className={styles.contentDescription}>
          A mais de 10 anos no mercado fazendo a diferença
        </p>

        <a 
          href="#"
          className={styles.btnSecondary}  
        >
          Entrar em Contato
        </a>
      </div>

      <img 
        src="images/antena-section-text.png" 
        alt="Antena de rede"
      />
    </section>
  );
}

