import styled from '@emotion/styled/macro';
import { colors } from '../../styles/theme';

const Container = styled.div<{ width: number; height: number; mt?: number }>`
  width: ${({ width }) => width + 'rem'};
  height: ${({ height }) => height + 'rem'};

  position: relative;

  margin-top: ${({ mt }) => (mt ? mt + 'px' : '0')};
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

const Input = styled.input<{ width: number; height: number; fs?: number }>`
  padding: 0 ${({ width }) => width / 20 + 'rem'};
  width: 100%;
  height: 100%;

  font-size: ${({ fs }) => (fs ? fs + 'rem' : '2rem')};
  border: 1px solid ${colors.google_blue};
  border-radius: ${({ height }) => height / 2 + 'rem'};
`;

interface IProps {
  width: number;
  height: number;
  type: string;
  label?: string;
  placeholder?: string;
  mt?: number;
  fs?: number;
}

const StyledInput: React.FC<IProps> = ({ width, height, label, placeholder, type, mt, fs }) => {
  return (
    <Container width={width} height={height} mt={mt}>
      {label && <Label>{label}</Label>}
      <Input width={width} height={height} type={type} placeholder={placeholder} fs={fs} />
    </Container>
  );
};

export default StyledInput;
