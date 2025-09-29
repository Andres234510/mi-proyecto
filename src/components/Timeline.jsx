import React from 'react';

export const Timeline = ({ items = [] }) => {
  return (
    <div className="space-y-6 ">
      {items.map((it, i) => (
        <div key={i} className="flex gap-3 items-start">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-purplebrand-500 mt-1" />
            {i < items.length - 1 && <div className="w-px h-full bg-amber-100 mt-1" />}
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-800">{it.title}</div>
            <div className="text-xs text-gray-500">{it.date}</div>
            <p className="text-sm text-gray-700 mt-1">{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
