import styled from '@emotion/styled';
import StyledButton from '../Common/StyledButton';
import StyledInput from '../Common/StyledInput';
import StyledForm from '../Common/StyledForm';
import { colors } from '../../styles/theme';
import Logo from '../Common/Logo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 62rem;
  height: 77rem;

  border-radius: 10rem;

  box-shadow: 0 0.7rem 4.6rem 1.7rem #0000001a;

  background-color: #ffffff;
`;

const LogoPosition = styled.div`
  margin: 13rem auto 8rem auto;
`;

const Info = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.6rem;
  color: ${colors.google_blue};
`;

const Remember = styled.div`
  display: flex;
  margin-left: 10px;

  span {
    margin-left: 10px;
  }

  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;

    width: 2rem;
    height: 2rem;

    border: 1px solid ${colors.google_blue};
    border-radius: 0.6rem;
  }

  input[type='checkbox']:checked {
    background-color: ${colors.google_blue};
  }
`;

const Forgot = styled.div`
  margin-right: 5px;

  span {
    font-weight: bold;
  }
`;

const SignIn = () => {
  return (
    <Container>
      <LogoPosition>
        <Logo width={20} height={10} />
      </LogoPosition>
      <StyledForm>
        <StyledInput width={40} height={5} label="E-mail" type="text" />
        <StyledInput width={40} height={5} mt={25} label="Password" type="password" />
        <Info>
          <Remember>
            <input type="checkbox" />
            <span>Remember me</span>
          </Remember>
          <Forgot>
            <span>Forgot password?</span>
          </Forgot>
        </Info>
        <StyledButton type="submit" text="Login" />
      </StyledForm>
    </Container>
  );
};

export default SignIn;
