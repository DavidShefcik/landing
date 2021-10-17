import { useHistory } from 'react-router-dom';

import CenteredContainer, { CenteredAlignment } from '~/components/CenteredContainer';
import Title from '~/components/Title';
import SubTitle from '~/components/SubTitle';
import Button from '~/components/Button';

export default function NotFound() {
  const history = useHistory();

  return (
    <CenteredContainer backgroundColor="bg-gray-800">
      <Title>404!</Title>
      <SubTitle>That page could not be found!</SubTitle>
      <Button title="Go Back" onClick={() => history.replace('/')}>
        Go Back
      </Button>
    </CenteredContainer>
  );
}
