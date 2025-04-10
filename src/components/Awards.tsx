
import { Award, Calendar, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Awards = () => {
  return (
    <section id="awards" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Giải <span className="gradient-text">Thưởng</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Những thành tựu và ghi nhận tôi đã đạt được trong quá trình học tập và làm việc
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-background h-full border border-secondary hover:border-primary transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="rounded-full p-3 bg-primary/20 text-primary mr-4">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">Thành tích nổi bật</h3>
                </div>
                
                <ul className="space-y-4 flex-grow">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">Giải Ba Hackathon UTE mở rộng 2025</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">Top 5 Cuộc thi Lập trình Sinh viên 2025</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-gray-300">Học bổng Khuyến khích học tập Học kỳ 1, Năm 2025</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="bg-background h-full border border-secondary hover:border-primary transition-all pulse-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
                  <div className="rounded-full bg-primary/10 p-6 flex items-center justify-center">
                    <Trophy className="h-12 w-12 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2 gradient-text">Giải Ba Hackathon UTE mở rộng 2025</h3>
                    <div className="flex flex-wrap gap-4 text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>Tháng 3, 2025</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>Nhóm 4 thành viên</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    Tại Hackathon UTE mở rộng 2025, nhóm của tôi đã phát triển một giải pháp ứng dụng IoT 
                    kết hợp trí tuệ nhân tạo để theo dõi và tối ưu hóa việc sử dụng năng lượng trong khuôn viên 
                    trường đại học.
                  </p>
                  <p>
                    Dự án của chúng tôi đã nhận được giải Ba và được đánh giá cao về tính khả thi, 
                    khả năng mở rộng và tiềm năng ứng dụng thực tế.
                  </p>
                  <p>
                    Đóng góp của tôi tập trung vào phát triển giao diện người dùng với ReactJS và 
                    xây dựng API backend với NestJS để kết nối và quản lý các thiết bị IoT.
                  </p>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Công nghệ sử dụng:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "NestJS", "IoT Sensors", "TensorFlow", "MQTT", "WebSockets"].map((tech, index) => (
                        <span key={index} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
