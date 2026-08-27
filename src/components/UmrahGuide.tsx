import React, { useState } from 'react';
import { UMRAH_STEPS } from '../data/guideData';
import { UmrahStep, DuaItem } from '../types';
import { 
  BookOpen, CheckCircle2, Copy, Check, Sparkles, 
  RotateCw, Footprints, AlertTriangle, ShieldCheck, 
  HelpCircle, Volume2, Info, ArrowRight, ArrowLeft, Compass
} from 'lucide-react';
import { UmrahRitualsGuide } from './UmrahRitualsGuide';

export const UmrahGuide: React.FC = () => {
  const [guideMode, setGuideMode] = useState<'interactive_rituals' | 'detailed_handbook'>('interactive_rituals');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [tawafCircuit, setTawafCircuit] = useState<number>(1);
  const [saeeLap, setSaeeLap] = useState<number>(1);
  const [copiedDuaId, setCopiedDuaId] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const currentStep = UMRAH_STEPS[activeStepIndex];

  const handleCopyDua = (dua: DuaItem) => {
    const textToCopy = `${dua.title}\n\nArabic:\n${dua.arabic}\n\nTransliteration:\n${dua.transliteration}\n\nTranslation:\n${dua.translation}${dua.reference ? `\n\nReference: ${dua.reference}` : ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedDuaId(dua.id);
    setTimeout(() => setCopiedDuaId(null), 2500);
  };

  const toggleStepCompleted = (stepNumber: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNumber) ? prev.filter(s => s !== stepNumber) : [...prev, stepNumber]
    );
  };

  return (
    <div className="space-y-4">
      {/* View Mode Toggle Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E5E1D3] pb-6">
        <div>
          <div className="flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#8C734B]" />
            <span>Prophetic Umrah Rites & Spiritual Protocol</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2A26] mt-1">
            Complete Step-by-Step Umrah Guide & Rituals
          </h1>
        </div>

        <div className="inline-flex p-1 rounded-2xl bg-[#F8F5EB] border border-[#E5E1D3] self-start sm:self-auto">
          <button
            id="tab-interactive-rituals-btn"
            onClick={() => setGuideMode('interactive_rituals')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              guideMode === 'interactive_rituals'
                ? 'bg-white text-[#2D4A3E] shadow-xs font-bold border border-[#E5E1D3]'
                : 'text-[#5C564E] hover:text-[#2D2A26]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#8C734B]" />
            <span>Interactive Visual Timeline</span>
          </button>
          <button
            id="tab-detailed-handbook-btn"
            onClick={() => setGuideMode('detailed_handbook')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              guideMode === 'detailed_handbook'
                ? 'bg-white text-[#2D4A3E] shadow-xs font-bold border border-[#E5E1D3]'
                : 'text-[#5C564E] hover:text-[#2D2A26]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#8C734B]" />
            <span>Detailed Handbook & Duas</span>
          </button>
        </div>
      </div>

      {guideMode === 'interactive_rituals' ? (
        <UmrahRitualsGuide />
      ) : (
        <section id="umrah-guide-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-12">
        <div className="inline-flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs uppercase tracking-wider bg-[#F8F5EB] px-4 py-1.5 rounded-full border border-[#E5E1D3]">
          <BookOpen className="w-3.5 h-3.5 text-[#8C734B]" />
          <span>Interactive Pilgrimage Manual</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#2D2A26]">
          Step-by-Step Umrah Rites & Authenticated Duas
        </h2>
        <p className="text-sm sm:text-base text-[#5C564E]">
          Master the four essential pillars (Ihram, Tawaf, Sa'ee, and Tahalul) in strict accordance with the prophetic Sunnah of Prophet Muhammad ﷺ.
        </p>
      </div>

      {/* Progress Stepper Tabs */}
      <div className="mb-8 overflow-x-auto pb-3 scrollbar-none">
        <div className="flex items-center justify-between min-w-[720px] bg-[#F8F5EB] p-1.5 rounded-2xl border border-[#E5E1D3]">
          {UMRAH_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const isDone = completedSteps.includes(step.step);

            return (
              <button
                key={step.id}
                id={`stepper-tab-step-${step.step}`}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#2D4A3E] shadow-xs border border-[#E5E1D3] font-bold'
                    : 'text-[#5C564E] hover:text-[#2D2A26] hover:bg-[#EFE7DA]/60'
                }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  isDone 
                    ? 'bg-[#2D4A3E] text-white' 
                    : isActive 
                      ? 'bg-[#8C734B] text-white font-bold' 
                      : 'bg-[#E5E1D3] text-[#5C564E]'
                }`}>
                  {isDone ? <Check className="w-3 h-3" /> : step.step}
                </div>
                <span className="truncate">{step.title.split('(')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Step Detail Card */}
      <div className="bg-white rounded-3xl border border-[#E5E1D3] shadow-sm overflow-hidden">
        
        {/* Step Banner */}
        <div className="bg-[#2D4A3E] text-white p-6 sm:p-8 border-b border-[#1E332A]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-[#EFE7DA] text-xs font-bold uppercase tracking-wider mb-1">
                <span>Step {currentStep.step} of {UMRAH_STEPS.length}</span>
                <span>•</span>
                <span className="capitalize">{currentStep.stage}</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#FDFCF6]">
                {currentStep.title}
              </h3>
              <p className="text-lg sm:text-xl font-arabic text-[#EFE7DA] mt-1">
                {currentStep.arabicTitle}
              </p>
            </div>

            {/* Mark as Completed Button */}
            <button
              id={`btn-complete-step-${currentStep.step}`}
              onClick={() => toggleStepCompleted(currentStep.step)}
              className={`self-start sm:self-center px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
                completedSteps.includes(currentStep.step)
                  ? 'bg-[#1E332A] text-[#EFE7DA] border border-[#8C734B]/60 shadow-xs'
                  : 'bg-[#1E332A]/80 hover:bg-[#1E332A] text-[#E5E1D3] border border-[#8C734B]/30'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${completedSteps.includes(currentStep.step) ? 'text-[#8C734B]' : 'text-[#8C867A]'}`} />
              <span>{completedSteps.includes(currentStep.step) ? 'Marked as Practiced' : 'Mark as Practiced'}</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-[#E5E1D3] mt-4 leading-relaxed max-w-4xl">
            {currentStep.description}
          </p>
        </div>

        {/* Step Interactive Practice Tools */}
        {currentStep.id === 'tawaf-around-kaaba' && (
          <div className="bg-[#F8F5EB] border-b border-[#E5E1D3] p-5 sm:p-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <RotateCw className="w-5 h-5 text-[#8C734B]" />
                  <h4 className="text-sm font-bold text-[#2D2A26] font-serif">
                    Interactive Tawaf Lap Counter (7 Circuits)
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#2D4A3E] bg-[#EFE7DA] px-3 py-1 rounded-full border border-[#C4B59D]">
                  Circuit {tawafCircuit} of 7
                </span>
              </div>

              {/* 7 Circuit Visual Dots */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <button
                    key={num}
                    onClick={() => setTawafCircuit(num)}
                    className={`py-2 rounded-xl text-xs font-bold flex flex-col items-center transition-all cursor-pointer ${
                      tawafCircuit === num
                        ? 'bg-[#8C734B] text-white shadow-sm ring-2 ring-[#755F3C]'
                        : num < tawafCircuit
                          ? 'bg-[#2D4A3E] text-white'
                          : 'bg-white text-[#5C564E] border border-[#E5E1D3]'
                    }`}
                  >
                    <span>#{num}</span>
                    <span className="text-[10px] font-normal opacity-90">
                      {num <= 3 ? 'Raml (Fast)' : 'Normal'}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-[#2D2A26] bg-white p-3.5 rounded-2xl border border-[#E5E1D3]">
                <p>
                  <strong>Sunnah reminder for Circuit {tawafCircuit}:</strong> {tawafCircuit <= 3 ? 'Men perform Raml (brisk walking with short, fast strides).' : 'Normal walking pace.'} Recite <em>Rabbana atina fid-dunya hasanah</em> between the Yemeni Corner and the Black Stone.
                </p>
                <button
                  onClick={() => setTawafCircuit(prev => prev < 7 ? prev + 1 : 1)}
                  className="ml-3 shrink-0 px-3.5 py-1.5 bg-[#2D4A3E] hover:bg-[#1E332A] text-white rounded-full font-semibold cursor-pointer"
                >
                  {tawafCircuit === 7 ? 'Reset Counter' : 'Next Circuit →'}
                </button>
              </div>
            </div>
          </div>
        )}

        {currentStep.id === 'saee-safa-marwah' && (
          <div className="bg-[#F8F5EB] border-b border-[#E5E1D3] p-5 sm:p-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Footprints className="w-5 h-5 text-[#2D4A3E]" />
                  <h4 className="text-sm font-bold text-[#2D2A26] font-serif">
                    Interactive Sa'ee Lap Counter (7 Laps)
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#2D4A3E] bg-[#EFE7DA] px-3 py-1 rounded-full border border-[#C4B59D]">
                  Lap {saeeLap} of 7 ({saeeLap % 2 !== 0 ? 'Safa ➔ Marwah' : 'Marwah ➔ Safa'})
                </span>
              </div>

              {/* 7 Saee Visual Laps */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6, 7].map((lap) => (
                  <button
                    key={lap}
                    onClick={() => setSaeeLap(lap)}
                    className={`py-2 rounded-xl text-xs font-bold flex flex-col items-center transition-all cursor-pointer ${
                      saeeLap === lap
                        ? 'bg-[#2D4A3E] text-white shadow-sm ring-2 ring-[#1E332A]'
                        : lap < saeeLap
                          ? 'bg-[#8C734B] text-white'
                          : 'bg-white text-[#5C564E] border border-[#E5E1D3]'
                    }`}
                  >
                    <span>Lap {lap}</span>
                    <span className="text-[10px] font-normal opacity-90">
                      {lap % 2 !== 0 ? 'Safa➔Mar' : 'Mar➔Safa'}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-[#2D2A26] bg-white p-3.5 rounded-2xl border border-[#E5E1D3]">
                <p>
                  <strong>Current Direction:</strong> Starting at {saeeLap % 2 !== 0 ? 'Mount Safa ending at Mount Marwah' : 'Mount Marwah ending at Mount Safa'}. Men run moderately between the bright green neon markers.
                </p>
                <button
                  onClick={() => setSaeeLap(prev => prev < 7 ? prev + 1 : 1)}
                  className="ml-3 shrink-0 px-3.5 py-1.5 bg-[#2D4A3E] hover:bg-[#1E332A] text-white rounded-full font-semibold cursor-pointer"
                >
                  {saeeLap === 7 ? 'Complete Sa\'ee' : 'Next Lap →'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step Content: Sunnahs, Prohibitions, Instructions & Duas */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Step By Step Instructions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C867A] flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#8C734B]" />
              <span>Step-by-Step Practical Protocol</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentStep.stepByStepGuide.map((action, i) => (
                <div key={i} className="flex items-start space-x-3 bg-[#F8F5EB] rounded-3xl p-4 sm:p-5 border border-[#E5E1D3]">
                  <div className="w-7 h-7 rounded-full bg-[#2D4A3E] text-[#EFE7DA] font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    {i + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[#2D2A26] leading-relaxed font-medium">
                    {action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Duas & Supplications in Arabic calligraphy */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C867A]">
                Prescribed Arabic Duas & Sunnah Dhikr ({currentStep.duas.length})
              </h4>
              <span className="text-xs text-[#8C734B] font-semibold">
                Tap copy icon to save dua
              </span>
            </div>

            <div className="space-y-4">
              {currentStep.duas.map((dua) => {
                const isCopied = copiedDuaId === dua.id;
                return (
                  <div
                    key={dua.id}
                    id={`dua-card-${dua.id}`}
                    className="bg-[#1E332A] text-white rounded-3xl p-5 sm:p-6 space-y-4 border border-[#8C734B]/30 relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between border-b border-[#2D4A3E] pb-3">
                      <div>
                        <span className="text-xs font-bold text-[#EFE7DA] uppercase tracking-wide">
                          {dua.title}
                        </span>
                        <p className="text-[11px] text-[#C4B59D]">
                          {dua.occasion} {dua.repeatCount && `• ${dua.repeatCount}`}
                        </p>
                      </div>

                      <button
                        onClick={() => handleCopyDua(dua)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center space-x-1.5 cursor-pointer ${
                          isCopied
                            ? 'bg-[#8C734B] text-white'
                            : 'bg-[#2D4A3E] hover:bg-[#233b31] text-[#E5E1D3]'
                        }`}
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span className="hidden sm:inline">{isCopied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    {/* Arabic Text Display */}
                    <div className="py-2 text-right">
                      <p className="text-xl sm:text-2xl lg:text-3xl font-arabic font-bold text-[#FDFCF6] leading-loose tracking-wide dir-rtl select-all">
                        {dua.arabic}
                      </p>
                    </div>

                    {/* Transliteration and English Translation */}
                    <div className="space-y-2 pt-2 border-t border-[#2D4A3E] text-xs sm:text-sm">
                      <div>
                        <span className="text-[#8C867A] font-semibold block text-[11px] uppercase tracking-wider">
                          Transliteration:
                        </span>
                        <p className="text-[#EFE7DA] font-medium italic">
                          {dua.transliteration}
                        </p>
                      </div>

                      <div>
                        <span className="text-[#8C867A] font-semibold block text-[11px] uppercase tracking-wider">
                          English Translation:
                        </span>
                        <p className="text-[#E5E1D3] leading-relaxed">
                          "{dua.translation}"
                        </p>
                      </div>

                      {dua.reference && (
                        <div className="text-[11px] text-[#C4B59D] font-semibold pt-1">
                          Source: {dua.reference}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Two-Column Sunnahs vs Prohibitions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sunnahs */}
            <div className="bg-[#F8F5EB] rounded-3xl p-5 border border-[#E5E1D3] space-y-3">
              <div className="flex items-center space-x-2 text-[#2D4A3E] font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#8C734B]" />
                <span>Recommended Sunnah Acts</span>
              </div>
              <ul className="space-y-2 text-xs text-[#5C564E]">
                {currentStep.sunnahs.map((sunnah, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-[#2D4A3E] font-bold">✓</span>
                    <span>{sunnah}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prohibitions or Critical Reminders */}
            <div className="bg-[#F8F5EB] rounded-3xl p-5 border border-[#E5E1D3] space-y-3">
              <div className="flex items-center space-x-2 text-[#8C734B] font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-[#8C734B]" />
                <span>{currentStep.prohibitions ? 'Strict Ihram Prohibitions' : 'Common Mistakes to Avoid'}</span>
              </div>
              <ul className="space-y-2 text-xs text-[#5C564E]">
                {(currentStep.prohibitions || [
                  'Pushing or creating stampedes when kissing the Black Stone (Istilam from afar is completely valid).',
                  'Exposing right shoulder during prayers (only uncovered during the 7 rounds of Tawaf).',
                  'Raising hands pointing at Kaaba during Sa\'ee instead of open palm supplication.'
                ]).map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-[#8C734B] font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Controls between Steps */}
          <div className="flex items-center justify-between pt-6 border-t border-[#E5E1D3]">
            <button
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-colors cursor-pointer ${
                activeStepIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-[#F8F5EB] text-[#8C867A] border border-[#E5E1D3]'
                  : 'bg-[#F8F5EB] hover:bg-[#EFE7DA] text-[#2D2A26] border border-[#E5E1D3]'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Step</span>
            </button>

            <span className="text-xs font-bold text-[#8C867A]">
              Step {activeStepIndex + 1} of {UMRAH_STEPS.length}
            </span>

            <button
              disabled={activeStepIndex === UMRAH_STEPS.length - 1}
              onClick={() => setActiveStepIndex(prev => Math.min(UMRAH_STEPS.length - 1, prev + 1))}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-colors cursor-pointer shadow-md ${
                activeStepIndex === UMRAH_STEPS.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-[#F8F5EB] text-[#8C867A]'
                  : 'bg-[#2D4A3E] hover:bg-[#1E332A] text-white'
              }`}
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          </div>
        </div>

      </section>
      )}

    </div>
  );
};
