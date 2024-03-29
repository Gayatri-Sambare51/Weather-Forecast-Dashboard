import React from 'react';

function ToggleUnitButton({ unit, onToggle }) {
    return (
        <button onClick={onToggle}>
            {unit === 'Fahrenheit' ? 'Switch to Celsius' : 'Switch to Fahernheit'}
        </button>
    );
}

export default ToggleUnitButton;
