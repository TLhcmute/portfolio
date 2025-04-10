
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  return (
    <Card className="overflow-hidden border border-secondary hover:border-primary transition-all duration-300 bg-background/50 backdrop-blur-sm h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 rounded bg-secondary text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 mt-auto">
          {githubLink && (
            <Button variant="outline" size="icon" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          )}
          
          {liveLink && (
            <Button className="flex-1" asChild>
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <span>Xem Dự Án</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
