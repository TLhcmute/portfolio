
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Function to handle reveal animations on scroll
    const revealElements = () => {
      const reveals = document.querySelectorAll('section');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };
    
    // Initial check and add event listener
    revealElements();
    window.addEventListener('scroll', revealElements);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', revealElements);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About className="reveal" />
      <Skills className="reveal" />
      <Projects className="reveal" />
      <Awards className="reveal" />
      <Contact className="reveal" />
      <Footer />
    </div>
  );
};

export default Index;
