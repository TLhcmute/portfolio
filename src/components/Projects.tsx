
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-learning Platform",
      description: "Nền tảng học trực tuyến cho sinh viên HCMUTE với tính năng quản lý khóa học, diễn đàn thảo luận và theo dõi tiến độ học tập.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Smart Home IoT Dashboard",
      description: "Bảng điều khiển dành cho các thiết bị IoT trong nhà thông minh, cho phép người dùng giám sát và điều khiển từ xa.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "WebSockets", "Chart.js"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "UTE Event Management",
      description: "Ứng dụng quản lý sự kiện trường học, hỗ trợ đăng ký, quét mã QR tại cửa và thống kê số lượng tham dự.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Personal Finance Tracker",
      description: "Ứng dụng theo dõi chi tiêu và thu nhập cá nhân với các biểu đồ trực quan và tính năng đặt mục tiêu tài chính.",
      image: "/placeholder.svg",
      technologies: ["React", "NestJS", "PostgreSQL", "Recharts"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Bảng điều khiển quản lý đa nền tảng mạng xã hội, hỗ trợ lên lịch đăng bài và phân tích số liệu tương tác.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Express.js", "OAuth", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Tech Blog Platform",
      description: "Nền tảng blog về công nghệ với hỗ trợ markdown, highlight cú pháp code và tìm kiếm theo từ khóa.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "Node.js", "MongoDB", "Prism.js"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dự <span className="gradient-text">Án</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Những dự án tôi đã thực hiện, từ ý tưởng đến triển khai
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
