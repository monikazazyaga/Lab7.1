import React from 'react';

const Temperature = ({ t }) => {
    const textStyle = {
        color: t < 0 ? 'blue' : 'red'
    };

    return <div style={textStyle}>{t}</div>;
};

export default Temperature;