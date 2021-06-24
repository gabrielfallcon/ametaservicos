import Head from 'next/head'

import styles from '../styles/home.module.scss';

import { 
  BannerWrapper, 
  SectionOQueFazemos,
  SectionImageText,
  SectionParceiros,
  SectionQualidade,
  SectionForm,
  Modal
} from '../components';

export default function Home() {

  const message = "Olá, vi seus serviços através de seu site e gostaria de saber mais sobre!"
  
  return (
    <>
      <Head>
        <title>Inincio | AmetaServico</title>
      </Head>
      
      <main className={styles.main}>
        <BannerWrapper />
        <SectionOQueFazemos />
        <SectionImageText />
        <SectionParceiros />
        <SectionForm />

        <Modal />

        <a 
          href={`https://api.whatsapp.com/send?phone=5511937253930&text=${message}`} 
          className={styles.linkWhats}
        >
          <img src="images/logo-whatsapp.png" alt="WhatsApp"/>
        </a>
      </main>
    </>
  )
}
