import { useState, useRef, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from './TimelineCompat';
import { Calendar, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { CSSTransition } from 'react-transition-group';
import type { Period, Timeline as TimelineType } from '../types';
import { PeriodModal } from './PeriodModal';
import './Timeline.css';

interface TimelineProps {
  data: Period[];
  language: 'vi' | 'en';
}

interface ModalData {
  period: Period;
  timeline: TimelineType;
}

export const Timeline = ({ data, language }: TimelineProps) => {
  const [selectedData, setSelectedData] = useState<ModalData | null>(null);
  const [loadingTimelineId, setLoadingTimelineId] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const nodeRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create Intersection Observer for scroll-triggered animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-card-id');
            if (cardId) {
              setVisibleCards((prev) => new Set(prev).add(cardId));
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const preloadImage = (src?: string) => {
    if (!src) return;
    const img = new Image();
    (img as any).decoding = 'async';
    img.src = src;
  };

  const handleTimelineClick = (period: Period, timeline: TimelineType) => {
    // Show loading state immediately
    setLoadingTimelineId(timeline.id);
    
    // Preload the first image of this timeline so modal opens smoother
    const first = timeline.items[0]?.images?.[0];
    preloadImage(first);
    
    // Small delay to show loading state, then open modal
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSelectedData({ period, timeline });
        setLoadingTimelineId(null);
      });
    });
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
        {data.map((period) => (
          period.timelines.map((timeline) => {
            const firstItem = timeline.items[0];
            const totalItems = timeline.items.length;
            
            return (
              <VerticalTimelineElement
                key={`${period.id}-${timeline.id}`}
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
                onTimelineElementClick={() => handleTimelineClick(period, timeline)}
              >
                <motion.div
                  data-card-id={`${period.id}-${timeline.id}`}
                  ref={(el) => {
                    if (el && observerRef.current && !visibleCards.has(`${period.id}-${timeline.id}`)) {
                      observerRef.current.observe(el);
                    }
                  }}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={
                    visibleCards.has(`${period.id}-${timeline.id}`)
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 50, scale: 0.95 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="timeline-content"
                  onMouseEnter={() => preloadImage(firstItem?.images?.[0])}
                  onMouseDown={() => preloadImage(firstItem?.images?.[0])}
                >
                  <div className="timeline-period-label">
                    {language === 'en' ? period.nameEn : period.name}
                  </div>
                  <h3 className="timeline-title">
                    {language === 'en' ? timeline.nameEn : timeline.name}
                  </h3>
                  <h4 className="timeline-subtitle">{timeline.timeRange}</h4>
                  
                  {firstItem?.images && firstItem.images.length > 0 && (
                    <div className="timeline-image">
                      <img
                        src={firstItem.images[0]}
                        alt={language === 'en' ? timeline.nameEn : timeline.name}
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={375}
                        sizes="(max-width: 768px) 100vw, 600px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800';
                        }}
                      />
                      {totalItems > 1 && (
                        <div className="image-count">
                          {totalItems} {language === 'vi' ? 'hiện vật' : 'items'}
                        </div>
                      )}
                    </div>
                  )}
                  
                  <p className="timeline-description">
                    {language === 'en' ? firstItem?.descriptionEn : firstItem?.description}
                  </p>
                  
                  <button className={`read-more ${loadingTimelineId === timeline.id ? 'loading' : ''}`}>
                    {loadingTimelineId === timeline.id ? (
                      <>
                        <span className="button-spinner"></span>
                        {language === 'vi' ? 'Đang mở...' : 'Opening...'}
                      </>
                    ) : (
                      language === 'vi' ? 'Xem chi tiết' : 'Read more'
                    )}
                  </button>
                </motion.div>
              </VerticalTimelineElement>
            );
          })
        ))}
      </VerticalTimeline>

      <CSSTransition
        in={selectedData !== null}
        timeout={150}
        classNames="modal"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          {selectedData && (
            <PeriodModal
              period={selectedData.period}
              timeline={selectedData.timeline}
              language={language}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </CSSTransition>
    </>
  );
};
