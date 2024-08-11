import React, { useState, useEffect, useRef } from 'react';

function Button({label, isActive, onClick}) {
    return (
        <button 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: isActive ? '#e0e0e0' : '#f0f0f0',
            border: 'none',
            marginRight: '5px',
            cursor: 'pointer'
          }} 
          onClick={onClick}
        >
          {label}
        </button>
      );
    };

export default Button;