// Created: 2026-07-27 16:32 — 포트폴리오 React 버전 루트 컴포넌트
import Nav from './components/Nav';
import Hero from './components/Hero';
import AiFlow from './components/AiFlow';
import Works from './components/Works';
import Skills from './components/Skills';
import Story from './components/Story';
import Cta from './components/Cta';
import Footer from './components/Footer';
import { useFadeUp } from './hooks/useFadeUp';

export default function App() {
  useFadeUp();

  return (
    <>
      <Nav />
      <Hero />
      <AiFlow />
      <Works />
      <Skills />
      <Story />
      <Cta />
      <Footer />
    </>
  );
}
