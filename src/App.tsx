import React, { useState } from 'react';
import './index.css';
import Intro from './components/Intro';
import Logs from './components/Logs';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  const [currImages, setCurrImages] = useState<string[]>([]);

  return (
    <div className="app-container">
      <div className="left-column">
        <Gallery images={currImages} />
      </div>
      <div className="right-column">
        <Intro />
        <Logs onProjectInView={setCurrImages} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
