// src/components/ui/DropdownMenu.jsx
import React, { useState } from 'react';

export function DropdownMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
}

export function DropdownMenuItem({ children }) {
  return (
    <div className="p-2 hover:bg-gray-200">
      {children}
    </div>
  );
}

export function DropdownMenuContent({ children }) {
  return <div>{children}</div>;
}

export function DropdownMenuTrigger({ children }) {
  return <div>{children}</div>;
}