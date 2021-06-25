import Head from 'next/head'

import dynamic from 'next/dynamic';

import styles from '../styles/home.module.scss';

import { 
  BannerWrapper, 
  SectionOQueFazemos,
  SectionImageText,
  SectionParceiros,
} from '../components';


export default function Home() {

  const AsyncComponent = dynamic(() => import('../components/SectionForm'), {
    ssr: false
  });
  
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
        <AsyncComponent />
      </main>
    </>
  )
}
