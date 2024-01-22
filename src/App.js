import React, { useState, useEffect } from 'react';

import {
  Button,
  Dropdown,
  Flex,
  helpers
} from 'mdb-react-components';

import './index.css';
import './Button.navbar.css';

const isMobileDeviceQuery = '(max-width: 768px)';

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(
    helpers.checkMediaQuery(isMobileDeviceQuery)
  );

  useEffect(() => {
    helpers.watchMediaQuery(isMobileDeviceQuery, setIsMobileDevice);
  }, []);

  const titleItems = [
    <h1 className='title'>
      <b>Sam Killawee</b> For The <b>SFSS</b>
    </h1>
  ];
  const menuItems = [
    <Button className='navbar-transparent'>About</Button>,
    <Button className='navbar-transparent'>Experience</Button>,
    <Button className='navbar-transparent'>Goals</Button>,
    <Button className='navbar'>I&apos;m In</Button>
  ];

  const menu = isMobileDevice ? (
    <Flex.Container
      flow='row nowrap'
      justifyContent='flex-start'
      alignItems='center'
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        margin: 'auto'
      }}
    >
      {titleItems}
    </Flex.Container>
  ) : (
    <Flex.Container
      flow='row nowrap'
      justifyContent='flex-start'
      alignItems='center'
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'calc(100vw - 32px)',
        margin: 'auto'
      }}
    >
      {titleItems}
      <Flex.Container
        flow='row nowrap'
        gap='8px'
        alignItems='center'
        style={{ marginLeft: 'auto' }}
      >
        {menuItems}
      </Flex.Container>
    </Flex.Container>
  );

  return (
    <>
      {/* navigation bar container */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: '64px',
          borderBottom: '1px solid var(--mdb-border-color)',
          backgroundColor: 'var(--sfss-red)',
          color: 'white'
        }}
      >
        {menu}
      </div>
      <Flex.Container
        flow='column nowrap'
        style={{
          width: 'calc(100vw - 32px)',
          height: '200vh',
          margin: 'auto'
        }}
      >
        <p>Photo Gallery Here</p>
      </Flex.Container>
    </>
  );
}

export default App;
