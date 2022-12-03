import styled from '@emotion/styled';
import { StyledInput } from '../auth/StyledInput';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50rem;
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

  width: 80%;
  height: auto;
`;

const InputContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);

  grid-gap: 1rem;
`;

const Input = styled(StyledInput)``;

const StyledButton = styled.button`
  margin-top: 2.5rem;
  width: 50%;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: white;
`;

const SignUp = () => {
  return (
    <Container>
      <Logo>Logo Position</Logo>
      <Title>KUGODS</Title>
      <StyledForm>
        <InputContainer>
          <Input type="text" placeholder="아이디" />
          <div className="_blank" />
          <Input type="password" placeholder="비밀번호" />
          <Input type="text" placeholder="이름" />
          <Input type="password" placeholder="비밀번호 확인" />
          <Input type="text" placeholder="학번" />
          <Input type="text" placeholder="학과" />
          <Input type="text" placeholder="승인코드" />
        </InputContainer>
        <StyledButton type="submit">회원가입</StyledButton>
      </StyledForm>
    </Container>
  );
};

export default SignUp;
