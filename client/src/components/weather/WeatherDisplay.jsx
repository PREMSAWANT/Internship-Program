import { getWeatherIconUrl } from '../../services/weatherApi';

import './WeatherDisplay.css';

/**
 * WeatherDisplay Component
 * Displays weather information in a beautiful card
 */
const WeatherDisplay = ({ data }) => {
  if (!data) return null;

  const {
    name,
    sys,
    main,
    weather,
    wind,
    dt
  } = data;

  // Format date
  const date = new Date(dt * 1000);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const weatherCondition = weather[0];
  const iconUrl = getWeatherIconUrl(weatherCondition.icon);

  return (
    <div className="weather-display">
      <div className="weather-card">
        {/* Header */}
        <div className="weather-header">
          <div className="location-info">
            <h2 className="city-name">{name}</h2>
            <p className="country-name">{sys.country}</p>
            <p className="date">{formattedDate}</p>
          </div>
        </div>

        {/* Main Weather */}
        <div className="weather-main">
          <div className="weather-icon-container">
            <img src={iconUrl} alt={weatherCondition.description} className="weather-icon" />
          </div>
          <div className="temperature-container">
            <h1 className="temperature">{Math.round(main.temp)}°</h1>
            <p className="weather-description">{weatherCondition.description}</p>
          </div>
        </div>

        {/* Weather Details */}
        <div className="weather-details">
          <div className="detail-item">
            <div className="detail-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20"></path>
              </svg>
            </div>
            <div className="detail-info">
              <p className="detail-label">Feels Like</p>
              <p className="detail-value">{Math.round(main.feels_like)}°C</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
            </div>
            <div className="detail-info">
              <p className="detail-label">Humidity</p>
              <p className="detail-value">{main.humidity}%</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
              </svg>
            </div>
            <div className="detail-info">
              <p className="detail-label">Wind Speed</p>
              <p className="detail-value">{wind.speed} m/s</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="detail-info">
              <p className="detail-label">Pressure</p>
              <p className="detail-value">{main.pressure} hPa</p>
            </div>
          </div>
        </div>

        {/* Temperature Range */}
        <div className="temp-range">
          <div className="temp-range-item">
            <span className="range-label">Min</span>
            <span className="range-value">{Math.round(main.temp_min)}°C</span>
          </div>
          <div className="temp-range-divider"></div>
          <div className="temp-range-item">
            <span className="range-label">Max</span>
            <span className="range-value">{Math.round(main.temp_max)}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
