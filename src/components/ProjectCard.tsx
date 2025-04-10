
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies,
  liveLink,
  githubLink
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden border border-secondary hover:border-primary transition-all duration-300 bg-background/50 backdrop-blur-sm h-full flex flex-col hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className={`object-cover w-full h-full transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group flex items-center">
          {title}
          <span className={`ml-2 h-2 w-2 rounded-full bg-primary transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></span>
        </h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className={`text-xs px-2 py-1 rounded bg-secondary text-gray-300 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-90'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className={`flex gap-3 mt-auto transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
          {githubLink && (
            <Button variant="outline" size="icon" className="glass-effect" asChild>
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub repository"
                className="relative overflow-hidden"
              >
                <Github className="h-5 w-5" />
                <span className={`absolute inset-0 bg-primary/20 rounded-md transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></span>
              </a>
            </Button>
          )}
          
          {liveLink && (
            <Button className={`flex-1 transition-all duration-300 ${isHovered ? 'bg-primary shadow-lg' : 'bg-primary/90'}`} asChild>
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <span>Xem Dự Án</span>
                <ExternalLink className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
