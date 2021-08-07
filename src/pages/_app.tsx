import { AppProps } from 'next/app';

import { Header, Footer } from '../components';

import '../styles/global.scss';


function MyApp({ Component, pageProps }: AppProps) {
  const message = "Olá, vi seus serviços através de seu site e gostaria de saber mais sobre!"

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />

      <a 
        href={`https://api.whatsapp.com/send?phone=5511937253930&text=${message}`} 
        target="_blank"
        className="linkWhats"
      >
        <img src="images/logo-whatsapp.png" alt="WhatsApp"/>
      </a>
    </>
  )
}

export default MyApp
