import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const ChatApp = lazy(() => import('./pages/ChatApp'));
const Weather = lazy(() => import('./pages/Weather'));
const Collab = lazy(() => import('./pages/Collab'));
const Extension = lazy(() => import('./pages/Extension'));

// Loading component
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-spinner"></div>
    <p>Loading project...</p>
  </div>
);


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/collab" element={<Collab />} />
          <Route path="/extension" element={<Extension />} />
        </Routes>
      </Suspense>
    </BrowserRouter>

  );
}

export default App;
