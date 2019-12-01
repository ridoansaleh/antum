import React from 'react';
import { SkillContainer, Li } from './styles/_skillStyle';

function Skill() {
  return (
    <SkillContainer>
      <h2>Skills</h2>
      <ul>
        <Li>JavaScript</Li>
        <Li>HTML</Li>
        <Li>CSS</Li>
        <Li>React.Js</Li>
        <Li>Node</Li>
        <Li>Firebase</Li>
        <Li>Others</Li>
      </ul>
    </SkillContainer>
  );
}

export default Skill;
