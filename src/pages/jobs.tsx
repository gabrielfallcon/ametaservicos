import Head from 'next/head';

import { dataJobs } from '../services/jobs';

import styles from '../styles/jobs.module.scss';

export default function Jobs() {

  return (
    <>
      <Head>
        <title>Trabalhe Conosco | AmetaServico</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.bannerAbout}>
          <div className={styles.bannerAboutBlock}>
            <p>
              Venha fazer parte da Ameta Serviços!
            </p>

            <h1>Mural de Vagas</h1>
          </div>
        </section>

        <section className={styles.boxJobs}>
            {dataJobs.map((item) => (
              <div key={item.id} className={styles.cardJob}>
                <span className={styles.key}>{item.key}</span>

                <h1>{item.title}</h1>

                <div className={styles.boxDescriptionOverflow}>
                  <p>{item.description}</p> 
                </div>

                <span className={styles.requirementsTitle}>Requisítos</span>

                <div className={styles.boxRequirementsOverflow}>
                  <p>{item.requirements}</p>
                </div>
                
                <p className={styles.typeHiring}>
                  Tipo de contratação: <span>{item.typeHiring}</span>
                </p>
              </div>
            ))}
        </section>
      </main>
    </>
  );
}