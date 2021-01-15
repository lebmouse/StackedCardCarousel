import React from 'react';
import './styles.css';
import styled from 'styled-components';

export default function App() {
  return (
    <Main>
      <h1>Stacked Card Carousel</h1>
    </Main>
  );
}

const Main = styled.main`
  margin: auto;
  width: 100%;
  max-width: 425px;
`;
