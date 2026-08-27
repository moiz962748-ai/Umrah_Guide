/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { CityGuidePage } from './components/CityGuidePage';
import { UmrahGuide } from './components/UmrahGuide';
import { HotelsAndPackages } from './components/HotelsAndPackages';
import { InteractivePlanner } from './components/InteractivePlanner';
import { ArchitectureDocs } from './components/ArchitectureDocs';
import { Footer } from './components/Footer';
import { ZiyaratPlace, City } from './types';
import { ZIYARAT_PLACES } from './data/ziyaratData';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [cityFilter, setCityFilter] = useState<'All' | City>('All');
  const [savedPlaceIds, setSavedPlaceIds] = useState<string[]>([
    'makkah-masjid-al-haram',
    'madinah-masjid-an-nabawi',
    'madinah-masjid-quba'
  ]);

  const handleToggleSavePlace = (place: ZiyaratPlace) => {
    setSavedPlaceIds((prev) =>
      prev.includes(place.id) ? prev.filter((id) => id !== place.id) : [...prev, place.id]
    );
  };

  const handleRemoveSavedPlace = (placeId: string) => {
    setSavedPlaceIds((prev) => prev.filter((id) => id !== placeId));
  };

  const savedPlacesList = ZIYARAT_PLACES.filter((p) => savedPlaceIds.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF6] text-[#2D2A26] selection:bg-[#2D4A3E] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCityFilter={cityFilter}
        onCityQuickSelect={(city) => {
          setCityFilter(city);
          setActiveTab('ziyarat');
        }}
        onPlanJourneyClick={() => setActiveTab('planner')}
      />

      {/* Main Content Area Based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onSelectCity={(city) => {
              setCityFilter(city);
              setActiveTab('ziyarat');
            }}
          />
        )}

        {activeTab === 'ziyarat' && (
          <CityGuidePage
            initialCity={cityFilter}
            onSelectCity={setCityFilter}
            onAddToPlanner={handleToggleSavePlace}
            savedPlaceIds={savedPlaceIds}
          />
        )}

        {activeTab === 'guide' && (
          <UmrahGuide />
        )}

        {activeTab === 'packages' && (
          <HotelsAndPackages />
        )}

        {activeTab === 'planner' && (
          <InteractivePlanner
            savedPlaces={savedPlacesList}
            onRemoveSavedPlace={handleRemoveSavedPlace}
          />
        )}

        {activeTab === 'architecture' && (
          <ArchitectureDocs />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onFilterCity={(city) => {
          setCityFilter(city);
        }}
      />
    </div>
  );
}
