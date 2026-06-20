import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ArchivePage from './pages/ArchivePage';
import TheoryDetailPage from './pages/TheoryDetailPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ArchivePage />} />
        <Route path="/theory/:id" element={<TheoryDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ArchivePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
