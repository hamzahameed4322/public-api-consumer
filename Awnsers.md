                                            Global Explorer — REST Countries Dashboard

1. Project Execution Steps

To run this project on a fresh machine:

# Clone the repository

git clone https://github.com/hamzahameed4322/public-api-consumer

# Navigate into the project

cd public-api-consumer

# Install dependencies

npm install

# Start the development server

npm run dev

2. Strategic Stack Choice
   Chosen Stack
   React (Vite)
   Tailwind CSS
   DaisyUI
   Axios
   Why This Stack?

React made it easier to build reusable UI components and manage dynamic state like searching, filtering, and pagination.

Vite was selected because of its fast startup time and lightweight development experience.

Tailwind CSS with DaisyUI helped speed up UI development while keeping the design system consistent.

Axios provided cleaner API handling and simplified error management compared to native fetch calls.

Worse Alternative

Using Vanilla JavaScript or jQuery would make the application harder to scale and maintain as UI complexity increases.

Using a larger framework like Next.js would add unnecessary overhead for a small client-side project that does not require server-side rendering.

3. Edge Case Handling
   Edge Case

Rapid user typing in the search input causing unstable filtering behavior.

Location

src/App.jsx —— lines 22–30, debouncing useEffect handling the search state.

Explanation

A 400ms debounce delay was implemented to prevent excessive filtering and repeated state updates while users type quickly.

Pagination is also automatically reset to page 1 whenever a new search query is entered. Without this handling, users could remain on invalid pages and see empty results even when matching countries exist.

This improves both performance and user experience during fast interactions.

4. AI Integration Strategy
   Tool Used

Google Gemini

How AI Was Used

AI was mainly used during the planning phase for:

organizing the project structure,
separating hooks from UI components,
and improving overall code organization.
Manual Improvements

Some of the initial AI-generated suggestions were overly verbose and introduced unnecessary abstraction.

I manually simplified parts of the structure, removed redundant comments, and reduced excessive prop passing to keep the codebase cleaner, easier to understand, and more maintainable.

5. Honest Gap Analysis
   Current Limitation

The application currently loads the full dataset during the initial fetch and does not implement persistent caching.

While this works well for the current API size, it would become inefficient for larger datasets or repeated interactions.

Future Improvement

With additional development time, I would integrate TanStack Query to introduce:

client-side caching,
background refetching,
request deduplication,
and improved loading-state management.

This would improve both scalability and overall application performance.
