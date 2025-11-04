import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from './TimelineCompat';
import { Calendar, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Period, Timeline as TimelineType, CurrencyItem } from '../types';
import { PeriodModal } from './PeriodModal';
import './Timeline.css';

interface TimelineProps {
  data: Period[];
  language: 'vi' | 'en';
}

interface ModalData {
  period: Period;
  timeline: TimelineType;
  item: CurrencyItem;
}

export const Timeline = ({ data, language }: TimelineProps) => {
  const [selectedData, setSelectedData] = useState<ModalData | null>(null);

  const handleItemClick = (period: Period, timeline: TimelineType, item: CurrencyItem) => {
    setSelectedData({ period, timeline, item });
  };

  const handleCloseModal = () => {
    setSelectedData(null);
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
        {data.map((period, periodIndex) => (
          period.timelines.map((timeline, timelineIndex) => (
            timeline.items.map((item, itemIndex) => {
              const globalIndex = periodIndex * 10 + timelineIndex * 5 + itemIndex;
              return (
                <VerticalTimelineElement
                  key={`${period.id}-${timeline.id}-${item.id}`}
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
                  date={timeline.timeRange}
                  dateClassName="timeline-date"
                  iconStyle={{
                    background: 'linear-gradient(135deg, #DAA520 0%, #B8860B 100%)',
                    color: '#fff',
                    boxShadow: '0 4px 12px rgba(218, 165, 32, 0.4)',
                  }}
                  icon={<Calendar />}
                  onTimelineElementClick={() => handleItemClick(period, timeline, item)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: globalIndex * 0.05 }}
                    className="timeline-content"
                  >
                    <div className="timeline-period-label">
                      {language === 'en' ? period.nameEn : period.name}
                    </div>
                    <h3 className="timeline-title">
                      {language === 'en' ? timeline.nameEn : timeline.name}
                    </h3>
                    <h4 className="timeline-subtitle">{timeline.timeRange}</h4>
                    
                    {item.images && item.images.length > 0 && (
                      <div className="timeline-image">
                        <img
                          src={item.images[0]}
                          alt={language === 'en' ? timeline.nameEn : timeline.name}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800';
                          }}
                        />
                        {item.images.length > 1 && (
                          <div className="image-count">
                            +{item.images.length - 1} {language === 'vi' ? 'ảnh' : 'more'}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <p className="timeline-description">
                      {language === 'en' ? item.descriptionEn : item.description}
                    </p>
                    
                    <button className="read-more">
                      {language === 'vi' ? 'Xem chi tiết' : 'Read more'}
                    </button>
                  </motion.div>
                </VerticalTimelineElement>
              );
            })
          ))
        ))}
      </VerticalTimeline>

      <AnimatePresence>
        {selectedData && (
          <PeriodModal
            period={selectedData.period}
            timeline={selectedData.timeline}
            item={selectedData.item}
            language={language}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};
