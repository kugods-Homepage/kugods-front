import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MainPage = () => {
  return (
    <Container>
      <Link to={'/sign-in'}>Sign In</Link>
      <Link to={'/sign-up'}>Sign Up</Link>
    </Container>
  );
};

export default MainPage;
