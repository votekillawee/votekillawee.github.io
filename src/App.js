import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Flex, Icon, helpers } from 'mdb-react-components';
import { Footer, Leading, Navbar, SubmitEmail } from './components';
import { Admin, Pages } from './Pages';

const isMobileDeviceQuery = '(max-width: 768px)';
const leading = ['/leading/1.png', '/leading/2.png'];

function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(
    helpers.checkMediaQuery(isMobileDeviceQuery)
  );
  const [view, setView] = useState('home');
  const [adminPassword, setAdminPassword] = useState(null);

  // watch the is mobile device media query
  useEffect(() => {
    helpers.watchMediaQuery(isMobileDeviceQuery, setIsMobileDevice);

    // see which page is selected
    const params = new URL(window.location.href).searchParams;
    const newView = params.get('view');

    if (newView === null) {
      setView('home');
    } else {
      setView(newView);

      if (newView === 'admin') {
        setAdminPassword(params.get('password'));
      }
    }
  }, []);

  const menuButtons = [
    ...Object.keys(Pages).map(
      key => {
        return (
          <Button
            className={helpers.classList([
              !isMobileDevice ? 'navbar-transparent' : '',
              view === key ? 'selected' : ''
            ])}
            href={`?view=${key}`}
          >
            {Pages[key].displayName}
          </Button>
        );
      }
    ),
    <Button
      className={isMobileDevice ? 'primary' : 'navbar'}
      href='#email'
    >
      <Icon.Email /> I&apos;m In
    </Button>
  ];

  const Page = view === 'admin' ? [] : Pages[view].component;

  return (
    <>
      <Navbar>
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
      {view === 'home' ? (
        <Leading leading={leading}>
          <h1>Unity, Community, Capability!</h1>
          <h1>Choose <b>Sam Killawee!</b></h1>
        </Leading>
      ) : []}
      <Flex.Container
        flow='column nowrap'
        justifyContent='flex-start'
        alignItems='center'
        className='page-container'
      >
        {view === 'home' ? (
          <>
            <hr />
            <SubmitEmail isMobileDevice={isMobileDevice} />
            <hr />
          </>
        ) : []}
        {/* admin view requires a password */}
        {view === 'admin' ? (
          <Admin password={adminPassword} />
        ) : (
          <Page />
        )}
        {view !== 'home' && view !== 'admin' ? (
          <>
            <hr />
            <SubmitEmail isMobileDevice={isMobileDevice} />
          </>
        ) : []}
      </Flex.Container>
      {view !== 'admin' ? <Footer /> : []}
    </>
  );
}

export default App;
