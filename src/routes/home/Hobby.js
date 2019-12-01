import React from 'react';
import { HobbyContainer, Li } from './styles/_hobbyStyle';

function Hobby() {
  return (
    <HobbyContainer>
      <h2>Hobby</h2>
      <p>In his free time, he actually do these things:</p>
      <ul>
        <Li>Read article on Medium</Li>
        <Li>Watch videos</Li>
        <Li>Travelling around the city</Li>
        <Li>Watch movie</Li>
      </ul>
    </HobbyContainer>
  );
}

export default Hobby;
