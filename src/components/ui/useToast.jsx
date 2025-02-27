// src/components/ui/use-toast.js
import { useState } from 'react';

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description }) => {
    setToasts((prev) => [...prev, { title, description }]);
    // Optionally, you can set a timeout to remove the toast after a few seconds
    setTimeout(() => {
      setToasts((prev) => prev.slice(1)); // Remove the first toast after 3 seconds
    }, 3000);
  };

  return { toast, toasts };
};