import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AgriculturePage from './pages/AgriculturePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AgriculturePage />} />
            <Route path="/services" element={<AgriculturePage />} />
            <Route path="/portfolio" element={<AgriculturePage />} />
            <Route path="/about" element={<AgriculturePage />} />
            <Route path="/contact" element={<AgriculturePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
