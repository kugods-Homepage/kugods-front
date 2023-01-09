import styled from '@emotion/styled/macro';
import { colors } from '../../styles/theme';

interface Props {
  width: number;
  height: number;
}

const Container = styled.div<Props>`
  width: ${({ width }) => width + 'rem'};
  height: ${({ height }) => height + 'rem'};
  position: relative;

  .icon {
    width: ${({ width }) => width / 2 + 'rem'};
    height: ${({ height }) => height / 3 + 'rem'};
    border-radius: ${({ height }) => height / 6 + 'rem'};
    position: absolute;
  }

  .red {
    left: 0;
    top: ${({ height }) => height / 6 + 'rem'};
    background-color: ${colors.google_red};
    transform: rotate(150deg);
    z-index: 0;
  }

  .blue {
    left: 0;
    top: ${({ height }) => height / 2 + 'rem'};
    background-color: ${colors.google_blue};
    transform: rotate(30deg);
    z-index: 1;
  }

  .green {
    right: 0;
    top: ${({ height }) => height / 6 + 'rem'};
    background-color: ${colors.google_green};
    transform: rotate(30deg);
    z-index: 1;
  }

  .yellow {
    right: 0;
    top: ${({ height }) => height / 2 + 'rem'};
    background-color: ${colors.google_yellow};
    transform: rotate(150deg);
    z-index: 0;
  }
`;

interface IProps {
  width: number;
  height: number;
}

const Logo: React.FC<IProps> = ({ width, height }) => {
  return (
    <Container width={width} height={height}>
      <div className="icon red" />
      <div className="icon blue" />
      <div className="icon green" />
      <div className="icon yellow" />
    </Container>
  );
};

export default Logo;
