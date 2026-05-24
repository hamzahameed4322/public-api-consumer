# ANSWERS.md

**Project:** Global Explorer — REST Countries Dashboard

**Developer:** Hamza Hameed

**Repository:** https://github.com/hamzahameed4322/public-api-consumer

**Live Demo:** https://global-explorer-data.netlify.app/
---

## 1. How to Run

**Prerequisites:** Node.js v18+ — https://nodejs.org

```bash
git clone https://github.com/hamzahameed4322/public-api-consumer
cd public-api-consumer
npm install
npm run dev
```

Open `http://localhost:5173` in any modern browser. No API key required.

---

## 2. Stack Choice

**Chosen:** React (Vite), Tailwind CSS + DaisyUI, Axios, React Hot Toast

**Why:**
- **React** — Component-based architecture keeps loading, error, and success states isolated and maintainable
- **Vite** — Instant HMR and fast cold-start; CRA is deprecated and significantly slower
- **Tailwind + DaisyUI** — Design-system-driven UI without writing separate CSS files
- **Axios** — Single base URL instance; cleaner error handling than native fetch

**Worse choice:**
- **Vanilla JS / jQuery** — Manual DOM updates become brittle as filtering, pagination, and error states grow together
- **Next.js** — Unnecessary overhead; this project has no server-side rendering requirement

---

## 3. One Real Edge Case

**Edge case:** Rapid typing causes multiple simultaneous filter executions and breaks pagination state.

**Location:** `src/App.jsx` — lines 22–30

```js
const timer = setTimeout(() => {
  setDebouncedSearch(search.trim());
  setIsTyping(false);
  setCurrentPage(1);
}, 400);

return () => clearTimeout(timer);
```

**What this handles:**
- 400ms debounce ensures filtering only runs after the user stops typing — not on every keystroke
- `setCurrentPage(1)` resets pagination on every new search — prevents users landing on empty out-of-bounds pages
- `clearTimeout` cleanup cancels any pending timer if the component re-renders before 400ms completes

**Without this:** Typing "Pakistan" quickly would trigger filters on "Pak", "Paki", "Pakis" — flickering results and broken pagination for users on page 3+ searching something new.

---

## 4. AI Usage

**Tool used:** Google Gemini

**How AI was used:**

AI was mainly used during the planning phase for:
- Organizing the project folder structure
- Separating hooks from UI components
- Improving overall code organization

**What I changed:**

Some of the initial AI-generated suggestions were overly verbose and introduced unnecessary abstraction. I manually simplified parts of the structure, removed redundant comments, and reduced excessive prop passing to keep the codebase cleaner, easier to understand, and more maintainable.

---

## 5. Honest Gap

**Current limitation:** The application loads the full dataset on every initial fetch with no persistent caching. Refreshing re-fetches everything from scratch — inefficient for repeated interactions.

**Fix with one more day:** Integrate **TanStack Query (React Query)** for:
- Client-side caching — repeat visits load instantly
- Background revalidation — data stays fresh without full re-fetch
- Request deduplication — no redundant API calls
- Built-in loading/error states — removes manual `useState` management from `useCountries.js`
