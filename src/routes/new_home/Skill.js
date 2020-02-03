import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {
  Container,
  SkillWrapper,
  Item,
  ItemMore,
  Expertise,
  Box,
  Icon,
  BoxLabel,
  Label,
} from './styles/_skillStyle';
import SKILLS from '../../data/skills';

function Skill() {
  const [expertise, setExpertise] = useState({
    image: SKILLS[0].image,
    name: SKILLS[0].name,
    level: SKILLS[0].expertiseLevel,
  });
  const handleSkillClick = skill => {
    setExpertise({
      image: skill.image,
      name: skill.name,
      level: skill.expertiseLevel,
    });
  };
  return (
    <Container>
      <SkillWrapper>
        {SKILLS.map(skill => {
          if (skill.name === 'More') {
            return <ItemMore key={skill.id}>+ More</ItemMore>;
          }
          return (
            <Item
              key={skill.id}
              src={skill.image}
              alt={skill.name}
              onClick={() => handleSkillClick(skill)}
            />
          );
        })}
      </SkillWrapper>
      <Expertise>
        <h2>Expertise Level</h2>
        <Box>
          <Icon src={expertise.image} />
          <BoxLabel>
            <Label>{expertise.name}</Label>
            <StarRatingComponent name="" editing={false} starCount={10} value={expertise.level} />
          </BoxLabel>
        </Box>
      </Expertise>
    </Container>
  );
}

export default Skill;
