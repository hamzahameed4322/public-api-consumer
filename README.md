Global Explorer — REST Countries Dashboard


A responsive web application built to explore global country data using the REST Countries API. The application uses field-specific filtering (name, flags, population, region, capital) to minimize payload size, reduce unnecessary network overhead, and improve client-side performance.

🚀 Live Demo
https://global-explorer-data.netlify.app/

🛠️ Technical Architecture
Framework: React.js (Vite)

UI System: Tailwind CSS + DaisyUI for component-driven design.

Networking: Axios (with field-specific API constraints)

Icons: Lucide React

Feedback:React Hot Toast for non-intrusive, real-time UI notifications.

⚡ Core Functionality
Data Optimization: API requests are limited to essential fields (name, flags, population, region, capital) to minimize network overhead and memory usage.

Search Optimization: Implemented 400ms debouncing to prevent excessive API calls.

Smart Filtering: Advanced filtering system categorized by regional domains.

Resilience: Integrated skeleton loading states to handle network latency gracefully.

📦 Deployment & Execution
Prerequisites
Node.js (v18+)

Setup Instructions
Clone the repository:

Bash
git clone https://github.com/hamzahameed4322/public-api-consumer
cd public-api-consumer
Install dependencies:

Bash
npm install
Launch the app:

Bash
npm run dev

🏗️ Project Structure
Plaintext

src/
├── api/ # Axios instance and API configuration
├── assets/ # Project branding and static media
├── components/ # Atomic UI components
├── hooks/ # Custom API data-fetching and state logic
├── App.jsx # Application lifecycle and core state engine
└── main.jsx # Entry point and initialization
