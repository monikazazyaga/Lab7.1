import React, { useState } from 'react';

const ColorChangeButton = () => {
    const [backgroundColor, setBackgroundColor] = useState('red');

    const handleButtonClick = () => {
        setBackgroundColor(backgroundColor === 'red' ? 'green' : 'red');
    };

    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: 'white',
        padding: '10px',
        border: 'none',
        cursor: 'pointer'
    };

    return (
        <button style={buttonStyle} onClick={handleButtonClick}>
            Change Color
        </button>
    );
};

export default ColorChangeButton;