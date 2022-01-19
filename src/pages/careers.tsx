import Head from 'next/head';
import dynamic from 'next/dynamic';


import styles from '../styles/careers.module.scss';

export default function Careers() {
  const AsyncComponent = dynamic(() => import('../components/SectionFormCareers'), {
    ssr: false
  });

  return (
    <>
      <Head>
        <title>Trabalhe Conosco | AmetaServico</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.bannerAbout}>
          <div className={styles.bannerAboutBlock}>
            <p>
              Já pensou em fazer parte de uma empresa que se importa com a sua carreira?<br/>
              Envie seu currículo! Iremos analisar para uma entrevista!  
            </p>

            <h1>Trabalhe Conosco</h1>
          </div>
        </section>
        
        <AsyncComponent />
      </main>
    </>
  );
}