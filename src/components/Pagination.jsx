import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  totalItems, 
  indexOfFirstItem, 
  indexOfLastItem 
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200/60 pt-6">
      <p className="text-xs font-medium text-gray-500">
        Showing <span className="text-gray-900 font-semibold">{indexOfFirstItem + 1}</span> to{' '}
        <span className="text-gray-900 font-semibold">
          {Math.min(indexOfLastItem, totalItems)}
        </span>{' '}
        of <span className="text-gray-900 font-semibold">{totalItems}</span> countries
      </p>
      
      <div className="join bg-white border border-gray-200/80 shadow-sm rounded-xl overflow-hidden">
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="join-item btn btn-ghost btn-sm text-gray-600 disabled:bg-gray-50 disabled:text-gray-300 gap-1 font-medium px-3 normal-case"
        >
          <ChevronLeft size={14} strokeWidth={2.5} /> Prev
        </button>
        
        <div className="join-item btn btn-sm btn-ghost no-animation pointer-events-none text-xs font-bold px-4 border-x border-gray-100 text-gray-800">
          Page {currentPage} of {totalPages}
        </div>
        
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="join-item btn btn-ghost btn-sm text-gray-600 disabled:bg-gray-50 disabled:text-gray-300 gap-1 font-medium px-3 normal-case"
        >
          Next <ChevronRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;