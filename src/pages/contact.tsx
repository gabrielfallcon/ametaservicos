import React from 'react';
import Head from 'next/head';
import { 
  FiPhone, 
  FiMail, 
  FiInstagram, 
  FiFacebook, 
  FiLinkedin,
  FiRss
} from 'react-icons/fi';
import dynamic from 'next/dynamic';

import styles from '../styles/contact.module.scss';

export default function Contact() {
  const AsyncComponent = dynamic(() => import('../components/SectionForm'), {
    ssr: false
  });

  return(
    <>
      <Head>
        <title>Contato | AmetaServico</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.sectionContact}>
          <h2>Fale conosco atravéz de nossos canais digitais</h2>

          <div className={styles.contentBox}>
            <div className={styles.box}>
              <FiPhone size={35} color="#239699"/>

              <h3>Telefone para contato</h3>

              <p>11 99128-546</p>
            </div>

            <div className={styles.box}>
              <FiRss size={35} color="#239699"/>

              <h3>Redes Sociais</h3>

              <div className={styles.contentBall}>
                <div className={styles.ball}>
                  <a href="https://www.instagram.com/ametaservicos/" target="_blank">
                    <FiInstagram size={16}/>
                  </a>
                </div>
                <div className={styles.ball}>
                  <a href="https://www.facebook.com/ametaservicos/" target="_blank">
                    <FiFacebook size={16}/>
                  </a>
                </div>
                <div className={styles.ball}>
                  <a href="https://www.linkedin.com/in/ameta-servi%C3%A7os-402383126/" target="_blank">
                    <FiLinkedin size={16}/>
                  </a>
                </div>
                <div className={styles.ball}>
                  <a 
                    href="mailto:contato@ametaservicos.com.br" 
                    title="contato@ametaservicos.com.br"
                    target="_blank"
                  >
                    <FiMail size={16}/>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <FiMail size={35} color="#239699"/>

              <h3>E-mail para contato</h3>

              <p className={styles.noLetter}>contato@ametaservicos.com.br</p>
            </div>
          </div>
        </section>
        <AsyncComponent />
      </main>
    </>
  )
}