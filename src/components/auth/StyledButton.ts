import styled from '@emotion/styled';

interface IProps {
  height?: string;
}

export const StyledButton = styled.button<IProps>`
  height: ${({ height }) => height || '2rem'};

  margin-top: 2.5rem;
  border-radius: 0.5rem;
  background-color: white;
`;