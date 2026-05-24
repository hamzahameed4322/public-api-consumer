import React from 'react';
import CountryCard from './CountryCard';
import { HelpCircle, Sparkles } from 'lucide-react';

const CountryGrid = ({ countries, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col border border-gray-200/50 bg-white p-4 rounded-2xl shadow-sm w-full space-y-4">
            <div className="skeleton aspect-[16/10] w-full rounded-xl bg-gray-200/70"></div>
            <div className="space-y-2">
              <div className="skeleton h-5 w-2/3 bg-gray-200/70"></div>
              <div className="skeleton h-3 w-1/3 bg-gray-200/50"></div>
            </div>
            <div className="pt-2 space-y-2 border-t border-gray-100">
              <div className="skeleton h-3 w-full bg-gray-200/40"></div>
              <div className="skeleton h-3 w-4/5 bg-gray-200/40"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Enhanced Dynamic Urging/Empty State
  if (countries.length === 0) {
  return (
    <div className="w-full text-center py-16 bg-white border border-dashed border-gray-200 rounded-2xl max-w-md mx-auto px-6 shadow-sm animate-fade-in">
      <div className="mx-auto w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 mb-4 animate-bounce">
        <Sparkles size={20} />
      </div>
      <h3 className="text-base font-bold text-gray-900 tracking-tight">
        No Countries Found
      </h3>
      <p className="text-gray-500 text-sm mt-1 leading-relaxed">
        We couldn't find any country matching that name. Try searching for something else like <span className="font-semibold text-indigo-600 underline">Pakistan</span>, <span className="font-semibold text-indigo-600 underline">Japan</span>, or <span className="font-semibold text-indigo-600 underline">Canada</span>!
      </p>
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