import React from 'react';

export default function Button({ children, className, handleClick }: any) {
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
