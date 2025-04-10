import { Heart, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 border-t border-secondary/50 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          <a href="#home" className="font-bold text-2xl mb-4 relative group">
            <span className="gradient-text">Quách Tài Lợi</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6">
            {["Home", "About", "Skills", "Projects", "Awards", "Contact"].map(
              (item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/50 group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="mailto:quachtailoi@gmail.com"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              tailoi1606@gmail.com
            </a>
            <a
              href="tel:+84123456789"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items a center"
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              +84 797 526 990
            </a>
          </div>

          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Quách Tài Lợi
            <Heart className="h-4 w-4 mx-1 text-red-500 hover:animate-pulse" />
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        variant="outline"
        size="icon"
        className={`fixed bottom-6 right-6 rounded-full bg-primary/20 border-primary/50 z-40 transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;
