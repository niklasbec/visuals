import React from 'react';
import './App.css';
import Home from './components/home';
import Footer from './components/footer';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <Home />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
