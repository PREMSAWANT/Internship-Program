# Weather Application

A beautiful, responsive weather application built with React and OpenWeatherMap API. Features real-time weather data, dark/light mode toggle, and search history.

![Weather App](https://img.shields.io/badge/React-18-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

- **Real-time Weather Data**: Get accurate weather information for any city worldwide
- **Beautiful UI**: Modern, glassmorphic design with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Search History**: Quick access to recently searched cities
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Comprehensive Weather Info**:
  - Current temperature and feels-like temperature
  - Weather condition with animated icons
  - Humidity levels
  - Wind speed
  - Atmospheric pressure
  - Min/Max temperatures

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with Vite
- **Styling**: Vanilla CSS with CSS Variables for theming
- **API**: OpenWeatherMap API
- **State Management**: React Hooks (useState, useEffect)
- **Local Storage**: For theme preference and search history

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (free tier available)

## 🛠️ Installation & Setup

### 1. Clone or Navigate to Project

```bash
cd task-2-weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Get OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Create a free account
3. Navigate to API Keys section
4. Generate a new API key

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit the `.env` file and add your API key:

```env
VITE_WEATHER_API_KEY=your_actual_api_key_here
```

**Important**: Never commit your `.env` file to version control!

### 5. Run the Application

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 📱 Usage

1. **Search for a City**: Type any city name in the search bar and press Enter or click the search button
2. **View Weather Details**: See comprehensive weather information displayed in a beautiful card
3. **Toggle Theme**: Click the sun/moon icon in the top-right corner to switch between dark and light modes
4. **Use Search History**: Click the search input to see recently searched cities and quickly re-search them

## 🗂️ Project Structure

```
task-2-weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx         # City search component
│   │   ├── SearchBar.css
│   │   ├── WeatherDisplay.jsx    # Weather data display
│   │   ├── WeatherDisplay.css
│   │   ├── ThemeToggle.jsx       # Dark/light mode toggle
│   │   └── ThemeToggle.css
│   ├── hooks/
│   │   ├── useWeather.js         # Weather data management hook
│   │   └── useTheme.js           # Theme management hook
│   ├── services/
│   │   └── weatherApi.js         # OpenWeatherMap API integration
│   ├── App.jsx                   # Main application component
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.example                  # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Code Highlights

### Custom Hooks

**useWeather Hook**: Manages weather data, loading states, errors, and search history
```javascript
const { weatherData, loading, error, searchHistory, fetchWeather, clearHistory } = useWeather();
```

**useTheme Hook**: Manages dark/light theme with localStorage persistence
```javascript
const { isDark, toggleTheme } = useTheme();
```

### API Service

Centralized API calls with error handling:
```javascript
export const getWeatherByCity = async (city) => {
  // Fetch weather data with error handling
}
```

## 🌐 API Information

This application uses the [OpenWeatherMap Current Weather Data API](https://openweathermap.org/current).

**Endpoints Used**:
- `GET /data/2.5/weather` - Current weather data by city name

**Data Includes**:
- Temperature (Celsius)
- Weather conditions
- Humidity
- Wind speed
- Atmospheric pressure
- Sunrise/sunset times

## 🎯 Features Breakdown

### Error Handling
- Invalid city names display user-friendly error messages
- Network errors are caught and displayed
- API rate limiting handled gracefully

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly UI elements

### Performance Optimizations
- Efficient state management
- Debounced API calls
- Minimal re-renders using React best practices

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🐛 Troubleshooting

**Problem**: "City not found" error
- **Solution**: Check spelling of city name, try adding country code (e.g., "London, UK")

**Problem**: API key not working
- **Solution**: Ensure `.env` file is in root directory and variable name is `VITE_WEATHER_API_KEY`

**Problem**: Theme not persisting
- **Solution**: Check browser's localStorage is enabled

## 📄 License

This project is created for internship evaluation purposes.

## 👤 Author

**Prem Sawant**
- GitHub: [@PREMSAWANT](https://github.com/PREMSAWANT)

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from [Feather Icons](https://feathericons.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

**Note**: This is a demonstration project built as part of an internship program to showcase full-stack development skills.
