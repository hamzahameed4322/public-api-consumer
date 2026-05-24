import React from 'react';

const Header = ({ totalCount }) => {
  return (
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
        Total Database: <span className="text-indigo-600 font-bold">{totalCount}</span> Countries
      </div>
    </header>
  );
};

export default Header;