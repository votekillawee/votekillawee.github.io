import React from 'react';
import { Button, Flex, Icon } from 'mdb-react-components';

export function SubmitEmail(props) {
  return (
    <Flex.Container
      flow='row nowrap'
      gap='8px'
      justifyContent='center'
      alignItems='center'
      style={{
        width: '100%',
        height: '64px'
      }}
    >
      <h3>Get Updates</h3>
      <Icon.Arrow
        className='h3'
        style={{
          transform: 'rotate(-90deg)'
        }}
      />
      <input
        placeholder='Email'
        style={{
          maxWidth: '256px',
          flex: '1 1'
        }}
      />
      <Button className='primary'><Icon.Email /> I&apos;m In</Button>
    </Flex.Container>
  );
}
