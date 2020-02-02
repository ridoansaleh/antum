import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, Name, PhotoContainer, Job, LinksWrapper, Link } from './styles/_profileStyle';

function Profile() {
  return (
    <>
      <Wrapper>
        <Name>Ridoan Saleh Nasution</Name>
        <PhotoContainer />
      </Wrapper>
      <Job>Web Developer</Job>
      <LinksWrapper>
        <Link href="https://Link.com/ridoansaleh" target="_blank">
          <FontAwesomeIcon icon={faLink} /> Github
        </Link>
        <Link href="https://codepen.io/ridoansaleh" target="_blank">
          <FontAwesomeIcon icon={faLink} /> Codepen
        </Link>
        <Link href="https://stackoverflow.com/users/4501402/ridoansaleh" target="_blank">
          <FontAwesomeIcon icon={faLink} /> Stackoverflow
        </Link>
      </LinksWrapper>
    </>
  );
}

export default Profile;
