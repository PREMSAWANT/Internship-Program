import './BackToHome.css';

/**
 * Back to Home Navigation Button
 * Provides navigation back to the portfolio landing page
 */
function BackToHome() {
  const handleClick = () => {
    // Navigate to the root portfolio page
    window.location.href = '/../../index.html';
  };

  return (
    <button className="back-to-home-btn" onClick={handleClick} title="Back to Portfolio">
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      <span>Portfolio</span>
    </button>
  );
}

export default BackToHome;
