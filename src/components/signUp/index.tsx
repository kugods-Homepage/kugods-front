import styled from '@emotion/styled';
import Logo from '../Common/Logo';
import StyledInput from '../Common/StyledInput';
import StyledButton from '../Common/StyledButton';
import StyledForm from '../Common/StyledForm';
import { colors } from '../../styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 128rem;
  height: 77rem;
  border-radius: 38.5rem;
  box-shadow: 0 0.7rem 4.6rem 1.7rem rgba(0, 0, 0, 0.1);
  background-color: ${colors.white};
`;

const LogoPosition = styled.div`
  margin: 10rem 0 8rem 0;
  width: 20rem;
  height: 10rem;
`;

const InputContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(2, 1fr);

  grid-row-gap: 10px;
  grid-column-gap: 50px;

  .password {
    position: relative;

    .info {
      position: absolute;
      top: -40px;
      margin-left: 20px;
      font-size: 2rem;
      color: ${colors.google_blue};
    }
  }
`;

const SignUp = () => {
  return (
    <Container>
      <LogoPosition>
        <Logo width={20} height={10} />
      </LogoPosition>
      <StyledForm>
        <InputContainer>
          <StyledInput width={44} height={5} type="text" placeholder="E-mail" />
          <div className="_blank" />
          <div className="password">
            <label className="info">A password should be alphanumeric.</label>
            <StyledInput width={44} height={5} type="password" placeholder="Password" />
          </div>
          <StyledInput width={44} height={5} type="password" placeholder="Password (again)" />
          <StyledInput width={44} height={5} type="text" placeholder="Name" />
          <StyledInput width={44} height={5} type="text" placeholder="Major" />
          <StyledInput width={44} height={5} type="text" placeholder="Student ID Number" />
          <StyledInput width={44} height={5} type="text" placeholder="Code" />
        </InputContainer>
        <StyledButton type="submit" text="Sign Up" mt={100} />
      </StyledForm>
    </Container>
  );
};

export default SignUp;
