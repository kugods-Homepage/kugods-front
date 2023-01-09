import styled from '@emotion/styled/macro';
import { colors } from '../../styles/theme';

const Button = styled.button<{ mt?: number }>`
  margin-top: ${({ mt = 80 }) => mt + 'px'};

  width: 26rem;
  height: 6rem;

  border-radius: 3rem;

  font-size: 2rem;
  color: ${colors.white};
  background-color: ${colors.google_blue};
`;

interface IProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  mt?: number;
}

const StyledButton: React.FC<IProps> = ({ text, type, mt }) => {
  return (
    <Button type={type} mt={mt}>
      {text}
    </Button>
  );
};

export default StyledButton;
