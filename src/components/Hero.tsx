
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 -top-48 -left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute h-96 w-96 top-1/2 left-1/2 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute h-96 w-96 -bottom-48 -right-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block">Xin chào, tôi là</span>
          <span className="gradient-text text-5xl md:text-7xl lg:text-8xl block mt-2">Quách Tài Lợi</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Sinh viên Đại học Sư phạm Kỹ thuật TP.HCM, đam mê phát triển web với ReactJS, NextJS và NodeJS.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/80 text-lg py-6 px-8" asChild>
            <a href="#projects">Xem Dự án</a>
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg py-6 px-8" asChild>
            <a href="#contact">Liên hệ</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
