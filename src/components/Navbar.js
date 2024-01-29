import React from 'react';
import { Flex } from 'mdb-react-components';

export function Navbar(props) {
  const { children } = props;

  return (
    <div
      style={{
        position: 'sticky',
        zIndex: '99',
        top: 0,
        left: 0,
        width: '100vw',
        height: '64px',
        borderBottom: '1px solid black',
        backgroundColor: 'var(--sfss-red)',
        color: 'white'
      }}
    >
      <Flex.Container
        flow='row nowrap'
        justifyContent='space-between'
        alignItems='center'
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(100vw - 32px, var(--mdb-page-width))'
        }}
      >
        {children}
      </Flex.Container>
    </div>
  );
}
