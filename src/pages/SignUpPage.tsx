import styled from '@emotion/styled';
import SignUp from '../components/signUp';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const SignUpPage = () => {
  return (
    <Container>
      <SignUp />
    </Container>
  );
};

export default SignUpPage;
