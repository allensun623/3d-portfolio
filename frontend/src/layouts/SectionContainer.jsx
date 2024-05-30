import React from 'react';

export default function SectionContainer({ children }) {
  return (
    <section className='h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center'>
      {children}
    </section>
  );
}
