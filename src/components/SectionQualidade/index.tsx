import styles from './sectionQualidade.module.scss';

export function SectionQualidade() {
  return(
    <section className={styles.sectionQualidade}>
      <div className={styles.sectionQualidadeContent}>
        <div className={styles.sectionQualidadeContentImages}>
          <img 
            src="images/antena-torre.png" 
            alt="Torre de sinal"
          />

          <img 
            src="images/antena-interna.png" 
            alt="Torre de sinal"
          />
        </div>

        <div className={styles.sectionQualidadeContentText}>
          <h2>QUALIDADE EM NOSSOS SERVIÇOS</h2>

          <ul>
            <li>
              <h3>Atendendo expectativas</h3>

              <p>
                - Melhorando cada vez mais os processos, serviços prestados e consultoria.
              </p>
            </li>
            <li>
              <h3>Cumprindo requisitos</h3>

              <p>
                - Atendendo os requisitos e atividades solicitadas pelo cliente.
              </p>
            </li>
            <li>
              <h3>Relacionamento</h3>

              <p>
                - Mantendo uma boa comunicação com o cliente entendendo e compreendendo suas necessidades.
              </p>
            </li>
            <li>
              <h3>Constante crescimento</h3>

              <p>
                - Valorizando profissionais, acompanhando seus desenvolvimentos e apoiando seu crescimento profissional.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}