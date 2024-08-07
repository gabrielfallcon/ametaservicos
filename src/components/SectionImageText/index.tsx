import styles from './sectionImageText.module.scss';

export function SectionImageText() {
  const message = "Olá, vi seus serviços através de seu site e gostaria de saber mais sobre!"

  return (
    <section className={styles.bannerImageText}>
      <div className={styles.contentBlockText}  >
        <h1 className={styles.contentTitle}>
          <strong>Ameta</strong> Serviços de Telecomunicações
        </h1>

        <p className={styles.contentDescription}>
          A mais de uma década no mercado fazendo a diferença
        </p>

        <a
          href={`https://api.whatsapp.com/send?phone=5511969160571&text=${message}`}
          target="_blank" 
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

