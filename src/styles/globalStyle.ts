import { css } from '@emotion/react';

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    margin: 0 auto;

    width: 60vw;
    height: 100vh;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    border: none;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
  }

  ul,
  ol,
  li {
    list-style: none;
  }
`;
