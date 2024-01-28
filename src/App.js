import React, { useState, useEffect } from 'react';
import { Button, Flex, Icon, helpers } from 'mdb-react-components';
import { Leading, Navbar, SubmitEmail } from './components';
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

  const Page = Pages[view].component;

  return (
    <>
      <Navbar isMobileDevice={isMobileDevice}>
        <a href='?view=home' className='title'>
          <b>Sam Killawee</b> For <b>SFSS VP Internal</b>
        </a>
        <Flex.Container
          flow='row nowrap'
          gap='8px'
          alignItems='center'
        >
          {Object.keys(Pages).map(
            key => {
              // don't add a button for the home page
              if (key === 'home') return [];

              return (
                <Button
                  className={helpers.classList([
                    'navbar-transparent',
                    key === view ? 'selected' : ''
                  ])}
                  href={`?view=${key}`}
                >
                  {Pages[key].displayName}
                </Button>
              );
            }
          )}
          <Button className='navbar' href='?view=emails'>
            <Icon.Email /> I&apos;m In
          </Button>
        </Flex.Container>
      </Navbar>
      <Leading leading={leading}>
        <h1>Vote <b>Sam</b> for <b>VP Internal</b></h1>
        <h2>For a community-centric SFU</h2>
      </Leading>
      <Flex.Container
        flow='column nowrap'
        className='main'
      >
        <p className='prompt' id='emails'>
          <i>Submit your email to receive a reminder when voting begins!</i>
        </p>
        <SubmitEmail />
        <Page />
      </Flex.Container>
      <Flex.Container
        flow='row nowrap'
        gap='32px'
        justifyContent='center'
        alignItems='flex-start'
        className='footer'
      >
        <div>
          <p>Quick Links</p>
          <p><u>Top</u></p>
          <p><u>I&apos;m In!</u></p>
        </div>
        <div>
          <p>Contact Me</p>
          <p>Email: sam@sam.sam</p>
        </div>
      </Flex.Container>
    </>
  );
}

export default App;
