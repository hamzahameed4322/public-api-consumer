import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-50/50 border border-red-100 rounded-2xl p-8 text-center max-w-md mx-auto my-12 animate-fade-in">
      <div className="mx-auto w-10 h-10 rounded-full bg-red-100/50 flex items-center justify-center text-red-600 mb-3">
        <AlertCircle size={18} />
      </div>
      <p className="text-red-700 text-sm font-bold">Data Pipeline Interrupted</p>
      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{message}</p>
    </div>
  );
};

export default ErrorMessage;