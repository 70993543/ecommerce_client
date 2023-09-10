import {useState} from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';
import './contact.css'

export const Contact = () => {

const { login, isAuthenticated } = useAuthentication(); // Obtén la función login desde el hook de autenticación

  const [users, setUsers] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
  });

  const data = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const senddata = (e) => {
    e.preventDefault();
    // Lógica para enviar datos aquí
  };

  return (
    <>
      <div className='contact_container'>
        <div className='contant'>
          <h2># contact us</h2>
          <div className='form'>
            <form method='POST'>
              <input
                type='text'
                name='Name'
                value={users.Name}
                placeholder='Enter Your Full Name'
                required
                autoComplete='off'
                onChange={data}
              ></input>
              <input
                type='email'
                name='Email'
                value={users.Email}
                placeholder='Enter Your E-mail'
                autoComplete='off'
                onChange={data}
              ></input>
              <input
                type='text'
                name='Subject'
                value={users.Subject}
                placeholder='Enter Your Subject'
                autoComplete='off'
                onChange={data}
              ></input>
              <textarea
                name='Message'
                value={users.Message}
                placeholder='Your Message'
                autoComplete='off'
                onChange={data}
              ></textarea>
              {isAuthenticated ? (
                <button type='submit' onClick={senddata}>
                  send
                </button>
              ) : (
                <button type='submit' onClick={() => login()}>
                  Login to Send
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
