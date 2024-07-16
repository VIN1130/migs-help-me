// src/components/ExampleCarouselImage.jsx

import React from 'react';

function ExampleCarouselImage({ text }) {
    return (
        <div style={{ height: '400px', backgroundColor: '#777', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {text}
        </div>
    );
}

export default ExampleCarouselImage;
