import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function ToastNotification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-[#091511] border border-emerald-500/50 rounded-2xl p-4 shadow-[0_10px_30px_rgba(16,185,129,0.3)] text-emerald-200 text-xs sm:text-sm flex items-start gap-3 backdrop-blur-xl animate-fadeIn">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
      <div className="flex-1 font-medium leading-relaxed">
        {message}
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-lg text-emerald-400 hover:bg-emerald-900/40 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
