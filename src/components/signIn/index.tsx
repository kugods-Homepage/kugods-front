import styled from '@emotion/styled';
import { StyledInput } from '../auth/StyledInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 25rem;
  height: 30rem;

  background-color: lightgray;
`;

const Logo = styled.div`
  width: 100%;
  height: 7rem;

  text-align: center;
`;

const Title = styled.div`
  width: 100%;
  height: 1rem;

  text-align: center;
`;

const StyledForm = styled.form`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  height: auto;
`;

const Input = styled(StyledInput)`
  & + & {
    margin-top: 1rem;
  }
`;

const StyledButton = styled.button`
  margin-top: 2.5rem;
  width: 100%;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: white;
`;

const SignIn = () => {
  return (
    <Container>
      <Logo>Logo Position</Logo>
      <Title>KUGODS</Title>
      <StyledForm>
        <Input type="text" placeholder="로그인" />
        <Input type="password" placeholder="비밀번호" />
        <StyledButton type="submit">로그인</StyledButton>
      </StyledForm>
    </Container>
  );
};

export default SignIn;
