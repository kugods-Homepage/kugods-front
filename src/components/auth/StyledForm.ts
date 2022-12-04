import styled from '@emotion/styled';

interface IProps {
  height?: string;
}

export const StyledForm = styled.form<IProps>`
  height: ${({ height }) => height || 'auto'};

  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;