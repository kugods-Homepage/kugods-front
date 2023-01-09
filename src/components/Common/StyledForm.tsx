import styled from '@emotion/styled/macro';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IProps {
  children: React.ReactNode;
}

const StyledForm: React.FC<IProps> = ({ children }) => {
  return <Form>{children}</Form>;
};

export default StyledForm;
