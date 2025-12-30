import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Extension.css';

/**
 * Extension Page - Chrome Extension Installation Instructions
 */
function Extension() {
  const [copied, setCopied] = useState(false);

  const copyPath = () => {
    navigator.clipboard.writeText('extension/');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="extension-page">
      <Link to="/" className="back-to-home">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Portfolio</span>
      </Link>

      <div className="extension-container">
        <header className="extension-header">
          <div className="extension-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="9"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
          </div>
          <h1>Chrome Productivity Tracker</h1>
          <p className="extension-subtitle">
            Automatic website time tracking extension with daily statistics
          </p>
        </header>

        <section className="installation-section">
          <h2>📦 Installation Instructions</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Open Chrome Extensions</h3>
                <p>Navigate to <code>chrome://extensions/</code> in your Chrome browser</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Enable Developer Mode</h3>
                <p>Toggle the "Developer mode" switch in the top-right corner</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Load Unpacked Extension</h3>
                <p>Click "Load unpacked" button and select the extension folder:</p>
                <div className="path-copy-wrapper">
                  <code className="path-code">extension/</code>
                  <button onClick={copyPath} className={`copy-btn ${copied ? 'copied' : ''}`}>
                    {copied ? '✓ Copied' : 'Copy Path'}
                  </button>
                </div>


              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Start Tracking</h3>
                <p>The extension will automatically start tracking your browsing time!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>✨ Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3>Automatic Tracking</h3>
              <p>Tracks time spent on websites automatically in the background</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Daily Statistics</h3>
              <p>View comprehensive daily productivity statistics</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌙</div>
              <h3>Dark Mode UI</h3>
              <p>Sleek dark mode interface for comfortable viewing</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💾</div>
              <h3>Local Storage</h3>
              <p>All data stored locally in your browser for privacy</p>
            </div>
          </div>
        </section>

        <section className="tech-section">
          <h2>🛠️ Tech Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">Chrome Extension API</span>
            <span className="tech-tag">Manifest V3</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Local Storage</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Extension;
