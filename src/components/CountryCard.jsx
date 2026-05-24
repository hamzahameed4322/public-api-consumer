import React from 'react';
import { Users, Globe, MapPin } from 'lucide-react';

const CountryCard = ({ country }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
      {/* Flag Container */}
      <div className="w-full aspect-[16/10] overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
        <img
          src={country.flags?.svg || country.flags?.png}
          alt={`${country.name?.common} flag`}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Info Content */}
      <div>
        <h3 className="font-semibold text-gray-900 text-base line-clamp-1 mb-2">
          {country.name?.common}
        </h3>
        
        <div className="flex flex-col gap-1.5 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <Users size={14} className="text-gray-400" />
            <span>Population: <strong>{country.population?.toLocaleString() || 'N/A'}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-gray-400" />
            <span>Region: <strong>{country.region || 'N/A'}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-gray-400" />
            <span>Capital: <strong>{country.capital?.[0] || 'N/A'}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;