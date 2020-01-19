import React from 'react';
import { DescContainer } from './styles/_descriptionStyle';

function Description() {
  return (
    <DescContainer>
      <p>
        He is a Website Developer with 3+ years of experiences on professional level and counting
        on. Most of those years, he worked as a Frontend (AngularJS and React). Currently, he works
        as a Fullstack JavaScript Developer. He lives in{' '}
        <a href="https://id.wikipedia.org/wiki/Kota_Batam" target="_blank">
          Batam
        </a>{' '}
        (Indonesia).
      </p>
      <p>
        He have been work for multi size companies from small startup, unicorn, and corporate. No
        suprise, he have learned and build products such as luxury clothes online rental, financial
        technology services and now insurance.
      </p>
    </DescContainer>
  );
}

export default Description;
