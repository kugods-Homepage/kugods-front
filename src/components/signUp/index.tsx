import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 60%;

  background-color: lightgray;
`;

const Title = styled.div`
  height: 100px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

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

const StyledInput = styled.input`
  padding: 0 0.5rem;
  height: 2rem;

  border-radius: 0.5rem;
`;

const StyledButton = styled.button`
  margin-top: 2.5rem;

  border-radius: 0.5rem;

  height: 2rem;
`;

const SignUp = () => {
  return (
    <Container>
      <Title>KUGODS</Title>
      <StyledForm>
        <InputContainer>
          <StyledInput type="text" placeholder="아이디" />
          <div className="_blank" />
          <StyledInput type="password" placeholder="비밀번호" />
          <StyledInput type="password" placeholder="비밀번호 확인" />
          <StyledInput type="text" placeholder="이름" />
          <StyledInput type="text" placeholder="학번" />
          <StyledInput type="text" placeholder="학과" />
          <StyledInput type="text" placeholder="승인코드" />
        </InputContainer>
        <StyledButton type="submit">회원가입</StyledButton>
      </StyledForm>
    </Container>
  );
};

export default SignUp;
