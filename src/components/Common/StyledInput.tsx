import styled from '@emotion/styled/macro';
import { colors } from '../../styles/theme';

const Container = styled.div<{ width: number; height: number; mt?: number }>`
  width: ${({ width }) => width + 'rem'};
  height: ${({ height }) => height + 'rem'};

  position: relative;

  & + & {
    margin-top: ${({ mt }) => (mt ? mt + 'px' : '30px')};
  }
`;

const Label = styled.label`
  position: absolute;
  top: -6px;
  left: 30px;

  width: auto;
  height: 2rem;

  text-align: center;
  font-size: 1.6rem;
  color: ${colors.google_blue};
  background-color: ${colors.white};
`;

const Input = styled.input`
  padding: 0 20px;
  width: 100%;
  height: 100%;

  font-size: 1.6rem;
  border: 1px solid ${colors.google_blue};
  border-radius: 2.5rem;
`;

interface IProps {
  width: number;
  height: number;
  type: string;
  label: string;
  mt?: number;
}

const StyledInput: React.FC<IProps> = ({ width, height, label, type, mt }) => {
  return (
    <Container width={width} height={height} mt={mt}>
      <Label>{label}</Label>
      <Input type={type} />
    </Container>
  );
};

export default StyledInput;
