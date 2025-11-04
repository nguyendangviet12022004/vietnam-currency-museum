import { Languages, Landmark } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  language: 'vi' | 'en';
  onLanguageToggle: () => void;
}

export const Header = ({ language, onLanguageToggle }: HeaderProps) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-logo">
          <Landmark size={36} />
          <div className="header-text">
            <h1 className="header-title">
              {language === 'vi' 
                ? 'Lịch Sử Tiền Tệ Việt Nam'
                : 'Vietnamese Currency History'}
            </h1>
            <p className="header-subtitle">
              {language === 'vi'
                ? 'Hành trình phát triển qua các thời kỳ'
                : 'Journey Through the Ages'}
            </p>
          </div>
        </div>
        
        <button className="language-toggle" onClick={onLanguageToggle}>
          <Languages size={20} />
          <span>{language === 'vi' ? 'English' : 'Tiếng Việt'}</span>
        </button>
      </div>
    </header>
  );
};
