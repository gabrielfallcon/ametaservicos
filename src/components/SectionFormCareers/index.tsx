import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { Modal } from '../Modal';

import styles from './sectionFormCareers.module.scss';

const ReactFormCareers: React.FC = () =>{
  const [modalActive, setModalActive] = useState(false);

  const [status, setStatus] = useState('Enviar')

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cell, setCell] = useState('');
  const [cv, setCv] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = (e) => {
    e.preventDefault();

    setStatus('Enviando...')

    emailjs.sendForm('ametaServicoCarreiras', 'template_d2h902m', e.target ,  'user_exfms2yzMGbHVlaT3IzNb')
      .then(() => {
        setModalActive(true)

        setStatus('Enviar')

        setName('')
        setEmail('')
        setMessage('')
      }, (error) => (
        alert(error.text)
      ));
  }

  return(
    <>
      <Modal 
        active={modalActive}
        title="Seu Currículo foi enviado com sucesso!"
        description="Em breve entraremos em contato."
        closeModal={() => setModalActive(false)}
      />
      

      <section id="contactForm" className={styles.sectionForm}>
        <div className={styles.sectionFormContent}>

          <form onSubmit={sendMail} method="post" className={styles.form}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                placeholder="Nome Completo*" 
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Digite seu e-mail*"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input 
                type="tell" 
                placeholder="Telefone* ex: (11) 99999-9999" 
                name="cell"
                value={cell}
                onChange={e => setCell(e.target.value)}
                required
              />
            </div>
            <textarea 
              name="message" 
              placeholder="Fale um Pouco sobre você e suas experiências"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />

            <button 
              type="submit"
              className={styles.formButton}
              value="Send"
            >
              {status}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default ReactFormCareers