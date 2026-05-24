import React from 'react';
import CountryCard from './CountryCard';

const CountryGrid = ({ countries, loading }) => {
  // Skeleton loader for clean UX during slow network
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full animate-pulse">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-4 h-64 flex flex-col gap-3">
            <div className="w-full aspect-[16/10] bg-gray-200 rounded-lg" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mt-2" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
            <div className="h-3 bg-gray-200 rounded w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  if (countries.length === 0) {
    return (
      <div className="text-center py-12 w-full">
        <p className="text-gray-500 text-sm font-medium">No countries found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {countries.map((country) => (
        <CountryCard key={country.cca3 || country.name?.common} country={country} />
      ))}
    </div>
  );
};

export default CountryGrid;