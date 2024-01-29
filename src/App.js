import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Flex, Icon, helpers } from 'mdb-react-components';
import { Footer, Leading, Navbar, SubmitEmail } from './components';
import { Pages } from './Pages';

const isMobileDeviceQuery = '(max-width: 768px)';
const leading = ['/leading/1.png', '/leading/2.png'];

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(
    helpers.checkMediaQuery(isMobileDeviceQuery)
  );
  const [view, setView] = useState('home');

  // watch the is mobile device media query
  useEffect(() => {
    helpers.watchMediaQuery(isMobileDeviceQuery, setIsMobileDevice);

    // see which page is selected
    const params = new URL(window.location.href).searchParams;
    const newView = params.get('view');

    if (newView === null || Pages[newView] === undefined) {
      setView('home');
    } else {
      setView(newView);
    }
  }, []);

  const menuButtons = [
    ...Object.keys(Pages).map(
      key => {
        // don't add a button for the home page
        if (key === 'home') return [];

        return (
          <Button
            className={!isMobileDevice ? 'navbar-transparent' : undefined}
            href={`?view=${key}`}
          >
            {Pages[key].displayName}
          </Button>
        );
      }
    ),
    <Button
      className={isMobileDevice ? 'primary' : 'navbar'}
      href='?view=emails'
    >
      <Icon.Email /> I&apos;m In
    </Button>
  ];

  const Page = Pages[view].component;

  return (
    <>
      <Navbar isMobileDevice={isMobileDevice}>
        <a href='?view=home' className='title'>
          <b>Sam Killawee</b> For <b>VP Internal</b>
        </a>
        {isMobileDevice ? (
          <Dropdown
            className='large navbar-transparent icon'
            icon='hamburger'
            align='right'
          >
            {menuButtons}
          </Dropdown>
        ) : (
          <Flex.Container
            flow='row nowrap'
            gap='8px'
            alignItems='center'
          >
            {menuButtons}
          </Flex.Container>
        )}
      </Navbar>
      <Leading leading={leading}>
        <h1>Vote <b>Sam</b> for <b>VP Internal</b></h1>
        <h2>For a community-centric SFU</h2>
      </Leading>
      <Flex.Container
        flow='column nowrap'
        justifyContent='flex-start'
        alignItems='center'
        className='page-container'
      >
        <hr />
        <SubmitEmail isMobileDevice={isMobileDevice} />
        <hr />
        <Page />
      </Flex.Container>
      <Footer />
    </>
  );
}

export default App;
