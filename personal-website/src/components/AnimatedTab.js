import React, { useState, useEffect, useRef } from 'react';
import AnimatedBox from './AnimatedBox';

function AnimatedTab() {
    const boxes = [
        { src: 'image1.jpg', alt: 'Animated Box 1' },
        { src: 'image2.jpg', alt: 'Animated Box 2' },
        { src: 'image3.jpg', alt: 'Animated Box 3' },
        { src: 'image4.jpg', alt: 'Animated Box 4' },
        { src: 'image5.jpg', alt: 'Animated Box 5' }
      ];

    return (
        <div style={{height: '1000px'}}>
            <h2>Photo Sets</h2>
            <p>Scroll down to see my collection of photos!</p>
            {boxes.map((box, index) => (
                <AnimatedBox key={index} src={box.src} alt={box.alt} />
            ))}
        </div>
    );
};

export default AnimatedTab;
// this is the animated tab, out of all the tabs 