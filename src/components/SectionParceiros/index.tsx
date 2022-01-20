import styles from './sectionParceiros.module.scss';

export function SectionParceiros() {
  return (
    <section id="servicos" className={styles.parcerias}>
      <h1 className={styles.parceriasTitle}>Nossos Parceiros</h1>

      <p className={styles.parceriasDescription}>
        A Ericsson é a nossa maior parceira, e através dela somos contratados para a prestação de serviços em grandes operadoras de telecomunicações
      </p>

      <img 
        src="images/logo-parcerias.png" 
        alt="Parcerias"
        className={styles.parceriasImage}
      />
    </section>
  )
}