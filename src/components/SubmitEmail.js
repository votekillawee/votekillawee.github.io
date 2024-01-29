import React from 'react';
import { Button, Flex, Icon, helpers } from 'mdb-react-components';

export function SubmitEmail(props) {
  const { isMobileDevice } = props;

  return (
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
        <p>Submit your email and I&apos;ll send a reminder when voting begins.</p>
      </Flex.Container>
      <Flex.Container
        flow='column nowrap'
        gap='8px'
        alignItems='stretch'
      >
        <input placeholder='Name' />
        <input placeholder='Email' />
        <Button className='primary'><Icon.Email /> I&apos;m In</Button>
      </Flex.Container>
    </Flex.Container>
  );
}
