import type { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

const GDPRNotice: FunctionComponent = () => {
  const [visible, setVisible] = useState(localStorage.getItem('sn-gdprNoticeDismissed') !== 'true');

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem('sn-gdprNoticeDismissed', 'true');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 sm:bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="bg-white border border-gray-300 shadow-lg p-3 flex items-center gap-3 max-w-md w-full pointer-events-auto fade-in">
        <span className="text-gray-700 text-sm">
          This site stores your assessment answers locally in your browser to show your results. No data is sent to a
          server. <span className="font-medium">Your privacy is respected.</span>
        </span>
        <button
          className="ml-auto text-xs text-gray-500 hover:text-gray-700 font-semibold px-2 py-1 rounded border border-gray-200 bg-gray-100 transition cursor-pointer"
          onClick={handleDismiss}
          aria-label="Dismiss GDPR notice"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default GDPRNotice;
