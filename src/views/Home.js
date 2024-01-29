import React from 'react';
import { Button, Flex, Icon } from 'mdb-react-components';

const text = [
  // eslint-disable-next-line max-len
  "My name is Sam, I am a second year Molecular Biology and biochemistry student. I am an avid reader, primarily murder mysteries, I love television, particularly sitcoms, like Brooklyn Nine-Nine, and The Good Place. When I get a chance, I love to go hiking and camping. I love playing pool and board games with my friends.",
  // eslint-disable-next-line max-len
  "I was an integral member of the team that rejuvenated SFU science. I am proud of the events I worked on including but not limited to collaborations with the Computing Science Student Society, Science Frosh and Winter Formal. I am also the Biochemistry councilor and Vice-Chair of Council. As Vice Chair of Council, I enforced the abandonment by-law, removing counselors who were missing a significant number of council meetings, while being paid student money. I have chaired council meetings. In the absence of the President, I chaired the special council meeting to write a letter supporting the TSSU and amended stronger language to support the TSSU.I chaired the oversight committee on executive officers, where I led the fair and measured oversight of executive offices, making sure that they were doing their work, reining them in when they overstepped their bounds. For example, I led an initiative to restrict the ability of executives to change policy, without proper consultation.",
  // eslint-disable-next-line max-len
  "I’m running to be the next Vice President Internal and Organizational Development of the Simon Fraser Student Society because we need more events, and more communities that run and build events like CSA. I’m also running not only to better support student groups who are building community but to also build a better community within the SFSS. There were years of internal turmoil that led to anger, frustration and significant disengagement from SFSS and its resources. If elected I will work to foster connections with disengage groups, and the students they serve. The SFSS can be an organization that is incredibly helpful to its students if only it looks outside itself. I humbly ask for your  endorsement in my quest towards these goals."
];

export function Home() {
  return (
    <div id='main'>
      <h1>Bio</h1>
      <img src='/sam.png' alt='Sam Killawee' className='bio' />
      <p className='no-indent'>Hey!</p>
      {text.map(para => <p>{para}</p>)}
      <p className='no-indent'>Sincerely,</p>
      <p className='no-indent'>
        Sam Killawee<br />
        Candidate for Vice President Internal and Organizational Development
      </p>
      <h2>By electing me as Vice President Internal of the SFSS, I will work to these ends!</h2>
      <Flex.Container flow='row nowrap' gap='8px'>
        <Button className='primary' href='?view=about'>Read More <Icon.Link /></Button>
        <Button href='#email'>Get Updates!</Button>
      </Flex.Container>
    </div>
  );
}
