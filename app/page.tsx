// Next.js App Router root landing page: app/page.tsx
// Demonstrates modern Next.js Server / Client Component landing architecture

import React from 'react';
import { HomePage } from '../src/components/HomePage';
import { Navbar } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';

export const metadata = {
  title: 'Haramain — Umrah Guide & Sacred Ziyarat Explorer',
  description: 'The definitive pilgrim companion for Makkah Al-Mukarramah and Al-Madinah Al-Munawwarah. Interactive Umrah rituals, historical Seerah Ziyarat guides, 5-star packages, and trip planner.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFCF6] text-[#2D2A26]">
      <HomePage
        setActiveTab={(tab) => {
          if (typeof window !== 'undefined') {
            window.location.href = tab === 'home' ? '/' : `/#${tab}`;
          }
        }}
        onSelectCity={(city) => {
          if (typeof window !== 'undefined') {
            window.location.href = `/guide/${city.toLowerCase()}`;
          }
        }}
      />
    </main>
  );
}
