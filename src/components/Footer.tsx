
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-secondary/50 bg-background">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          <a href="#home" className="font-bold text-2xl mb-4">
            <span className="gradient-text">Quách Tài Lợi</span>
          </a>
          
          <div className="flex justify-center space-x-6 mb-6">
            {['Home', 'About', 'Skills', 'Projects', 'Awards', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Quách Tài Lợi. Được tạo với{' '}
            <Heart className="h-4 w-4 mx-1 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
