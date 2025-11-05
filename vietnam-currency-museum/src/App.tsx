import { useLanguage } from './hooks/useLanguage';
import { sampleCurrencyData } from './data/sampleData';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import './App.css';

function App() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="app">
      <Header language={language} onLanguageToggle={toggleLanguage} />
      
      <main className="main-content">
        <div className="container">
          <Timeline data={sampleCurrencyData} language={language} />
        </div>
      </main>

      <footer className="app-footer">
        <p>
          {language === 'vi'
            ? '© 2025 Bảo tàng Tiền tệ Việt Nam - Lịch sử và Di sản'
            : '© 2025 Vietnam Currency Museum - History and Heritage'}
        </p>
      </footer>
    </div>
  );
}

export default App;
