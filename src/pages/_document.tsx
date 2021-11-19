import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/png" sizes="16x16" href="/logo-ico.png"/>

          <meta property="og:title"              content="Ameta Serviços" />
          <meta property="og:description"        content="Está procurando serviços de qualidade em telecomunicação?" />
          <meta property="og:image"              content="images/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}