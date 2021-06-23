import styles from './sectionParceiros.module.scss';

export function SectionParceiros() {
  return (
    <section className={styles.parcerias}>
      <h1 className={styles.parceriasTitle}>Nossos Parceiros</h1>

      <p className={styles.parceriasDescription}>
        A Ericsson é a nossa maior parceira, e através dela somos contratados para a prestação de serviços em grandes aperadoras de telecomunicação
      </p>

      <img 
        src="images/logo-parcerias.png" 
        alt="Parcerias"
        className={styles.parceriasImage}
      />
    </section>
  )
}