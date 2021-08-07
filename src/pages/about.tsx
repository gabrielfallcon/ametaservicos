import Head from 'next/head';

import styles from '../styles/about.module.scss';

export default function Services() {
  return (
    <>
      <Head>
        <title>Sobre | AmetaServico</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.bannerAbout}>
          <div className={styles.bannerAboutBlock}>
            <p>
              Estamos aqui para fazer a diferença nos serviços em que 
              realizamos, se não, porque estar aqui?
            </p>

            <h1>Sobre Nós</h1>
          </div>
        </section>
        
        <section className={styles.sectionQuemSomos}>
          <h1 className={styles.sectionQuemSomosTitle}>
            AMeta Serviços
          </h1> 

          <p className={styles.sectionQuemSomosDescription}>
            Nos dedicamos para entregar um serviços com alto valor e sua felicidade 
            é oque nos motiva em ser referência no mercado! <br /> <br/> 

            <h3>Por que confiar na AMeta Serviços? </h3><br/>

            <span>
              - Entregas com qualidade; <br/>
              - Agilidade nos processos; <br/>
              - Ótima base de relaçionamento com clientes; <br/>
              - Zelo por entregas e prazo; 
            </span>
          </p>
        </section>

        <section className={styles.sectionMissao}>
          <div className={styles.sectionMissaoContent}>
            <h1 className={styles.sectionMissaoTitle}>
              Vem com a gente
            </h1>

            <h3 className={styles.sectionMissaoSubTitle}>
              A AMeta Serviços é guiada pela inovação e tecnologia, por isso é referência em 
              serviços de qualidade, a empresa tem mais de 1 década e já é reconhecida pelos 
              seus clientes como empresa de serviços de ótima qualidade.
            </h3>

            <ul className={styles.sectionMissaoList}>
              <li className={styles.sectionMissaoListItem}>
                <h1>Missão</h1>

                <h2>
                  Satisfazer e transformar a vida de nossos clientes através de um 
                  ótimo serviço prestado.
                </h2>
              </li>
              <li className={styles.sectionMissaoListItem}>
                <h1>Visão</h1>

                <h2>
                  A Melhor e mais inovadora experiência de um trabalho com poucas 
                  manutenções. 
                </h2>
              </li>
              <li className={styles.sectionMissaoListItem}>
                <h1>Valores</h1>

                <h2>
                  Agilidade, Qualidade, Responsabilidade e Zelo
                </h2>
              </li>
            </ul>
          </div>
          
          <div className={styles.contentVideo}>
            <video muted loop autoPlay={true} src="videos/missao.mp4"  className={styles.bgVideo}>
            </video>
        </div>
        </section>

        <section className={styles.sectionParcerias}>
          <h1 className={styles.sectionParceriasTitle}>
            Clientes que acreditam em nosso trabalho
          </h1>

          <div className={styles.sectionParceriasBlockTextImage}>
            <img src="images/logo-parcerias.png" alt="Ericsson"/>

            <p className={styles.sectionParceriasBlockDescription}>
              A Ercsson hoje é a nossa maior cliente e que acredita em nosso 
              trabalho com qualidade. Através dela prestamos serviços para as 
              maiores redes de telecomunicações do Brasil!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}