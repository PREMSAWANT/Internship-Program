# Chrome Productivity Tracker Extension

A Chrome extension that tracks time spent on websites and provides productivity insights. Built with Manifest V3 and optional MERN stack backend for cross-device synchronization.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green) ![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue)

## 🌟 Features

### Chrome Extension
- ⏱️ **Automatic Time Tracking**: Tracks time spent on each website automatically
- 📊 **Daily Statistics**: View productivity breakdown by website
- 🎨 **Beautiful UI**: Modern, gradient design with clear data visualization
- 💾 **Local Storage**: Data stored securely in Chrome's local storage
- 🔄 **Real-Time Updates**: Statistics update every 5 seconds
- 🗑️ **Data Management**: Clear today's data with one click

### Future Enhancements (Backend Integration)
- 🔐 User authentication
- ☁️ Cloud sync across devices
- 📈 Weekly/monthly reports
- 🚫 Website blocking feature
- 📱 Cross-browser support

## 🚀 Tech Stack

### Extension
- **Manifest V3** (latest Chrome extension standard)
- **Service Worker** for background tracking
- **Chrome Storage API** for data persistence
- **Chrome Tabs API** for activity tracking
- **Chrome Alarms API** for periodic saves

### Backend (Optional - for future implementation)
- **MongoDB** for data storage
- **Express.js** for REST APIs
- **Node.js** runtime
- **JWT** for authentication

## 📋 Installation

### Method 1: Load Unpacked (Development)

1. **Prepare Extension Files**
   - Navigate to `task-4-productivity-tracker/extension/`
   - All required files are already in place

2. **Open Chrome Extensions Page**
   - Go to `chrome://extensions/`
   - Enable "Developer mode" (top-right toggle)

3. **Load Extension**
   - Click "Load unpacked"
   - Select the `extension` folder
   - Extension will appear in your toolbar

4. **Start Tracking**
   - Browse normally
   - Click extension icon to view statistics

### Method 2: Create Icons (Optional)

Create icon images or use placeholders:
```
extension/icons/
├── icon16.png   (16x16 px)
├── icon48.png   (48x48 px)
└── icon128.png  (128x128 px)
```

## 🎮 Usage

1. **Install the Extension**: Follow installation steps above
2. **Browse Normally**: The extension tracks time automatically
3. **View Stats**: Click the extension icon in Chrome toolbar
4. **See Breakdown**: View total time and per-website statistics
5. **Clear Data**: Use the "Clear Today's Data" button to reset

## 📊 How It Works

### Background Tracking
- Service worker monitors active tabs
- Tracks tab switches and URL changes
- Records time spent on each domain
- Saves data every minute automatically

### Data Structure
```javascript
{
  "2025-12-14": {
    "github.com": 3600,      // 1 hour in seconds
    "stackoverflow.com": 1800,// 30 minutes
    "youtube.com": 2400       // 40 minutes
  }
}
```

## 🗂️ Project Structure

```
task-4-productivity-tracker/
├── extension/
│   ├── manifest.json        # Manifest V3 configuration
│   ├── background.js        # Service worker (time tracking)
│   ├── popup.html           # Extension popup UI
│   ├── popup.js             # Popup logic
│   └── icons/               # Extension icons (16, 48, 128px)
├── server/                  # [Optional] MERN backend
│   └── (future implementation)
└── README.md
```

## 🔑 Key Features Explained

### Manifest V3 Compliance
- Uses service worker instead of background pages
- Implements proper permissions model
- Host permissions for tracking all URLs
- Storage and alarms API permissions

### Privacy & Security
- All data stored locally in Chrome
- No external data transmission (current version)
- User has full control over data
- Clear data functionality built-in

### Automatic Tracking
- Detects active tab changes
- Monitors URL navigation
- Handles window focus/blur
- Periodic data saving

## 🧪 Testing

1. Load the extension in Chrome
2. Browse different websites
3. Wait a few minutes
4. Click extension icon
5. Verify time tracking is accurate
6. Test "Clear Today's Data" button

## 🎯 Future Development

### Planned Features
- [ ] Weekly/monthly statistics
- [ ] Productivity score calculation
- [ ] Website categorization (work/social/entertainment)
- [ ] Focus mode with website blocking
- [ ] Export data as CSV/JSON
- [ ] MERN backend for cloud sync
- [ ] User accounts and authentication
- [ ] Cross-device synchronization

## 👤 Author

**Prem Sawant**  
GitHub: [@PREMSAWANT](https://github.com/PREMSAWANT)

---

## 📝 Notes

- This is a demonstration project for internship evaluation
- Extension is fully functional for local time tracking
- Backend integration is planned for future implementation
- Follows Chrome Extension best practices (Manifest V3)

## 🔒 Permissions Used

- `tabs`: Track active tabs
- `storage`: Store productivity data locally
- `activeTab`: Access active tab information
- `alarms`: Periodic background saves
- `<all_urls>`: Track time on all websites

---

**Note**: For backend integration and advanced features, refer to the server directory documentation (coming soon).
