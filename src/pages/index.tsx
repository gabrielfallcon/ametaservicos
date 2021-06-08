import Head from 'next/head'

import styles from '../styles/components/button.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inincio | AmetaServico</title>
      </Head>
      <a 
        href="" 
        className={`${styles.buttonPrimary}`}
      >
        Hello!
      </a>
    </>
  )
}
