// Home.js
import React from 'react';
import TabsWithAnimation from './TabsWithAnimation';

function Home() {
  return (
    <div 
    style={{fontFamily: 'Arial, sans-serif',
            padding: '20px'}}>
    <h2>Home Page</h2>
    <TabsWithAnimation />
    </div>
);
};

export default Home;