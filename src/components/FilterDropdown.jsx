import React from 'react';
import { Layers } from 'lucide-react';

const FilterDropdown = ({ value, onChange }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <div className="w-full sm:w-56 relative group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-gray-900 transition-colors">
        <Layers size={15} strokeWidth={2.5} />
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select select-bordered w-full pl-11 pr-8 bg-white border border-gray-200/80 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:border-gray-950 focus:ring-4 focus:ring-gray-950/5 transition-all appearance-none cursor-pointer shadow-sm"
      >
        <option value="">Global Matrices (All)</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region} Domain
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;