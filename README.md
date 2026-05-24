# Global Explorer — REST Countries Dashboard

A responsive web application built to explore global country data using the REST Countries API. The application uses field-specific filtering `(name, flags, population, region, capital)` to minimize payload size, reduce unnecessary network overhead, and improve client-side performance.

**Live Demo:** https://global-explorer-data.netlify.app/

---

## 🛠️ Technical Architecture

| Layer | Technology |
|---|---|
|UI Library | React.js (Vite) |
| UI System | Tailwind CSS + DaisyUI |
| Networking | Axios (field-specific API constraints) |
| Icons | Lucide React |
| Feedback | React Hot Toast |

---

## ⚡ Core Functionality

- **Data Optimization:** API requests limited to essential fields — minimizes payload and memory usage
- **Search Optimization:** 400ms debouncing prevents excessive filtering on every keystroke
- **Smart Filtering:** Region-based filtering with instant UI feedback
- **Resilience:** Skeleton loading states handle network latency gracefully

---

## 📦 Run on a Fresh Machine

**Prerequisites:** Node.js v18+ — https://nodejs.org

```bash
git clone https://github.com/hamzahameed4322/public-api-consumer
cd public-api-consumer
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

> No API key required. REST Countries API is free and public.

---

## 🏗️ Project Structure

```
src/
├── api/          # Axios instance and API configuration
├── assets/       # Static media and branding
├── components/   # Atomic UI components
├── hooks/        # Custom data-fetching and state logic
├── App.jsx       # Application lifecycle and core state
└── main.jsx      # Entry point
```

---

