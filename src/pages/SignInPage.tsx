import styled from '@emotion/styled';
import SignIn from '../components/signIn';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const SignInPage = () => {
  return (
    <Container>
      <SignIn />
    </Container>
  );
};

export default SignInPage;
