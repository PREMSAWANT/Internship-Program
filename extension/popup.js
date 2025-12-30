/**
 * Popup Script - Display productivity statistics
 */

const STORAGE_KEY = 'productivity_data';

/**
 * Load and display today's productivity data
 */
async function loadData() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const data = await chrome.storage.local.get(STORAGE_KEY);
  const todayData = data[STORAGE_KEY]?.[today] || {};

  displayData(todayData);
}

/**
 * Display productivity data
 */
function displayData(todayData) {
  const websiteList = document.getElementById('website-list');
  const totalTimeEl = document.getElementById('total-time');

  // Calculate total time
  const totalSeconds = Object.values(todayData).reduce((sum, time) => sum + time, 0);
  totalTimeEl.textContent = formatTime(totalSeconds);

  // Display website list
  if (Object.keys(todayData).length === 0) {
    websiteList.innerHTML = '<div class="no-data">No activity tracked yet today</div>';
    return;
  }

  // Sort by time spent
  const sorted = Object.entries(todayData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10); // Top 10 websites

  websiteList.innerHTML = sorted
    .map(([domain, seconds]) => `
      <div class="website-item">
        <span class="website-name">${domain}</span>
        <span class="time-spent">${formatTime(seconds)}</span>
      </div>
    `)
    .join('');
}

/**
 * Format seconds to readable time
 */
function formatTime(seconds) {
  if (seconds < 60) return `${seconds}s`;
  
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
}

/**
 * Clear today's data
 */
async function clearTodayData() {
  if (!confirm('Are you sure you want to clear today\'s data?')) return;
  
  const today = new Date().toISOString().split('T')[0];
  const data = await chrome.storage.local.get(STORAGE_KEY);
  const productivityData = data[STORAGE_KEY] || {};
  
  delete productivityData[today];
  
  await chrome.storage.local.set({ [STORAGE_KEY]: productivityData });
  loadData();
}

// Event listeners
document.getElementById('clear-button').addEventListener('click', clearTodayData);

// Reload data every 5 seconds while popup is open
setInterval(loadData, 5000);

// Initial load
loadData();
