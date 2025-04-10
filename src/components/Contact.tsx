
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Tin nhắn đã được gửi!",
        description: "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.",
        variant: "default",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Liên <span className="gradient-text">Hệ</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Hãy liên hệ với tôi nếu bạn có bất kỳ câu hỏi hoặc cơ hội hợp tác nào
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="rounded-full p-3 bg-primary/20 text-primary mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:quachtailoi@example.com" className="text-gray-300 hover:text-primary transition-colors">
                    quachtailoi@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full p-3 bg-primary/20 text-primary mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Điện thoại</h4>
                  <a href="tel:+84123456789" className="text-gray-300 hover:text-primary transition-colors">
                    +84 123 456 789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full p-3 bg-primary/20 text-primary mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Địa chỉ</h4>
                  <p className="text-gray-300">
                    Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)<br />
                    Số 1 Võ Văn Ngân, Thủ Đức, TP.HCM
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Mạng xã hội</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="rounded-full p-3 bg-secondary text-white hover:bg-primary transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="rounded-full p-3 bg-secondary text-white hover:bg-primary transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <Card className="bg-secondary/10 border border-secondary hover:border-primary transition-all">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Gửi tin nhắn</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Họ và tên
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Nhập họ và tên của bạn"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Nhập địa chỉ email của bạn"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tin nhắn
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Nhập nội dung tin nhắn của bạn"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background border-secondary min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 animate-spin" />
                      Đang gửi...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Gửi tin nhắn
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
