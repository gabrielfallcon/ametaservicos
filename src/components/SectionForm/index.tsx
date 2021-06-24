import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { Modal } from '../Modal';

import styles from './sectionForm.module.scss';

export function SectionForm() {
  const [modalActive, setModalActive] = useState(false);

  const [status, setStatus] = useState('Enviar')

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = (e) => {
    e.preventDefault();

    setStatus('Enviando...')

    emailjs.sendForm('ametaservicosemail', 'template_4z0fjy6', e.target ,  'user_exfms2yzMGbHVlaT3IzNb')
      .then((res) => {
        setModalActive(true)

        setStatus('Enviar')

        setName('')
        setEmail('')
        setMessage('')
      }, (error) => (
        console.log(error)
      ));
  }

  return(
    <>
      <Modal 
        active={modalActive}
        title="Sua mensagem foi enviada com sucesso!"
        description="Em breve entraremos em contato."
        closeModal={() => setModalActive(false)}
      />
      

      <section className={styles.sectionForm}>
        <div className={styles.sectionFormContent}>
          <h2 className={styles.sectionTitle}>
            Fale Conosco
          </h2>

          <form onSubmit={sendMail} className={styles.form}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                placeholder="Digite seu nome" 
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <textarea 
              name="message" 
              placeholder="Digite sua mensagem"
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