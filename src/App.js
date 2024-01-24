import React, { useState, useEffect } from 'react';

import {
  Button,
  Flex,
  Gallery,
  Icon,
  helpers
} from 'mdb-react-components';

import './index.css';
import './Button.navbar.css';
import './Icon.css';

const isMobileDeviceQuery = '(max-width: 768px)';

const leadingPhotos = ['leading-1.png', 'leading-2.png', 'leading-3.png'];

function App() {
  console.log(Gallery);
  console.log(Icon);

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
    <Button className='navbar-transparent'><Icon.Email /> I&apos;m In</Button>,
    <Button className='navbar-transparent'>About</Button>,
    <Button className='navbar-transparent'>Experience</Button>,
    <Button className='navbar-transparent'>Goals</Button>,
    <Button className='navbar'>Contact</Button>
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
        {menu}
      </div>
      <Gallery.Slideshow
        photos={leadingPhotos}
        thumbnails={leadingPhotos}
        showControls={true}
        showCounter={true}
        style={{
          width: '100vw',
          height: '70vh'
        }}
      />
      <Flex.Container
        flow='column nowrap'
        style={{
          width: 'min(100vw - 32px, 1024px)',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <Flex.Container
          flow='row nowrap'
          gap='8px'
          justifyContent='stretch'
          alignItems='center'
          style={{
            width: 'min(512px, 100%)',
            height: '64px',
            marginLeft: 'auto',
            marginRight: 'auto'
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
            style={{ flex: '1 0' }}
          />
          <Button className='primary'><Icon.Email /> I&apos;m In</Button>
        </Flex.Container>
      </Flex.Container>
    </>
  );
}

export default App;
