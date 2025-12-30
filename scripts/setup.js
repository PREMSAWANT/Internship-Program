const fs = require('fs');
const path = require('path');

const serverEnvPath = path.join(__dirname, '../server/.env');
const serverEnvExample = path.join(__dirname, '../server/.env.example');
const clientEnvPath = path.join(__dirname, '../client/.env');
const clientEnvExample = path.join(__dirname, '../client/.env.example');

console.log('🚀 Initializing Internship Portfolio Setup...\n');

function checkAndCopy(example, actual, name) {
  if (!fs.existsSync(actual)) {
    console.log(`📝 Creating ${name} .env from example...`);
    fs.copyFileSync(example, actual);
    console.log(`✅ ${name} .env created. Please update it with your credentials.`);
  } else {
    console.log(`ℹ️  ${name} .env already exists.`);
  }
}

// Ensure examples exist
if (!fs.existsSync(serverEnvExample)) {
  fs.writeFileSync(serverEnvExample, 'MONGODB_URI=\nJWT_SECRET=\nPORT=5000\nCLIENT_URL=http://localhost:5173\n');
}
if (!fs.existsSync(clientEnvExample)) {
  fs.writeFileSync(clientEnvExample, 'VITE_API_URL=\nVITE_WEATHER_API_KEY=\n');
}

checkAndCopy(serverEnvExample, serverEnvPath, 'Backend');
checkAndCopy(clientEnvExample, clientEnvPath, 'Frontend');

console.log('\n✨ Setup check complete! Run "npm run dev" to start.');
