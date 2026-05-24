import React from 'react';
import { Users, Compass, Landmark } from 'lucide-react';

const CountryCard = ({ country }) => {
  return (
    <div className="group bg-white border border-gray-200/70 rounded-2xl overflow-hidden hover:border-gray-400 hover:shadow-xl hover:shadow-gray-200/30 transition-all duration-300 ease-out flex flex-col will-change-transform transform hover:-translate-y-0.5">
      {/* Strict Ratio Flag Block with soft overlay gradient */}
      <div className="w-full aspect-[16/10] bg-gray-50 overflow-hidden relative border-b border-gray-100">
        <img
          src={country.flags?.svg || country.flags?.png}
          alt={`${country.name?.common} flag`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Structured Content Grid */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4 bg-white">
        <div>
          <h3 className="font-bold text-gray-950 text-base tracking-tight line-clamp-1 group-hover:text-neutral-700 transition-colors">
            {country.name?.common}
          </h3>
          <p className="text-[11px] font-mono font-semibold text-gray-400 tracking-wider mt-0.5 uppercase">
            ID: {country.cca3 || 'UNK'}
          </p>
        </div>
        
        {/* Core Metadata Sheets */}
        <div className="flex flex-col gap-2.5 border-t border-gray-100 pt-3.5">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-2 text-gray-400 font-medium">
              <Users size={13} strokeWidth={2.5} /> Population
            </span>
            <strong className="text-gray-900 font-semibold tabular-nums">
              {country.population?.toLocaleString() || 'N/A'}
            </strong>
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-2 text-gray-400 font-medium">
              <Compass size={13} strokeWidth={2.5} /> Region
            </span>
            <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-gray-100 text-gray-700 border-none uppercase tracking-wide">
              {country.region || 'N/A'}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-2 text-gray-400 font-medium">
              <Landmark size={13} strokeWidth={2.5} /> Capital
            </span>
            <strong className="text-gray-900 font-semibold truncate max-w-[130px] text-right">
              {country.capital?.[0] || 'Unspecified'}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;