import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header />

      {/* Body */}
      <div className='app__body'>
        
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}

        {/* Widgets */}

      </div>

    </div>
  );
}

export default App;
