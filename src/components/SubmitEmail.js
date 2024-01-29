import React, { useState } from 'react';
// import axios from 'axios';
import { Button, Flex, Icon } from 'mdb-react-components';

export function SubmitEmail(props) {
  const { isMobileDevice } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [statusText, setStatusText] = useState(null);

  async function onSubmit() {
    try {
      const emailRegExp = new RegExp(
        '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@' +
        '[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$'
      );

      if (!String(email).match(emailRegExp)) {
        setStatusText('Invalid email; double check for typos?');
        throw new Error('Invalid email.');
      }

      /*
      await axios.post(
        'https://api.micahdb.com/emails/submit',
        { name, email }
      );
      */

      setStatusText('Prevented at the moment.');
      throw new Error('Prevented ATM');

      setStatusText('Your email was received. Thank you!');

      // reset input fields
      setName('');
      setEmail('');
    } catch (error) {
      // error is from the server
      if (error.response) {
        setStatusText('Invalid email; it was submitted before.');
      }

      console.log(error);
    }
  }

  return (
    <div id='email'>
      <Flex.Container
        flow={isMobileDevice ? 'column nowrap' : 'row nowrap'}
        gap='16px'
        justifyContent='center'
        alignItems='stretch'
        className='submit-email'
      >
        <Flex.Container
          flow='column nowrap'
          justifyContent='center'
          alignItems='flex-start'
          style={{ width: '240px' }}
        >
          <h3>Get Updates!</h3>
          <p>Submit your email and I&apos;ll send you a reminder when voting begins.</p>
        </Flex.Container>
        <Flex.Container
          flow='column nowrap'
          gap='8px'
          alignItems='stretch'
        >
          <input
            value={name}
            placeholder='Name'
            onChange={e => setName(e.target.value)}
          />
          <input
            type='email'
            value={email}
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
          />
          <Button className='primary' onClick={onSubmit}>
            <Icon.Email /> I&apos;m In
          </Button>
        </Flex.Container>
      </Flex.Container>
      {statusText !== null ? (
        <p>{statusText}</p>
      ) : []}
    </div>
  );
}
