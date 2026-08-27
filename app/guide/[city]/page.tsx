// Next.js App Router dynamic page: app/guide/[city]/page.tsx
// Demonstrates dynamic route handling for Makkah, Madinah, and general Ziyarat explorer

import React from 'react';
import { CityGuidePage } from '../../../src/components/CityGuidePage';
import { City } from '../../../src/types';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { city: 'makkah' },
    { city: 'madinah' },
    { city: 'all' }
  ];
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const rawCity = resolvedParams.city?.toLowerCase();
  
  const city: 'All' | City = 
    rawCity === 'makkah' ? 'Makkah' :
    rawCity === 'madinah' ? 'Madinah' : 'All';

  return (
    <div className="min-h-screen bg-[#FDFCF6]">
      <CityGuidePage initialCity={city} />
    </div>
  );
}
