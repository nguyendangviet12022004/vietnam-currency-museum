import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from './TimelineCompat';
import { Calendar, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CurrencyPeriod } from '../types';
import { PeriodModal } from './PeriodModal';
import './Timeline.css';

interface TimelineProps {
  data: CurrencyPeriod[];
  language: 'vi' | 'en';
}

export const Timeline = ({ data, language }: TimelineProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<CurrencyPeriod | null>(null);

  const handlePeriodClick = (period: CurrencyPeriod) => {
    setSelectedPeriod(period);
  };

  const handleCloseModal = () => {
    setSelectedPeriod(null);
  };

  if (data.length === 0) {
    return (
      <div className="empty-state">
        <Info size={48} />
        <p>
          {language === 'vi'
            ? 'Không tìm thấy dữ liệu phù hợp'
            : 'No matching data found'}
        </p>
      </div>
    );
  }

  return (
    <>
      <VerticalTimeline lineColor="rgba(218, 165, 32, 0.3)">
        {data.map((period, index) => (
          <VerticalTimelineElement
            key={`${period.stt}-${index}`}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#333',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              borderRadius: '12px',
              border: '2px solid rgba(218, 165, 32, 0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            contentArrowStyle={{
              borderRight: '7px solid rgba(218, 165, 32, 0.3)',
            }}
            date={period.timeRange}
            dateClassName="timeline-date"
            iconStyle={{
              background: 'linear-gradient(135deg, #DAA520 0%, #B8860B 100%)',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(218, 165, 32, 0.4)',
            }}
            icon={<Calendar />}
            onTimelineElementClick={() => handlePeriodClick(period)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-content"
            >
              <h3 className="timeline-title">{period.period}</h3>
              <h4 className="timeline-subtitle">{period.timeRange}</h4>
              
              {period.image && (
                <div className="timeline-image">
                  <img
                    src={period.image}
                    alt={period.period}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800';
                    }}
                  />
                </div>
              )}
              
              <p className="timeline-description">
                {language === 'en' && period.descriptionEn
                  ? period.descriptionEn
                  : period.description}
              </p>
              
              <button className="read-more">
                {language === 'vi' ? 'Xem chi tiết' : 'Read more'}
              </button>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <AnimatePresence>
        {selectedPeriod && (
          <PeriodModal
            period={selectedPeriod}
            language={language}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};
