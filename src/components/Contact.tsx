import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Liên <span className="gradient-text">Hệ</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            Hãy liên hệ với tôi nếu bạn có bất kỳ câu hỏi hoặc cơ hội hợp tác
            nào
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-secondary/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Gửi tin nhắn cho tôi
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Tên của bạn
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-background border-secondary"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Địa chỉ email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-background border-secondary"
                  placeholder="Nhập địa chỉ email của bạn"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-bold mb-2"
                >
                  Tin nhắn
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-background border-secondary"
                  placeholder="Nhập tin nhắn của bạn"
                ></textarea>
              </div>
              <div className="text-center">
                <Button className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline hover-lift">
                  Gửi tin nhắn
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-secondary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-gray-300">tailoi1606@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-secondary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-gray-300">+84 797 526 990</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-secondary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-gray-300">
                    1 Võ Văn Ngân, Linh Chiểu, Thủ Đức, TP.HCM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
