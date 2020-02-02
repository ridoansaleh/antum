import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import About from './About';
import Skill from './Skill';
import Hobby from './Hobby';
import Contact from './Contact';
import {
  Container,
  Navigation,
  ActiveContent,
  Arrow,
  ArrowLeft,
  ArrowRight,
} from './styles/_homeStyle';

const LABELS = {
  1: 'Profile',
  2: 'About',
  3: 'Skill',
  4: 'Hobby',
  5: 'Contact',
};

function Home() {
  const [content, setContent] = useState(1);
  const [isPrevDisabled, setPrevDisabled] = useState(true);
  const [isNextDisabled, setNextDisabled] = useState(false);
  useEffect(() => {
    if (content === 1) {
      setPrevDisabled(true);
    } else if (content === 5) {
      setNextDisabled(true);
    } else {
      setPrevDisabled(false);
      setNextDisabled(false);
    }
  }, [content]);
  const handleClickPrev = () => {
    if (content > 1) {
      setContent(prevContent => prevContent - 1);
    }
  };
  const handleClickNext = () => {
    if (content < 5) {
      setContent(prevContent => prevContent + 1);
    }
  };
  const renderContent = () => {
    switch (content) {
      case 1:
        return <Profile />;
      case 2:
        return <About />;
      case 3:
        return <Skill />;
      case 4:
        return <Hobby />;
      case 5:
        return <Contact />;
      default:
        return <Profile />;
    }
  };
  return (
    <Container>
      {renderContent()}
      <Navigation>
        <ActiveContent>{LABELS[content]}</ActiveContent>
        <Arrow>
          <ArrowLeft disabled={isPrevDisabled} onClick={handleClickPrev} />
          <ArrowRight disabled={isNextDisabled} onClick={handleClickNext} />
        </Arrow>
      </Navigation>
    </Container>
  );
}

export default Home;
