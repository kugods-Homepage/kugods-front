import React from 'react';
import styled from '@emotion/styled';
import logoImg from '../../Assets/Images/logoimg.png';

const Home = () => {
  return (
    <Container>
      <Title>This is home component</Title>
      <img src={logoImg} alt="img" />
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const Title = styled.h1`
  font-size: 5rem;
`;