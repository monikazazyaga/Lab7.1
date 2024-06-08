import React from 'react';
import Square from './components/Square';
import OnlyEven from './components/OnlyEven';
import Temperature from './components/Temperature';
import ColorChangeButton from './components/ColorChangeButton';

const App = () => {
    return (
        <div>
            <h2>Task 1: Square</h2>
            <Square n={3} />
            <h2>Task 2: Only Even</h2>
            <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
            <h2>Task 3: Temperature Display</h2>
            <Temperature t={451} />
            <h2>Task 4: Color Change Button</h2>
            <ColorChangeButton />
        </div>
    );
};

export default App;