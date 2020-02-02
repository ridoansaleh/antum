import React from 'react';
import { Container, Item, Image, Label } from './styles/_hobbyStyle';
import HOBBIES from '../../data/hobbies';

function Hobby() {
  return (
    <Container>
      {HOBBIES.map(data => (
        <Item key={data.id}>
          <Image src={data.image} />
          <Label>{data.name}</Label>
        </Item>
      ))}
    </Container>
  );
}

export default Hobby;
