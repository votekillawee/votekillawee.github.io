import React from 'react';

function Home() {
  return (
    <p id='main'>Hello, world!</p>
  );
}

function About() {
  return (
    <div id='main'>
      <h1>About</h1>
      <h2>My name is Sam.</h2>
      <p>
        I am a second year Molecular Biology and Biochemistry student.
        Throughout my time at SFU, I&apos;ve been involved in leadership.
      </p>
      <h2>In my first year,</h2>
      <p>
        I was the first year representative in the Science Undergraduate Society (SUS),
        helping plan events like movie nights and the SUS winter formal.
        I became heavily involved in work updating the SUS constitution.
      </p>
      <h2>In my second year,</h2>
      <p>
        I took on more leadership opportunities.
        I was elected Vice President Academic and Student Affairs of the SUS,
        and Council Representative of Molecular Biology and Biochemistry.
        In addition to these, I was nominated as Vice Chair of Council.
      </p>
      <h1>Experience</h1>
      <h2>As VP Academic and Student Affairs of the SUS,</h2>
      <p>
        I was an integral member of the team that rejuvenated SFU science.
        One of the achievements that I am most proud of
        was hiring the first year representatives; it was a task that I oversaw.
        The first year representatives are an amazing team who planned multiple
        events both as a group and individually, including but not limited to
        collaborating with the Computing Science Student Society,
        and organising a woman in science empowerment seminar with networking opportunities.
      </p>
      <p>
        A big goal of the SUS was to work closer with department student unions (DSUs) this year.
        I worked very closely with the biochemistry president and the MBB SUS rep,
        which contributed to a joint FROSH by the SUS and our eight Science DSUs.
        It was an unqualified success with the event packed!
      </p>
      <p>
        I&apos;ve gone beyond the responsibilities of being a VP, however;
        I am always in the SUS common room and pleased to say that over the course of the semester,
        the average number of students who used the room in a day has significantly increased since last year.
      </p>
      <h2>As Council Representative of Molecular Biology and Biochemistry,</h2>
      <p>
        I represented the interest of biochemistry students to the student society.
        I consulted with my departmental student executives on major issues.
        As an active member of the finances committee, I have always pushed for greater consideration
        of how grants would help students before approving the spending of student money.
      </p>
      <h2>As Vice Chair of Council,</h2>
      <p>
        I worked to ensure that Robert&apos;s rules were followed in council meetings, and that the council followed policy.
        I enforced the abandonment by-law, removing counselors who were
        missing a significant number of council meetings, while being paid student money.
      </p>
      <p>
        In the absense of the President, I shared the special council meeting to write a
        letter supporting the TSSU and amended stronger language to support the TSSU.
      </p>
      <p>
        I chaired the oversight committee on executive officers, where I led the fair and measured oversight of executive offices,
        making sure that they were doing their work, reining them in when they overstepped their bounds.
        For example, I led an initiative to restrict the ability of executives to change policy,
        preventing evolution into the gridlock and toxicity of previous council years.
      </p>
      <p>
        I am also a member of the human resources and personnel committee,
        providing input on the personnel, concerns of the society,
        and on the future of the staff leadership of the organisation.
        As a member of the governance committee, I reviewed finance and
        member services policy to streamline and better serve the student body.
      </p>
      <h1>Plans</h1>
      <h2>Vice President Internal</h2>
      <p>
        My experience places me perfectly to be the next Vice President Internal of the SFSS,
        as I am already familiar with the ongoing internal structures and challenges of the society.
      </p>
      <p>
        As Vice President Internal, I will work on building a sense of community
        and collaboration between the various groups that are part of the SFSS.
        I will work my hardest to make the council a place of discussion and learning.
        I hope to make council a place where people can come to a decision after careful thought;
        where people can hear out perspectives and change their views, without feeling misheard themselves.
      </p>
      <p>
        It is my goal to create the spaces within the SFSS where students learn, discuss, have fun as they spend their time on campus together.
        SFU&apos;s campus has a reputation of student-life being a lonely cycle of commuting,
        attending lectures, eating lunch alone, attending more lectures, and going home.
        My goal is to increase the sociability of our campus, and harbour a reputation of liveliness.
      </p>
      <p>
        In all decisions I make, I will consider how those decisions will advance creating more community spaces for students.
        This would include helping support student groups that already support community,
        like the Computing Science Student Society, which brings hundreds of students out to events,
        and regular packs student common rooms;
        or the SFU anime club, which runs massive anime festivals every summer.
        Communities like these need be supported, and many more need to be nurtured.
      </p>
      <h2>
        By electing me as Vice President Internal of the SFSS, I will work to these ends!
      </h2>
    </div>
  );
}

export const Pages = {
  home: {
    displayName: 'Home',
    component: Home
  },
  about: {
    displayName: 'About Me',
    component: About
  }
};
