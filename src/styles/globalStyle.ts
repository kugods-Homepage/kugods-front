import { css } from '@emotion/react';

export const globalStyle = css`
  html {
    font-size: 10px;
  }

  @media (max-width: 1440px) {
    html {
      font-size: 7px;
    }
  }

  @media (max-width: 1024px) {
    html {
      font-size: 6px;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 5px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 4px;
    }
  }

  body {
    margin: 0 auto;

    width: 100vw;
    height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Noto Sans KR', sans-serif;
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
