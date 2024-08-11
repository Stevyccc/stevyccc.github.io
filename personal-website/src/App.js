import React, { useState, useEffect, useRef } from 'react';
import TabsWithAnimation from './components/TabsWithAnimation';

import AnimatedBox from './components/AnimatedBox';
// import './App.css';

const App = () => {
  return (
    <div 
    style={{fontFamily: 'Arial, sans-serif',
            padding: '20px'}}>
    <h1>Zehua Cheng's Personal Website</h1>
    <TabsWithAnimation />
    </div>
  )
}

export default App;