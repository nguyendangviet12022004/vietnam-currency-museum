import { motion } from 'framer-motion';
import { X, Calendar, Info } from 'lucide-react';
import type { CurrencyPeriod } from '../types';
import './PeriodModal.css';

interface PeriodModalProps {
  period: CurrencyPeriod;
  language: 'vi' | 'en';
  onClose: () => void;
}

export const PeriodModal = ({ period, language, onClose }: PeriodModalProps) => {
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
          <h2 className="modal-title">{period.period}</h2>
          <div className="modal-time">
            <Calendar size={20} />
            <span>{period.timeRange}</span>
          </div>
        </div>

        {period.image && (
          <div className="modal-image">
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

        <div className="modal-body">
          <div className="modal-section">
            <div className="section-header">
              <Info size={20} />
              <h3>{language === 'vi' ? 'Mô tả chi tiết' : 'Detailed Description'}</h3>
            </div>
            <p className="modal-description">
              {language === 'en' && period.descriptionEn
                ? period.descriptionEn
                : period.description}
            </p>
          </div>

          {period.startYear && period.endYear && (
            <div className="modal-stats">
              <div className="stat-item">
                <span className="stat-label">
                  {language === 'vi' ? 'Năm bắt đầu' : 'Start Year'}
                </span>
                <span className="stat-value">{period.startYear}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">
                  {language === 'vi' ? 'Năm kết thúc' : 'End Year'}
                </span>
                <span className="stat-value">
                  {period.endYear === 2025 
                    ? (language === 'vi' ? 'Nay' : 'Present')
                    : period.endYear}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">
                  {language === 'vi' ? 'Thời gian' : 'Duration'}
                </span>
                <span className="stat-value">
                  {period.endYear - period.startYear}{' '}
                  {language === 'vi' ? 'năm' : 'years'}
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
