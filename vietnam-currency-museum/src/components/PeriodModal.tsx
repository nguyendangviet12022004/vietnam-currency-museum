import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Period, Timeline } from '../types';
import './PeriodModal.css';

interface PeriodModalProps {
  period: Period;
  timeline: Timeline;
  language: 'vi' | 'en';
  onClose: () => void;
}

export const PeriodModal = ({ period, timeline, language, onClose }: PeriodModalProps) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const currentItem = timeline.items[currentItemIndex];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentItem.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentItem.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevItem = () => {
    setCurrentItemIndex((prev) => prev === 0 ? timeline.items.length - 1 : prev - 1);
    setCurrentImageIndex(0);
  };

  const handleNextItem = () => {
    setCurrentItemIndex((prev) => prev === timeline.items.length - 1 ? 0 : prev + 1);
    setCurrentImageIndex(0);
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <div className="modal-period-label">
            {language === 'en' ? period.nameEn : period.name}
          </div>
          <h2 className="modal-title">
            {language === 'en' ? timeline.nameEn : timeline.name}
          </h2>
          <div className="modal-time">
            <Calendar size={20} />
            <span>{timeline.timeRange}</span>
          </div>
        </div>

        <div className="modal-items-navigation">
          {timeline.items.length > 1 && (
            <>
              <button className="item-nav prev" onClick={handlePrevItem} title={language === 'vi' ? 'Hiện vật trước' : 'Previous item'}>
                <ChevronLeft size={20} />
              </button>
              <span className="item-counter">
                {language === 'vi' ? 'Hiện vật' : 'Item'} {currentItemIndex + 1} / {timeline.items.length}
              </span>
              <button className="item-nav next" onClick={handleNextItem} title={language === 'vi' ? 'Hiện vật sau' : 'Next item'}>
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {currentItem.images && currentItem.images.length > 0 && (
          <div className="modal-image-gallery">
            <div className="modal-image">
              <img
                src={currentItem.images[currentImageIndex]}
                alt={`${language === 'en' ? timeline.nameEn : timeline.name} - ${currentImageIndex + 1}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800';
                }}
              />
            </div>
            
            {currentItem.images.length > 1 && (
              <>
                <button className="image-nav prev" onClick={handlePrevImage}>
                  <ChevronLeft size={24} />
                </button>
                <button className="image-nav next" onClick={handleNextImage}>
                  <ChevronRight size={24} />
                </button>
                <div className="image-indicators">
                  {currentItem.images.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="modal-body">
          <div className="modal-section">
            <div className="section-header">
              <Info size={20} />
              <h3>{language === 'vi' ? 'Mô tả chi tiết' : 'Detailed Description'}</h3>
            </div>
            <p className="modal-description">
              {language === 'en' ? currentItem.descriptionEn : currentItem.description}
            </p>
          </div>

          <div className="modal-section">
            <div className="section-header">
              <Info size={20} />
              <h3>{language === 'vi' ? 'Về thời kỳ này' : 'About This Period'}</h3>
            </div>
            <p className="modal-description period-desc">
              {language === 'en' ? period.descriptionEn : period.description}
            </p>
          </div>

          <div className="modal-stats">
            <div className="stat-item">
              <span className="stat-label">
                {language === 'vi' ? 'Năm bắt đầu' : 'Start Year'}
              </span>
              <span className="stat-value">{timeline.startYear}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">
                {language === 'vi' ? 'Năm kết thúc' : 'End Year'}
              </span>
              <span className="stat-value">
                {timeline.endYear === 2025 
                  ? (language === 'vi' ? 'Nay' : 'Present')
                  : timeline.endYear}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">
                {language === 'vi' ? 'Thời gian' : 'Duration'}
              </span>
              <span className="stat-value">
                {timeline.endYear - timeline.startYear}{' '}
                {language === 'vi' ? 'năm' : 'years'}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
