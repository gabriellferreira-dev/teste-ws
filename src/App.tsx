import React from 'react';
import './App.css';
import Header from './components/Header';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
      </main>
    </>
  );
}

export default App;
