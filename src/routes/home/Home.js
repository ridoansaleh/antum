import React from 'react';
import Profile from './Profile';
import Description from './Description';
import { PageWrapper, Content } from './styles/_homeStyle';

function Home() {
  return (
    <PageWrapper>
      <Content>
        <Profile />
        <Description />
      </Content>
    </PageWrapper>
  );
}

export default Home;
