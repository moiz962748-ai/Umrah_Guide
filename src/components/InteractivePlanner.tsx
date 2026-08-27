import React, { useState, useEffect } from 'react';
import { ZiyaratPlace, City, ChecklistItem } from '../types';
import { DEFAULT_CHECKLIST } from '../data/checklistData';
import { ZIYARAT_PLACES } from '../data/ziyaratData';
import { 
  Calendar, CheckSquare, Plus, Trash2, MapPin, 
  Clock, Share2, Copy, Check, Sparkles, Luggage, 
  FileText, Heart, Shield, Smartphone 
} from 'lucide-react';

interface DayPlan {
  dayNumber: number;
  city: City;
  morning: string;
  afternoon: string;
  evening: string;
  night: string;
}

interface InteractivePlannerProps {
  savedPlaces: ZiyaratPlace[];
  onRemoveSavedPlace: (placeId: string) => void;
}

export const InteractivePlanner: React.FC<InteractivePlannerProps> = ({
  savedPlaces,
  onRemoveSavedPlace
}) => {
  const [activePlannerTab, setActivePlannerTab] = useState<'itinerary' | 'checklist'>('itinerary');
  const [tripTitle, setTripTitle] = useState('My Blessed Umrah Pilgrimage 1447H');
  const [makkahDaysCount, setMakkahDaysCount] = useState(5);
  const [madinahDaysCount, setMadinahDaysCount] = useState(5);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // Initialize Checklist state
  const [checklist, setChecklist] = useState<ChecklistItem[]>(() => {
    const saved = localStorage.getItem('umrah_packing_checklist');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return DEFAULT_CHECKLIST; }
    }
    return DEFAULT_CHECKLIST;
  });

  const [newTaskInput, setNewTaskInput] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState<ChecklistItem['category']>('documents');

  // Save checklist to localStorage
  useEffect(() => {
    localStorage.setItem('umrah_packing_checklist', JSON.stringify(checklist));
  }, [checklist]);

  // Default day plans
  const [days, setDays] = useState<DayPlan[]>(() => {
    const initialDays: DayPlan[] = [];
    // Makkah days
    for (let i = 1; i <= 5; i++) {
      initialDays.push({
        dayNumber: i,
        city: 'Makkah',
        morning: i === 1 ? 'Arrival at Jeddah Airport, transfer to Makkah Hotel' : i === 3 ? 'Jabal al-Nour & Cave of Hira Expedition' : 'Fajr at Masjid al-Haram & Quran Recitation',
        afternoon: i === 4 ? 'Mount Arafat (Jabal ar-Rahmah) & Mina Valley' : 'Dhuhr prayer & Rest at hotel',
        evening: i === 1 ? 'Perform First Umrah (Tawaf, Sa\'ee, Tahalul)' : 'Maghrib & Isha prayers in the Mataf',
        night: 'Tahajjud and voluntary Tawaf in the cooler late hours'
      });
    }
    // Madinah days
    for (let j = 1; j <= 5; j++) {
      const dayNum = 5 + j;
      initialDays.push({
        dayNumber: dayNum,
        city: 'Madinah',
        morning: j === 1 ? 'Haramain High-Speed Train journey to Madinah' : j === 2 ? 'Saturday Sunnah Walk to Masjid Quba (Umrah reward)' : 'Mount Uhud & Martyrs Cemetery',
        afternoon: 'Visit Prophet\'s Biography Museum in the southern plaza',
        evening: 'Salam at the Sacred Chamber & Rawdah prayer appointment',
        night: 'Serene reflection and du\'a in the lit courtyards'
      });
    }
    return initialDays;
  });

  const handleUpdateSlot = (dayIndex: number, slot: 'morning' | 'afternoon' | 'evening' | 'night', value: string) => {
    setDays(prev => {
      const updated = [...prev];
      updated[dayIndex] = { ...updated[dayIndex], [slot]: value };
      return updated;
    });
  };

  const handleToggleChecklist = (id: string) => {
    setChecklist(prev =>
      prev.map(item => item.id === id ? { ...item, done: !item.done } : item)
    );
  };

  const handleAddCustomTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    const newItem: ChecklistItem = {
      id: `custom-${Date.now()}`,
      category: newTaskCategory,
      task: newTaskInput.trim(),
      done: false
    };
    setChecklist(prev => [newItem, ...prev]);
    setNewTaskInput('');
  };

  const handleDeleteTask = (id: string) => {
    setChecklist(prev => prev.filter(item => item.id !== id));
  };

  const checklistStats = {
    total: checklist.length,
    completed: checklist.filter(i => i.done).length,
    percent: checklist.length > 0 ? Math.round((checklist.filter(i => i.done).length / checklist.length) * 100) : 0
  };

  const handleCopyItinerary = () => {
    let summary = `🕋 ${tripTitle}\nTotal Duration: ${days.length} Days (${makkahDaysCount} Days Makkah + ${madinahDaysCount} Days Madinah)\n\n`;
    days.forEach(d => {
      summary += `--- Day ${d.dayNumber} (${d.city}) ---\n`;
      summary += `• Morning: ${d.morning}\n`;
      summary += `• Afternoon: ${d.afternoon}\n`;
      summary += `• Evening: ${d.evening}\n`;
      summary += `• Night: ${d.night}\n\n`;
    });
    navigator.clipboard.writeText(summary);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2500);
  };

  const categoryIcon = (cat: ChecklistItem['category']) => {
    switch (cat) {
      case 'documents': return <FileText className="w-4 h-4 text-[#8C734B]" />;
      case 'ihram_items': return <Luggage className="w-4 h-4 text-[#2D4A3E]" />;
      case 'health_care': return <Heart className="w-4 h-4 text-[#8C734B]" />;
      case 'tech_misc': return <Smartphone className="w-4 h-4 text-[#5C564E]" />;
      case 'spiritual': return <Sparkles className="w-4 h-4 text-[#8C734B]" />;
    }
  };

  return (
    <section id="planner-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E5E1D3]">
        <div>
          <div className="flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-[#8C734B]" />
            <span>Custom Journey Organizer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2A26] mt-1">
            Personal Umrah Itinerary & Packing Checklist
          </h2>
          <p className="text-sm text-[#5C564E] max-w-2xl mt-1">
            Craft your schedule day-by-day, assign historical Ziyarat landmarks, and track all travel documents and Ihram packing items.
          </p>
        </div>

        {/* Sub-tab switcher */}
        <div className="inline-flex p-1 rounded-2xl bg-[#F8F5EB] border border-[#E5E1D3] self-start md:self-auto">
          <button
            id="tab-itinerary-btn"
            onClick={() => setActivePlannerTab('itinerary')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              activePlannerTab === 'itinerary'
                ? 'bg-white text-[#2D4A3E] shadow-xs font-bold border border-[#E5E1D3]'
                : 'text-[#5C564E] hover:text-[#2D2A26]'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#8C734B]" />
            <span>Daily Itinerary ({days.length} Days)</span>
          </button>
          <button
            id="tab-checklist-btn"
            onClick={() => setActivePlannerTab('checklist')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              activePlannerTab === 'checklist'
                ? 'bg-white text-[#2D4A3E] shadow-xs font-bold border border-[#E5E1D3]'
                : 'text-[#5C564E] hover:text-[#2D2A26]'
            }`}
          >
            <CheckSquare className="w-4 h-4 text-[#8C734B]" />
            <span>Packing Checklist ({checklistStats.completed}/{checklistStats.total})</span>
          </button>
        </div>
      </div>

      {/* Itinerary Tab */}
      {activePlannerTab === 'itinerary' && (
        <div className="mt-8 space-y-6">
          
          {/* Top Config Card */}
          <div className="bg-[#2D4A3E] text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-[#1E332A] shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <input
                  type="text"
                  value={tripTitle}
                  onChange={(e) => setTripTitle(e.target.value)}
                  className="bg-transparent border-b border-[#8C734B]/60 hover:border-[#EFE7DA] focus:border-[#EFE7DA] focus:outline-hidden text-xl sm:text-2xl font-serif font-bold text-[#FDFCF6] w-full sm:w-auto"
                />
                <p className="text-xs text-[#E5E1D3]">
                  Custom schedule customized for your spiritual journey
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyItinerary}
                  className="px-5 py-2.5 rounded-full bg-[#1E332A] hover:bg-[#15231D] text-[#EFE7DA] text-xs font-semibold flex items-center space-x-2 shadow-xs transition-colors cursor-pointer border border-[#8C734B]/40"
                >
                  {copiedSuccess ? <Check className="w-4 h-4 text-[#8C734B]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedSuccess ? 'Itinerary Copied!' : 'Copy Itinerary Summary'}</span>
                </button>
              </div>
            </div>

            {/* Saved Places Pin Bar */}
            {savedPlaces.length > 0 && (
              <div className="pt-4 border-t border-[#1E332A] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#EFE7DA] flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#8C734B]" />
                  <span>Bookmarked Ziyarat Places ({savedPlaces.length})</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {savedPlaces.map(p => (
                    <div 
                      key={p.id}
                      className="px-3.5 py-1.5 rounded-xl bg-[#1E332A] border border-[#8C734B]/40 text-xs text-[#E5E1D3] flex items-center space-x-2"
                    >
                      <span className="font-medium">{p.city}: {p.name}</span>
                      <button
                        onClick={() => onRemoveSavedPlace(p.id)}
                        className="text-[#C4B59D] hover:text-[#EFE7DA] cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Days Grid */}
          <div className="space-y-4">
            {days.map((day, idx) => (
              <div
                key={day.dayNumber}
                id={`itinerary-day-${day.dayNumber}`}
                className="bg-white rounded-3xl border border-[#E5E1D3] p-5 sm:p-6 shadow-xs hover:border-[#8C734B]/60 transition-colors space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E1D3]">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-xs ${
                      day.city === 'Makkah' 
                        ? 'bg-[#8C734B] text-white' 
                        : 'bg-[#2D4A3E] text-white'
                    }`}>
                      D{day.dayNumber}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#2D2A26] font-serif">
                        Day {day.dayNumber} in {day.city === 'Makkah' ? '🕋 Makkah Al-Mukarramah' : '🕌 Al-Madinah Al-Munawwarah'}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* 4 Time Slots (Morning, Afternoon, Evening, Night) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                  {/* Morning */}
                  <div className="bg-[#F8F5EB] rounded-2xl p-3.5 border border-[#E5E1D3] space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C734B] block">
                      🌅 Morning Slot
                    </span>
                    <input
                      type="text"
                      value={day.morning}
                      onChange={(e) => handleUpdateSlot(idx, 'morning', e.target.value)}
                      className="w-full bg-white px-2.5 py-1.5 rounded-xl border border-[#E5E1D3] text-[#2D2A26] text-xs focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E]/20 focus:border-[#2D4A3E]"
                    />
                  </div>

                  {/* Afternoon */}
                  <div className="bg-[#F8F5EB] rounded-2xl p-3.5 border border-[#E5E1D3] space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] block">
                      ☀️ Afternoon Slot
                    </span>
                    <input
                      type="text"
                      value={day.afternoon}
                      onChange={(e) => handleUpdateSlot(idx, 'afternoon', e.target.value)}
                      className="w-full bg-white px-2.5 py-1.5 rounded-xl border border-[#E5E1D3] text-[#2D2A26] text-xs focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E]/20 focus:border-[#2D4A3E]"
                    />
                  </div>

                  {/* Evening */}
                  <div className="bg-[#F8F5EB] rounded-2xl p-3.5 border border-[#E5E1D3] space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] block">
                      🌆 Evening / Prayers
                    </span>
                    <input
                      type="text"
                      value={day.evening}
                      onChange={(e) => handleUpdateSlot(idx, 'evening', e.target.value)}
                      className="w-full bg-white px-2.5 py-1.5 rounded-xl border border-[#E5E1D3] text-[#2D2A26] text-xs focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E]/20 focus:border-[#2D4A3E]"
                    />
                  </div>

                  {/* Night */}
                  <div className="bg-[#F8F5EB] rounded-2xl p-3.5 border border-[#E5E1D3] space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5C564E] block">
                      🌙 Night / Tahajjud
                    </span>
                    <input
                      type="text"
                      value={day.night}
                      onChange={(e) => handleUpdateSlot(idx, 'night', e.target.value)}
                      className="w-full bg-white px-2.5 py-1.5 rounded-xl border border-[#E5E1D3] text-[#2D2A26] text-xs focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E]/20 focus:border-[#2D4A3E]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Packing Checklist Tab */}
      {activePlannerTab === 'checklist' && (
        <div className="mt-8 space-y-6">
          
          {/* Progress Card */}
          <div className="bg-white rounded-3xl border border-[#E5E1D3] p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#2D2A26]">
                  Pre-Departure & Packing Readiness
                </h3>
                <p className="text-xs text-[#5C564E] mt-0.5">
                  Ensure all mandatory travel visas, unscented toiletries, and Ihram essentials are secured.
                </p>
              </div>

              <div className="text-right self-start sm:self-auto">
                <span className="text-2xl font-bold text-[#2D4A3E]">{checklistStats.percent}%</span>
                <span className="text-xs text-[#5C564E] block">{checklistStats.completed} of {checklistStats.total} completed</span>
              </div>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-[#F8F5EB] rounded-full h-3 overflow-hidden border border-[#E5E1D3]">
              <div
                className="bg-[#2D4A3E] h-full rounded-full transition-all duration-300"
                style={{ width: `${checklistStats.percent}%` }}
              />
            </div>

            {/* Quick Add Custom Item Form */}
            <form onSubmit={handleAddCustomTask} className="pt-4 border-t border-[#E5E1D3] flex flex-col sm:flex-row gap-2">
              <select
                value={newTaskCategory}
                onChange={(e) => setNewTaskCategory(e.target.value as any)}
                className="px-3.5 py-2.5 rounded-2xl border border-[#E5E1D3] text-xs bg-[#F8F5EB] text-[#2D2A26] focus:outline-hidden"
              >
                <option value="documents">📄 Documents</option>
                <option value="ihram_items">🧳 Ihram Items</option>
                <option value="health_care">💊 Health & Care</option>
                <option value="tech_misc">📱 Tech & Misc</option>
                <option value="spiritual">✨ Spiritual</option>
              </select>

              <input
                type="text"
                value={newTaskInput}
                onChange={(e) => setNewTaskInput(e.target.value)}
                placeholder="Add a custom item to pack (e.g. Extra power bank, specific medication)..."
                className="flex-1 px-3.5 py-2.5 rounded-2xl border border-[#E5E1D3] text-xs focus:outline-hidden focus:ring-2 focus:ring-[#2D4A3E]/20 focus:border-[#2D4A3E] bg-white text-[#2D2A26]"
              />

              <button
                type="submit"
                className="px-5 py-2.5 bg-[#2D4A3E] hover:bg-[#1E332A] text-white rounded-full text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Add Item</span>
              </button>
            </form>
          </div>

          {/* Checklist Items Grouped */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(['documents', 'ihram_items', 'health_care', 'tech_misc', 'spiritual'] as const).map(cat => {
              const items = checklist.filter(i => i.category === cat);
              const catTitle = {
                documents: 'Official Documents & Visas',
                ihram_items: 'Ihram Attire & Personal Gear',
                health_care: 'Health & Unscented Toiletries',
                tech_misc: 'Tech, Charging & Travel Gear',
                spiritual: 'Spiritual Essentials & Dua Lists'
              }[cat];

              return (
                <div
                  key={cat}
                  className="bg-white rounded-3xl border border-[#E5E1D3] p-5 sm:p-6 space-y-3 shadow-xs"
                >
                  <div className="flex items-center space-x-2 pb-2 border-b border-[#E5E1D3]">
                    {categoryIcon(cat)}
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2A26]">
                      {catTitle} ({items.filter(i => i.done).length}/{items.length})
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {items.map(item => (
                      <div
                        key={item.id}
                        onClick={() => handleToggleChecklist(item.id)}
                        className={`group p-3 rounded-2xl border transition-all cursor-pointer flex items-start justify-between space-x-3 ${
                          item.done
                            ? 'bg-[#F8F5EB] border-[#E5E1D3] text-[#8C867A]'
                            : 'bg-white hover:bg-[#F8F5EB] border-[#E5E1D3] text-[#2D2A26]'
                        }`}
                      >
                        <div className="flex items-start space-x-2.5 flex-1">
                          <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                            item.done 
                              ? 'bg-[#2D4A3E] border-[#2D4A3E] text-white' 
                              : 'border-[#8C867A] bg-white'
                          }`}>
                            {item.done && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div className="text-xs">
                            <span className={`font-medium ${item.done ? 'line-through text-[#8C867A]' : 'text-[#2D2A26]'}`}>
                              {item.task}
                            </span>
                            {item.notes && (
                              <p className="text-[11px] text-[#5C564E] mt-0.5">{item.notes}</p>
                            )}
                          </div>
                        </div>

                        {item.id.startsWith('custom-') && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteTask(item.id);
                            }}
                            className="text-[#8C867A] hover:text-rose-600 p-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

    </section>
  );
};
