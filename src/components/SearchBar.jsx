import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, isTyping }) => {
  return (
    <div className="relative w-full md:max-w-md group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-gray-900 transition-colors">
        <Search size={16} strokeWidth={2.5} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search index by country or capital name..."
        className="input input-bordered w-full pl-11 pr-10 py-3 bg-white border border-gray-200/80 rounded-xl text-sm focus:outline-none focus:border-gray-950 focus:ring-4 focus:ring-gray-950/5 transition-all text-gray-900 placeholder-gray-400 shadow-sm"
      />
      {/* Visual Typing Indicator */}
      {isTyping && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <span className="loading loading-spinner loading-xs text-gray-400"></span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;