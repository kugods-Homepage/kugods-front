import styled from '@emotion/styled';
import { StyledInput } from '../auth/StyledInput';
import { StyledButton } from '../auth/StyledButton';
import { StyledForm } from '../auth/StyledForm';

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

const Form = styled(StyledForm)`
  width: 65%;
`;

const Input = styled(StyledInput)`
  & + & {
    margin-top: 1rem;
  }
`;

const Button = styled(StyledButton)`
  width: 100%;
`;

const SignIn = () => {
  return (
    <Container>
      <Logo>Logo Position</Logo>
      <Title>KUGODS</Title>
      <Form>
        <Input type="text" placeholder="로그인" />
        <Input type="password" placeholder="비밀번호" />
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
