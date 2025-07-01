import React from 'react';

interface PaginationProps {
  current: number;
  count: number;
}

export function CarouselPagination({ current, count }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 py-2">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ease-in-out
            ${i + 1 === current 
              ? 'w-6 bg-primary' 
              : 'w-2 bg-muted-foreground'
            } h-2`}
        />
      ))}
    </div>
  );
}