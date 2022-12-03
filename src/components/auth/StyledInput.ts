import styled from '@emotion/styled';

interface IProps {
  width?: string;
  height?: string;
}

export const StyledInput = styled.input<IProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '2rem'};

  padding: 0 0.5rem;
  border-radius: 0.5rem;
`;
