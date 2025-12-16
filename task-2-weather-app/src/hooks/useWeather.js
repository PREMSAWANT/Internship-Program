import { useState } from 'react';
import { getWeatherByCity } from '../services/weatherApi';

/**
 * Custom hook for managing weather data and search history
 * @returns {Object} Weather state and control functions
 */
export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  /**
   * Fetch weather data for a city
   * @param {string} city - City name to search
   */
  const fetchWeather = async (city) => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
      
      // Update search history
      const newHistory = [city, ...searchHistory.filter(c => c.toLowerCase() !== city.toLowerCase())].slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Clear search history
   */
  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  return {
    weatherData,
    loading,
    error,
    searchHistory,
    fetchWeather,
    clearHistory
  };
};
