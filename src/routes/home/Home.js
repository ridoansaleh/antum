import React from 'react';
import Profile from './Profile';
import Description from './Description';
import Skill from './Skill';
import Hobby from './Hobby';
import { PageWrapper, Content } from './styles/_homeStyle';

function Home() {
  return (
    <PageWrapper>
      <Content>
        <Profile />
        <Description />
        <Skill />
        <Hobby />
      </Content>
    </PageWrapper>
  );
}

export default Home;
