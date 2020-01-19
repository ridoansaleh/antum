import React from 'react';
import { SkillContainer, Box, SkillItem, ItemMore } from './styles/_skillStyle';
import SKILLS from '../../data/skills';

function Skill() {
  const handleSkillClick = link => {
    window.location.href = link;
  };
  return (
    <SkillContainer>
      <h2>Skills</h2>
      <Box>
        {SKILLS.map(skill => {
          if (skill.name === 'More') {
            return <ItemMore key={skill.id}>+ More</ItemMore>;
          }
          return (
            <SkillItem
              key={skill.id}
              src={skill.image}
              alt={skill.name}
              onClick={() => handleSkillClick(skill.link)}
            />
          );
        })}
      </Box>
    </SkillContainer>
  );
}

export default Skill;
