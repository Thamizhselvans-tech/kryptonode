import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex] || TESTIMONIALS[0];

  return (
    <section className="py-24 bg-milk-100 relative overflow-hidden border-t border-deepblue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-electric uppercase tracking-widest mb-6">
          <Award className="w-4 h-4" />
          <span>[ 08 — CLIENT TESTIMONIALS ]</span>
        </div>

        {/* Editorial Quotation Container */}
        <div className="bg-softblue/60 border border-deepblue/15 rounded-3xl p-8 sm:p-14 relative shadow-card overflow-hidden">
          <Quote className="absolute top-8 right-8 w-24 h-24 text-electric/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 max-w-4xl"
            >
              {/* Large Quotation */}
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-800 tracking-tight leading-snug font-serif italic mb-8">
                "{activeTestimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-lg font-bold text-navy-800 font-sans">
                    {activeTestimonial.author}
                  </div>
                  <div className="text-xs text-muted font-mono uppercase tracking-wider">
                    {activeTestimonial.role} — <span className="text-deepblue font-bold">{activeTestimonial.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-deepblue/10">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_: unknown, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-electric' : 'w-2 bg-deepblue/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-2xl bg-milk-100 text-navy-800 hover:bg-deepblue hover:text-milk-100 border border-deepblue/15 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-2xl bg-milk-100 text-navy-800 hover:bg-deepblue hover:text-milk-100 border border-deepblue/15 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
