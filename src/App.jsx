import React, { useState, useEffect } from 'react';
import { useCountries } from './hooks/useCountries';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import CountryGrid from './components/CountryGrid';
import { Toaster } from 'react-hot-toast';

function App() {
  const { countries, loading, error } = useCountries();
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [region, setRegion] = useState('');

  // Debounce logic: Updates debouncedSearch state after user stops typing for 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      // Input Validation: Remove extra or trailing spaces
      setDebouncedSearch(search.trim());
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // Combined client-side filter (Super fast UX)
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name?.common
      ?.toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-gray-200">
      {/* Setup Notification Hot Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header section */}
        <header className="mb-10 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            World Explorer
          </h1>
          <p className="text-gray-500 text-sm">
            Discover core statistics of countries with instant performance-tuned filtering.
          </p>
        </header>

        {/* Filters bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8 w-full bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <SearchBar value={search} onChange={setSearch} />
          <FilterDropdown value={region} onChange={setRegion} />
        </div>

        {/* Global Error Handle */}
        {error ? (
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-center max-w-xl mx-auto">
            <p className="text-red-600 text-sm font-medium">Error loading data: {error}</p>
            <p className="text-gray-500 text-xs mt-1">Please check your internet connection and try again.</p>
          </div>
        ) : (
          <CountryGrid countries={filteredCountries} loading={loading} />
        )}
      </div>
    </div>
  );
}

export default App;