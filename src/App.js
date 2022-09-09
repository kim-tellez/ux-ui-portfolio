import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HavenStation from './components/HavenStation';
import Vauven from './components/Vauven';
import BPMusic from './components/BPMusic';
import ReadingfulMoments from './components/ReadingfulMoments';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/ux-ui-portfolio" element={<Home />}></Route>
            <Route path="/ux-ui-portfolio/case-studies/haven-station" element={<HavenStation />}></Route>
            <Route path="/ux-ui-portfolio/case-studies/vauven" element={<Vauven />}></Route>
            <Route path="/ux-ui-portfolio/case-studies/bpmusic" element={<BPMusic />}></Route>
            <Route path="/ux-ui-portfolio/case-studies/readingful-moments" element={<ReadingfulMoments />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}