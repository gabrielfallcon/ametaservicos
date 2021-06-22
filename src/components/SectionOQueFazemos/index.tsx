import styles from './sectionOQueFazemos.module.scss';

export function SectionOQueFazemos() {
  return (
    <div className={styles.container}>
      <div className={styles.contentImages}>
        <img src="images/ppi-section.png" alt="Engenharia" />
        <img src="images/antena-section.png" alt="Torre de sinal" />
      </div>

      <div className={styles.contentBlockText}>
        <h1 className={styles.contentTitle}>
          O que fazemos?
        </h1>

        <div className={styles.contentImagesMobile}>
          <img src="images/ppi-section.png" alt="Engenharia" />
          <img src="images/antena-section.png" alt="Torre de sinal" />
        </div>

        <p className={styles.contentDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
        </p>

        <a href="" className={styles.btnPrimary}>
          Entrar em Contato
        </a>
      </div>
    </div>
  )
}