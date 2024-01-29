import React from 'react';
import { Flex } from 'mdb-react-components';

export function Footer() {
  return (
    <Flex.Container
      flow='row nowrap'
      gap='32px'
      justifyContent='center'
      alignItems='flex-start'
      className='footer'
    >
      <div>
        <p><b>Sam Killawee</b><br />For <b>VP Internal</b></p>
      </div>
      <div>
        <p><u>Contact Me</u></p>
        <p>Email: srk11@sfu.ca</p>
      </div>
    </Flex.Container>
  );
}
