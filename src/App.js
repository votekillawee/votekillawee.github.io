import React, { useState, useEffect } from 'react';

import {
  Button,
  Flex,
  Gallery,
  Grid,
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

  function collapsible(image, desc) {
    return isMobileDevice ? [image, desc] : (
      <Grid.Container
        columns='1fr 2fr'
        rows='1fr'
        gap='32px'
        areas={['. .']}
        alignItems='center'
      >
        {image}
        {desc}
      </Grid.Container>
    );
  }

  useEffect(() => {
    helpers.watchMediaQuery(isMobileDeviceQuery, setIsMobileDevice);
  }, []);

  const titleItems = [
    <h1 className='title'>
      <b>Sam Killawee</b> For <b>SFSS VP Internal</b>
    </h1>
  ];
  const menuItems = [
    <Button className='navbar-transparent'><Icon.Email /> I&apos;m In</Button>,
    <Button className='navbar-transparent'>About Me</Button>,
    <Button className='navbar-transparent'>Plans</Button>,
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

  const intro = [
    <h2>My name is Sam.</h2>,
    <p>
      I am a second year Molecular Biology and Biochemistry student.
      Throughout my time at SFU, I&apos;ve been involved in leadership.
    </p>
  ];

  const firstYear = [
    <h2>In my first year,</h2>,
    <p>
      I was the first year representative in the Science Undergraduate Society (SUS),
      helping plan events like movie nights and the SUS winter formal.
      I became heavily involved in work updating the SUS constitution.
    </p>
  ];

  const secondYear = [
    <h2>In my second year,</h2>,
    <p>
      I took on more leadership opportunities.
      I was elected Vice President Academic and Student Affairs of the SUS,
      and Council Representative of Molecular Biology and Biochemistry.
      In addition to these, I was nominated as Vice Chair of Council.
    </p>
  ];

  const vpAcademic = [
    <h2>As VP Academic and Student Affairs of the SUS,</h2>,
    <p>
      I was an integral member of the team that rejuvenated SFU science.
      One of the achievements that I am most proud of
      was hiring the first year representatives; it was a task that I oversaw.
      The first year representatives are an amazing team who planned multiple
      events both as a group and individually, including but not limited to
      collaborating with the Computing Science Student Society,
      and organising a woman in science empowerment seminar with networking opportunities.
    </p>,
    <p>
      A big goal of the SUS was to work closer with department student unions (DSUs) this year.
      I worked very closely with the biochemistry president and the MBB SUS rep,
      which contributed to a joint FROSH by the SUS and our eight Science DSUs.
      It was an unqualified success with the event packed!
    </p>,
    <p>
      I&apos;ve gone beyond the responsibilities of being a VP, however;
      I am always in the SUS common room and pleased to say that over the course of the semester,
      the average number of students who used the room in a day has significantly increased since last year.
    </p>
  ];

  const councilRep = [
    <h2>As Council Representative of Molecular Biology and Biochemistry,</h2>,
    <p>
      I represented the interest of biochemistry students to the student society.
      I consulted with my departmental student executives on major issues.
      As an active member of the finances committee, I have always pushed for greater consideration
      of how grants would help students before approving the spending of student money.
    </p>
  ];

  const viceChair = [
    <h2>As Vice Chair of Council,</h2>,
    <p>
      I worked to ensure that Robert&apos;s rules were followed in council meetings, and that the council followed policy.
      I enforced the abandonment by-law, removing counselors who were
      missing a significant number of council meetings, while being paid student money.
    </p>,
    <p>
      In the absense of the President, I shared the special council meeting to write a
      letter supporting the TSSU and amended stronger language to support the TSSU.
    </p>,
    <p>
      I chaired the oversight committee on executive officers, where I led the fair and measured oversight of executive offices,
      making sure that they were doing their work, reining them in when they overstepped their bounds.
      For example, I led an initiative to restrict the ability of executives to change policy,
      preventing evolution into the gridlock and toxicity of previous council years.
    </p>,
    <p>
      I am also a member of the human resources and personnel committee,
      providing input on the personnel, concerns of the society,
      and on the future of the staff leadership of the organisation.
      As a member of the governance committee, I reviewed finance and
      member services policy to streamline and better serve the student body.
    </p>
  ];

  const vpInternal = [
    <h2>Vice President Internal</h2>,
    <p>
      My experience places me perfectly to be the next Vice President Internal of the SFSS,
      as I am already familiar with the ongoing internal structures and challenges of the society.
    </p>,
    <p>
      As Vice President Internal, I will work on building a sense of community
      and collaboration between the various groups that are part of the SFSS.
      I will work my hardest to make the council a place of discussion and learning.
      I hope to make council a place where people can come to a decision after careful thought;
      where people can hear out perspectives and change their views, without feeling misheard themselves.
    </p>,
    <p>
      It is my goal to create the spaces within the SFSS where students learn, discuss, have fun as they spend their time on campus together.
      SFU&apos;s campus has a reputation of student-life being a lonely cycle of commuting,
      attending lectures, eating lunch alone, attending more lectures, and going home.
      My goal is to increase the sociability of our campus, and harbour a reputation of liveliness.
    </p>,
    <p>
      In all decisions I make, I will consider how those decisions will advance creating more community spaces for students.
      This would include helping support student groups that already support community,
      like the Computing Science Student Society, which brings hundreds of students out to events,
      and regular packs student common rooms;
      or the SFU anime club, which runs massive anime festivals every summer.
      Communities like these need be supported, and many more need to be nurtured.
    </p>,
    <h2>
      By electing me as Vice President Internal of the SFSS, I will work to these ends!
    </h2>
  ];

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
      <div className='leading'>
        <Gallery.Slideshow
          photos={leadingPhotos}
          thumbnails={leadingPhotos}
          showControls={true}
          showCounter={true}
        />
        <Flex.Container
          flow='column nowrap'
          alignItems='center'
          gap='8px'
          style={{
            zIndex: 2,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <h1>Vote <b>Sam</b> for <b>VP Internal</b></h1>
          <h2>For a community-centric SFU</h2>
        </Flex.Container>
      </div>
      <Flex.Container
        flow='column nowrap'
        className='main'
        style={{
          width: 'min(100vw - 32px, 1024px)',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <p className='prompt'>
          <i>Submit your email to receive a reminder when voting begins!</i>
        </p>
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
        <h1>About Me</h1>
        {collapsible(
          <img
            src='sam.png'
            alt='Sam Killawee'
            style={{
              borderRadius: '16px',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover'
            }}
          />,
          <div>
            {intro}
            {firstYear}
            {secondYear}
          </div>
        )}
        <h1>Experience</h1>
        <section>{vpAcademic}</section>
        <section>{councilRep}</section>
        <section>{viceChair}</section>
        <h1>Goals</h1>
        <section>{vpInternal}</section>
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
