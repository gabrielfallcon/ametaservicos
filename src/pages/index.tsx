import Head from 'next/head'

import {
  Main,
  BannerWrapper
} from '../styles/home';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Inincio | AmetaServico</title>
      </Head>
      
      <Main>
        <BannerWrapper>
          <div className="content-banner">
            <h1>
              AMeta Serviços - atender para entender e resolver soluções complexas em projetos de telecom
            </h1>

            <a href="">Saiba Mais</a>
          </div>
        </BannerWrapper>
      </Main>
    </>
  )
}
