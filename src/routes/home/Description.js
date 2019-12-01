import React from 'react';
import { DescContainer } from './styles/_descriptionStyle';

function Description() {
  return (
    <DescContainer>
      <p>
        He is a JavaScript Developer with 3 years of experiences on professional level. Most of
        those years, he worked as Frontend (AngularJS and React). Currently, he lives in{' '}
        <a href="https://id.wikipedia.org/wiki/Kota_Batam" target="_blank">
          Batam
        </a>{' '}
        (Indonesia).
      </p>
      <p>
        He have been work for multi size company from small startup, unicorn, and corporate. No
        suprise, he have learned and build product such for luxury clothes online rental, financial
        technology services and now insurance.
      </p>
    </DescContainer>
  );
}

export default Description;
