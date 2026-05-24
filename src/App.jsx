import React, { useState, useEffect } from 'react';
import { useCountries } from './hooks/useCountries';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import CountryGrid from './components/CountryGrid';
import Pagination from './components/Pagination';
import ErrorMessage from './components/ErrorMessage';
import { Toaster, toast } from 'react-hot-toast';
import Footer from './components/Footer';

function App() {
  const { countries, loading, error } = useCountries();
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [region, setRegion] = useState('');
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    if (search.trim() !== debouncedSearch) {
      setIsTyping(true);
    }

    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setIsTyping(false);
      setCurrentPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search, debouncedSearch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [region]);

  useEffect(() => {
    if (debouncedSearch && !loading && !error) {
      const matches = countries.filter(c => 
        c.name?.common?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        c.capital?.[0]?.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      
      if (matches.length === 0) {
        toast('No country or capital found matching your query.', {
          icon: '🔍',
        });
      }
    }
  }, [debouncedSearch, loading, error, countries]);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = 
      country.name?.common?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      country.capital?.[0]?.toLowerCase().includes(debouncedSearch.toLowerCase());
      
    const matchesRegion = region ? country.region === region : true;
    return matchesSearch && matchesRegion;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 antialiased selection:bg-gray-950 selection:text-white pb-20">
      <Toaster 
        position="top-center" 
        toastOptions={{ 
          duration: 3000,
          style: {
            borderRadius: '12px',
            background: '#1c1c1c',
            color: '#fff',
            fontSize: '13px',
            fontWeight: '500',
            padding: '12px 20px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(255,255,255,0.05)'
          }
        }} 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Header totalCount={filteredCountries.length} />

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center mb-10 bg-white p-4 rounded-2xl border border-gray-200/60 shadow-sm">
          <SearchBar value={search} onChange={setSearch} isTyping={isTyping} />
          <FilterDropdown value={region} onChange={setRegion} />
        </div>

        {error ? (
          <ErrorMessage message={error} />
        ) : (
          <>
            <CountryGrid countries={currentItems} loading={loading || isTyping} />

            {!loading && !isTyping && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalItems={filteredCountries.length}
                indexOfFirstItem={indexOfFirstItem}
                indexOfLastItem={indexOfLastItem}
              />
            )}

          </>
        )}
         <Footer />
      </div>
     
    </div>
  );
}

export default App;