import React from 'react';

export const Card = ({ title, subtitle, children }) => {
  return (
    <article className="rounded-2xl p-3 shadow-md-purple card-shadow border border-gray-50 bg-amber-300 ">
      {title && <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>}
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      <div className="mt-2 text-sm text-gray-700">{children}</div>
    </article>
  );
};
