import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { colors, color_type } from '../styles/theme';

export const Rectangle = styled.div<{
  width?: number;
  height?: number;
  isTop?: boolean;
  br?: number;
  bc?: color_type;
  center?: boolean;
}>`
  width: ${({ width }) => (width ? width + 'rem' : '100%')};
  height: ${({ height }) => (height ? height + 'rem' : '100%')};
  border-radius: ${({ br }) => br + 'rem'};
  background-color: ${({ bc }) => bc && colors[bc]};

  ${({ isTop }) =>
    isTop &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
    `}

  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const Circle = styled.div<{ radius: number; bc?: color_type; center?: boolean }>`
  width: ${({ radius }) => radius + 'rem'};
  height: ${({ radius }) => radius + 'rem'};
  border-radius: 50%;

  background-color: ${({ bc }) => bc && colors[bc]};

  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
