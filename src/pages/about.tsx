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
              Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum.
            </p>

            <h1>Sobre Nós</h1>
          </div>
        </section>
        
        <section className={styles.sectionQuemSomos}>
          <h1 className={styles.sectionQuemSomosTitle}>
            AMeta Serviços
          </h1> 

          <div className={styles.sectionQuemSomosBlockImages}>
            <img src="images/antena.jpg" alt="Antena"/>
            <img src="images/logo.png" alt="Ameta Serviços"/>
            <img src="images/antena-section-text.png" alt=""/>
          </div>

          <p className={styles.sectionQuemSomosDescription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti non possimus neque, dolorem eaque amet nostrum tenetur debitis illum dolores nulla accusamus aut facere at, recusandae nisi dignissimos facilis. <br /> 
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