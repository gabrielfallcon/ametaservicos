import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import { Modal } from '../Modal';

import styles from './sectionForm.module.scss';

const ReactForm: React.FC = () =>{
  const [modalActive, setModalActive] = useState(false);

  const [status, setStatus] = useState('Enviar')

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = (e) => {
    e.preventDefault();

    setStatus('Enviando...')

    emailjs.sendForm('service_mg5vqbd', 'template_fg2j0ej', e.target, {
      publicKey: 'krqFkdn_z8wO7MkIx'
    })
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
        title="Sua mensagem foi enviada com sucesso!"
        description="Em breve entraremos em contato."
        closeModal={() => setModalActive(false)}
      />
      

      <section id="contactForm" className={styles.sectionForm}>
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

export default ReactForm