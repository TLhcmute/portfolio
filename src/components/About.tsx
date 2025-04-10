
import { GraduationCap, Award, Code } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Về <span className="gradient-text">Tôi</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Xin chào! Tôi là Quách Tài Lợi, sinh viên năm nhất tại Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE). 
              Tôi có niềm đam mê với lập trình web và phát triển ứng dụng, đặc biệt là các công nghệ frontend 
              và backend hiện đại.
            </p>
            <p className="text-lg text-gray-300">
              Với nền tảng kiến thức vững chắc về JavaScript/TypeScript, tôi đã tập trung vào việc phát triển 
              các ứng dụng web sử dụng ReactJS, NextJS ở frontend và Node.js, Express, NestJS ở backend.
            </p>
            <p className="text-lg text-gray-300">
              Tôi luôn tìm kiếm cơ hội để trau dồi kỹ năng và thách thức bản thân qua các dự án thực tế 
              và hackathon, như giải Ba tại Hackathon UTE mở rộng 2025.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-secondary/50 border border-secondary hover:border-primary transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/20 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Học vấn</h3>
                  <p className="text-gray-300">Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)</p>
                  <p className="text-gray-400">Sinh viên năm 1</p>
                  <p className="text-primary mt-2 font-medium">GPA: 3.1</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 border border-secondary hover:border-primary transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/20 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Thành tựu</h3>
                  <p className="text-gray-300">Giải Ba Hackathon UTE mở rộng 2025</p>
                  <p className="text-gray-400">Phát triển giải pháp công nghệ sáng tạo</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 border border-secondary hover:border-primary transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/20 text-primary">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mục tiêu</h3>
                  <p className="text-gray-300">Trở thành Full-Stack Developer chuyên nghiệp</p>
                  <p className="text-gray-400">Không ngừng học hỏi và phát triển kỹ năng mới</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
