import Head from 'next/head'

import {
  Main,
} from '../styles/home';

import { BannerWrapper, SectionOQueFazemos } from '../components';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Inincio | AmetaServico</title>
      </Head>
      
      <Main>
        <BannerWrapper />
        <SectionOQueFazemos />
      </Main>
    </>
  )
}
