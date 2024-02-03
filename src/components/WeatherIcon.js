import React from 'react';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiWindy } from 'weather-icons-react';

function WeatherIcon({ icon }) {
    let weatherIcon;
    switch (icon) {
        case '01d':
        case '01n':
            weatherIcon = <WiDaySunny size={48} color='black' />;
            break;
        case '02d':
        case '02n':
        case '03d':
        case '03n':
            weatherIcon = <WiCloud size={48} color='black' />;
            break;
        case '04d':
        case '04n':
            weatherIcon = <WiCloud size={48} color='black' />;
            break;
        case '09d':
        case '09n':
        case '10d':
        case '10n':
            weatherIcon = <WiRain size={48} color='black' />;
            break;
        case '13d':
        case '13n':
            weatherIcon = <WiSnow size={48} color='black' />;
            break;
        case '50d':
        case '50n':
            weatherIcon = <WiWindy size={48} color='black' />;
            break;
        default:
            weatherIcon = <WiDaySunny size={48} color='black' />;
    }

    return (
        <div className="weather-icon">
            {weatherIcon}
        </div>
    );
}

export default WeatherIcon;
