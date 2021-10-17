import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import CenteredContainer, { FlexDirection } from '~/components/CenteredContainer';
import Title from '~/components/Title';
import SubTitle from '~/components/SubTitle';
import Button from '~/components/Button';

import { GITHUB_URL, LINKEDIN_URL } from '~/constants/Profiles';

export default function Home() {
  return (
    <CenteredContainer backgroundColor="bg-gray-800">
      <Title>David Shefcik</Title>
      <SubTitle>Full Stack Web Developer</SubTitle>
      <CenteredContainer height="h-auto" mobileFlexDirection={FlexDirection.COLUMN} flexDirection={FlexDirection.ROW}>
        <Button
          title="GitHub"
          mediumWidth="w-auto"
          largeWidth="w-auto"
          onClick={() => window.open(GITHUB_URL, '_blank')}
        >
          <AiFillGithub color="white" size={30} />
        </Button>
        <Button
          title="LinkedIn"
          mediumWidth="w-auto"
          largeWidth="w-auto"
          onClick={() => window.open(LINKEDIN_URL, '_blank')}
        >
          <AiFillLinkedin color="white" size={30} />
        </Button>
      </CenteredContainer>
    </CenteredContainer>
  );
}
