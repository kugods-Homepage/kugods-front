import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Link to={'/sign-in'}>Sign In</Link>
      <Link to={'/sign-up'}>Sign Up</Link>
      <Link to={'/main'}>Main Page</Link>
    </Container>
  );
};

export default Home;
