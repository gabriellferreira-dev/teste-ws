import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import { CarsProvider } from './context/CarsProvider';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <CarsProvider>
        <main>
          <Header />
          <Content />
        </main>
      </CarsProvider>
    </>
  );
}

export default App;
