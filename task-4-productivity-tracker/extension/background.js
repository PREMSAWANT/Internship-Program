/**
 * Background Service Worker (Manifest V3)
 * Tracks active tab time and manages productivity data
 */

// Track current active tab
let currentTabId = null;
let currentDomain = null;
let startTime = null;

// Storage key
const STORAGE_KEY = 'productivity_data';

/**
 * Track tab activation
 */
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  await saveCurrentSession();
  
  const tab = await chrome.tabs.get(activeInfo.tabId);
  startNewSession(tab);
});

/**
 * Track tab updates (URL changes)
 */
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.url && tabId === currentTabId) {
    await saveCurrentSession();
    startNewSession(tab);
  }
});

/**
 * Track window focus changes
 */
chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    // Browser lost focus
    await saveCurrentSession();
    currentTabId = null;
    currentDomain = null;
    startTime = null;
  } else {
    // Browser gained focus
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      startNewSession(tab);
    }
  }
});

/**
 * Start a new tracking session
 */
function startNewSession(tab) {
  currentTabId = tab.id;
  currentDomain = extractDomain(tab.url);
  startTime = Date.now();
}

/**
 * Save current session to storage
 */
async function saveCurrentSession() {
  if (!currentDomain || !startTime) return;
  
  const timeSpent = Math.floor((Date.now() - startTime) / 1000); // seconds
  if (timeSpent < 1) return; // Ignore very short sessions
  
  const data = await chrome.storage.local.get(STORAGE_KEY);
  const productivityData = data[STORAGE_KEY] || {};
  const today = new Date().toISOString().split('T')[0];
  
  if (!productivityData[today]) {
    productivityData[today] = {};
  }
  
  if (!productivityData[today][currentDomain]) {
    productivityData[today][currentDomain] = 0;
  }
  
  productivityData[today][currentDomain] += timeSpent;
  
  await chrome.storage.local.set({ [STORAGE_KEY]: productivityData });
}

/**
 * Extract domain from URL
 */
function extractDomain(url) {
  if (!url) return 'unknown';
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch (e) {
    return 'unknown';
  }
}

/**
 * Periodic save (every minute)
 */
chrome.alarms.create('save-session', { periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'save-session') {
    saveCurrentSession();
    if (currentDomain && startTime) {
      startTime = Date.now(); // Reset start time
    }
  }
});

console.log('Productivity Tracker background script loaded');
