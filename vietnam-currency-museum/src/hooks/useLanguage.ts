import { useState, useCallback } from 'react';
import type { Language } from '../types';

/**
 * Custom hook để quản lý ngôn ngữ
 */
export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('vi');

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'vi' ? 'en' : 'vi'));
  }, []);

  const t = useCallback((vi: string, en?: string) => {
    return language === 'vi' ? vi : (en || vi);
  }, [language]);

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };
};
