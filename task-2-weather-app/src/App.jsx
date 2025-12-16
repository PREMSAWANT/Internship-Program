import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ThemeToggle from './components/ThemeToggle';
import { useWeather } from './hooks/useWeather';
import { useTheme } from './hooks/useTheme';
import './App.css';

/**
 * Main Weather Application Component
 */
function App() {
  const { weatherData, loading, error, searchHistory, fetchWeather } = useWeather();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="app">
      {/* Theme Toggle */}
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="title-icon">
              <path d="M2.5 2v6h20V2M2.5 15h8M2.5 20h5M16 14a4 4 0 0 1 8 0c0 1.657-1.343 3-4 3-2 0-3-1.343-3-3h-1Z"></path>
            </svg>
            Weather Forecast
          </h1>
          <p className="app-subtitle">Get real-time weather information for any city</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {/* Search Bar */}
        <SearchBar onSearch={fetchWeather} searchHistory={searchHistory} />

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Fetching weather data...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="error-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p className="error-message">{error}</p>
          </div>
        )}

        {/* Weather Display */}
        {!loading && !error && weatherData && <WeatherDisplay data={weatherData} />}

        {/* Initial State */}
        {!loading && !error && !weatherData && (
          <div className="initial-state">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="initial-icon">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
            <h2 className="initial-title">Search for a City</h2>
            <p className="initial-description">
              Enter a city name above to view current weather conditions
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Powered by OpenWeatherMap API • Built with React</p>
      </footer>
    </div>
  );
}

export default App;
