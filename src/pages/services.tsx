import Head from 'next/head';
import { TabPanel, Tab } from '../components';

import styles from '../styles/services.module.scss';

export default function Services() {
  return (
    <>
      <Head>
        <title>Serviços | AmetaServico</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.sectionServices}>
          <h1>Nossos serviços</h1>

          <TabPanel className={styles.contentPanel}>
            <Tab title="Site Survey">
              <h2>Neste serviço é incluso: </h2> <br />

              <p>
                - Engenharia <br />
                - Infraestrutura <br />
                - RF <br />
                - TX
              </p>
            </Tab>
            <Tab title="Documentações">
              <h2>Neste serviço é incluso: </h2> <br />

              <p>
                - Projeto Provisório de Instalação (PPI) <br />
                - Projeto Definitivo de Instalação (PDI) <br />
                - Elaboração de War Room (Site Solution) <br />
                - Solicitação de Compartilhamento <br />
                - Laudo Radiométrico 
              </p>
            </Tab>
            <Tab title="Consultoria">
              <h2>Neste serviço é incluso: </h2> <br />

              <p>
                - Site Survey <br />
                - Documentação <br />
                - Elaboração de War Room (Site Solution)) <br />
              </p>
            </Tab>
          </TabPanel>
        </section>
      </main>
    </>
  );
}