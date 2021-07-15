import React,{useState} from 'react';
import './App.css';

import QuoteData from'./QuoteData'
import Quote from './Quote';
function App() {
  
  return (
    <div className="App">
      <main>
        <section className="container">
          <div className="title">
            <h2>Quotes</h2>
            <div className="underline"></div>
          </div>
          <Quote />

        </section>
      </main>
    </div>
  );
}

export default App;
