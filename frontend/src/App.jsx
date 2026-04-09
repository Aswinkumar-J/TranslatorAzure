import { useState } from 'react';
import TranslatorWidget from './components/TranslatorWidget';
import HistorySidebar from './components/HistorySidebar';
import './index.css';

function App() {
  const [refreshHistory, setRefreshHistory] = useState(0);

  const handleTranslationSaved = () => {
    setRefreshHistory(prev => prev + 1);
  };

  return (
    <div className="app-container">
      <header className="app-header">
      </header>

      <div className="dashboard-grid vertical-layout">
        <div className="sidebar-content">
          <HistorySidebar refreshTrigger={refreshHistory} />
        </div>
        <div className="main-content">
          <TranslatorWidget onTranslationSaved={handleTranslationSaved} />
        </div>
      </div>
    </div>
  );
}

export default App;
