import React from 'react';
import { ProfileContainer, Photo, ProfileLink } from './styles/_profileStyle';

function Profile() {
  return (
    <ProfileContainer>
      <Photo src="https://media.licdn.com/dms/image/C5103AQHozOVNgZW-9w/profile-displayphoto-shrink_100_100/0?e=1580342400&v=beta&t=GcCxBn_13ib2SYzkGXTvRyUBqJNWtve2WyBAJPgkYXQ" />
      <div>
        <h2>Ridoan Saleh Nasution</h2>
        <div>
          <ProfileLink href="https://www.linkedin.com/in/ridoan-saleh-n-32897385/" target="_blank">
            LinkedIn
          </ProfileLink>
          <ProfileLink href="https://medium.com/@ridoansalehnst" target="_blank">
            Medium
          </ProfileLink>
          <ProfileLink href="https://github.com/ridoansaleh" target="_blank">
            Github
          </ProfileLink>
        </div>
      </div>
    </ProfileContainer>
  );
}

export default Profile;
