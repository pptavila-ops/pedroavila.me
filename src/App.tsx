import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Logs from './components/Logs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Intro />
      <Logs />
      <Footer />
    </div>
  );
}

export default App;
