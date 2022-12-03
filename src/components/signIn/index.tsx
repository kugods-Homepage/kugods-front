import styled from '@emotion/styled';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

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

const StyledInput = styled.input`
  padding: 0 0.5rem;
  height: 2rem;

  border-radius: 0.5rem;

  & + & {
    margin-top: 1rem;
  }
`;

const StyledButton = styled.button`
  margin-top: 2.5rem;

  border-radius: 0.5rem;

  height: 2rem;
`;

const SignInPage = () => {
  return (
    <OuterContainer>
      <Container>
        <Title>KUGODS</Title>
        <StyledForm>
          <StyledInput placeholder="ID" />
          <StyledInput placeholder="password" />
          <StyledButton type="submit">로그인</StyledButton>
        </StyledForm>
      </Container>
    </OuterContainer>
  );
};

export default SignInPage;
