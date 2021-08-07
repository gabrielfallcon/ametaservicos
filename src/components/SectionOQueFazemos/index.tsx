import Link from 'next/link';
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
          Somos uma empresa focada em prestação de serviço e consultoria em telecomunicações.Realizando os seguintes serviços: <strong>RF, TX, PPI, PDI, Site Solution, Laudo Radiométrico, Site Survey, </strong> <br/><br/>

          Com nossa equipe garantimos qualidade nos serviços, <strong>prezamos muito pelo relacionamento com o cliente e isso nos torna diferentes,</strong> não se trata apenas de uma prestação de serviço, construimos tudo na base da confiança proporcionando uma experiência incrivel! 
        </p>

        <Link href="/about">
          <a className={styles.btnPrimary}>
            Saiba mais
          </a>
        </Link>
      </div>
    </div>
  )
}