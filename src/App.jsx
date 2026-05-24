import React, { useState, useEffect } from 'react';
import { useCountries } from './hooks/useCountries';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import CountryGrid from './components/CountryGrid';
import { Toaster, toast } from 'react-hot-toast';
import { ShieldCheck, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

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
        <header className="mb-10 pb-6 border-b border-gray-200 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-indigo-600 text-xs font-bold uppercase tracking-wider">
              🌍 Global Explorer
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-950">
              World Countries Info
            </h1>
            <p className="text-gray-500 text-sm max-w-md">
              Quickly search for any country or filter by region to see real-time population data, capitals, and flags instantly.
            </p>
          </div>
          <div className="text-xs font-medium bg-white border border-gray-200 shadow-sm px-3 py-1.5 rounded-lg text-gray-600 self-start md:self-auto">
            Total Database: <span className="text-indigo-600 font-bold">{filteredCountries.length}</span> Countries
          </div>
        </header>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center mb-10 bg-white p-4 rounded-2xl border border-gray-200/60 shadow-sm">
          <SearchBar value={search} onChange={setSearch} isTyping={isTyping} />
          <FilterDropdown value={region} onChange={setRegion} />
        </div>

        {error ? (
          <div className="bg-red-50/50 border border-red-100 rounded-2xl p-8 text-center max-w-md mx-auto my-12">
            <div className="mx-auto w-10 h-10 rounded-full bg-red-100/50 flex items-center justify-center text-red-600 mb-3">
              <AlertCircle size={18} />
            </div>
            <p className="text-red-700 text-sm font-bold">Data Pipeline Interrupted</p>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">{error}</p>
          </div>
        ) : (
          <>
            <CountryGrid countries={currentItems} loading={loading || isTyping} />

            {!loading && !isTyping && totalPages > 1 && (
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200/60 pt-6">
                <p className="text-xs font-medium text-gray-500">
                  Showing <span className="text-gray-900 font-semibold">{indexOfFirstItem + 1}</span> to{' '}
                  <span className="text-gray-900 font-semibold">
                    {Math.min(indexOfLastItem, filteredCountries.length)}
                  </span>{' '}
                  of <span className="text-gray-900 font-semibold">{filteredCountries.length}</span> registries
                </p>
                
                <div className="join bg-white border border-gray-200/80 shadow-sm rounded-xl overflow-hidden">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="join-item btn btn-ghost btn-sm text-gray-600 disabled:bg-gray-50 disabled:text-gray-300 gap-1 font-medium px-3 normal-case"
                  >
                    <ChevronLeft size={14} strokeWidth={2.5} /> Prev
                  </button>
                  <div className="join-item btn btn-sm btn-ghost no-animation pointer-events-none text-xs font-bold px-4 border-x border-gray-100 text-gray-800">
                    Page {currentPage} of {totalPages}
                  </div>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="join-item btn btn-ghost btn-sm text-gray-600 disabled:bg-gray-50 disabled:text-gray-300 gap-1 font-medium px-3 normal-case"
                  >
                    Next <ChevronRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;