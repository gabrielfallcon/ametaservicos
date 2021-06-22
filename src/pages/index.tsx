import Head from 'next/head'

import styles from '../styles/home.module.scss';

import { 
  BannerWrapper, 
  SectionOQueFazemos,
  SectionImageText
} from '../components';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Inincio | AmetaServico</title>
      </Head>
      
      <main className={styles.main}>
        <BannerWrapper />
        <SectionOQueFazemos />
        <SectionImageText />
      </main>
    </>
  )
}
