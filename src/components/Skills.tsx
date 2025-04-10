
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Ngôn ngữ lập trình",
      skills: [
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 85 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "ReactJS", level: 88 },
        { name: "NextJS", level: 82 },
        { name: "Redux", level: 75 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "NestJS", level: 75 },
        { name: "RESTful API", level: 85 }
      ]
    },
    {
      title: "Công cụ & Khác",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Docker", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kỹ <span className="gradient-text">Năng</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Các kỹ năng và công nghệ tôi đã học và sử dụng trong các dự án của mình
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-background border border-secondary hover:border-primary transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 gradient-text">{category.title}</h3>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Các công nghệ khác</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "SASS", "Firebase", "GraphQL", "Material UI", "Figma", 
              "Jest", "AWS", "Webpack", "WebSockets", "SSR", "PWA"
            ].map((tech, index) => (
              <span key={index} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
