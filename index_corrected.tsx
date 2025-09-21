/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 15;

  const toggleTheme = () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const button = document.querySelector('.theme-icon');
    
    if (currentTheme === 'dark') {
      body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      if (button) button.textContent = '🌙';
      setIsDarkMode(false);
    } else {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      if (button) button.textContent = '☀️';
      setIsDarkMode(true);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber);
    }
  };

  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return (
          <section className="card">
            <h1>Chương 2. Chủ nghĩa duy vật biện chứng</h1>
            <h2>III. Lý luận nhận thức</h2>
            <div className="author-info">
              <p><strong>Báo cáo viên:</strong> Nguyễn Tô Tuyên</p>
              <p><strong>Lớp:</strong> AI1806</p>
              <p><strong>Giảng viên:</strong> TS. Lê Văn Thiện</p>
            </div>
          </section>
        );

      case 2:
        return (
          <section className="card">
            <h2>Lý luận nhận thức của chủ nghĩa duy vật biện chứng</h2>
            <ul>
              <li>Chủ nghĩa duy vật biện chứng khẳng định khả năng con người có thể nhận thức được thế giới¹.</li>
              <li>Nhận thức không phải là một quá trình diễn ra một lần là xong, mà là một quá trình biện chứng, liên tục phát triển, bổ sung và hoàn thiện².</li>
            </ul>
          </section>
        );

      case 3:
        return (
          <section className="card">
            <h2>Các nguyên tắc của lý luận nhận thức</h2>
            <ul>
              <li><strong>Thừa nhận tính khách quan của tồn tại vật chất:</strong> Thế giới vật chất tồn tại khách quan, độc lập với ý thức con người. Ý thức chỉ là sự phản ánh của thế giới đó³.</li>
              <li><strong>Công nhận tính chủ quan của hình ảnh phản ánh:</strong> Cảm giác, tri giác, ý thức là hình ảnh chủ quan của thế giới khách quan, mang tính tích cực và sáng tạo, không phải là sự phản ánh thụ động⁴.</li>
              <li><strong>Lấy thực tiễn làm tiêu chuẩn:</strong> Thực tiễn là quan điểm cơ bản và là tiêu chuẩn để kiểm tra tính chân thực của tri thức⁵.</li>
            </ul>
          </section>
        );

      case 4:
        return (
          <section className="card">
            <h2>Nguồn gốc và bản chất của nhận thức</h2>
            <h3>Nguồn gốc:</h3>
            <p>Thế giới vật chất khách quan là nguồn gốc và đối tượng của nhận thức⁶.</p>
            <h3>Bản chất:</h3>
            <p>Nhận thức là quá trình phản ánh hiện thực khách quan vào bộ óc con người. Đây là một quá trình biện chứng, từ sự không hiểu biết đến hiểu biết, từ không đầy đủ trở nên đầy đủ và chính xác hơn⁷.</p>
          </section>
        );

      case 5:
        return (
          <section className="card">
            <h2>Thực tiễn và vai trò của thực tiễn</h2>
            <h3>Phạm trù thực tiễn:</h3>
            <p>Là toàn bộ hoạt động vật chất – cảm tính, có tính lịch sử – xã hội của con người, nhằm cải tạo tự nhiên và xã hội⁸.</p>
            <h3>Đặc trưng của thực tiễn:</h3>
            <ul>
              <li><strong>Tính vật chất - cảm tính⁹</strong></li>
              <li><strong>Tính lịch sử - xã hội¹⁰</strong></li>
              <li><strong>Tính tự giác¹¹</strong></li>
            </ul>
          </section>
        );

      case 6:
        return (
          <section className="card">
            <h2>Các hình thức cơ bản của thực tiễn</h2>
            <ul>
              <li><strong>Hoạt động sản xuất vật chất:</strong> Hình thức cơ bản và quan trọng nhất, là phương thức tồn tại của con người và xã hội¹².</li>
              <li><strong>Hoạt động chính trị – xã hội:</strong> Nhằm biến đổi, cải tạo và phát triển các quan hệ xã hội¹³.</li>
              <li><strong>Hoạt động thực nghiệm khoa học:</strong> Con người chủ động tạo ra các điều kiện để tiến hành thực nghiệm, phục vụ nghiên cứu¹⁴.</li>
            </ul>
          </section>
        );

      case 7:
        return (
          <section className="card">
            <h2>Vai trò của thực tiễn đối với nhận thức</h2>
            <ul>
              <li><strong>Là cơ sở, động lực của nhận thức:</strong> Mọi nhận thức đều nảy sinh từ thực tiễn. Thực tiễn đặt ra nhu cầu, nhiệm vụ và phương hướng cho nhận thức phát triển¹⁵.</li>
              <li><strong>Là mục đích của nhận thức:</strong> Nhận thức nhằm phục vụ, soi đường và chỉ đạo thực tiễn¹⁶.</li>
              <li><strong>Là tiêu chuẩn để kiểm tra chân lý:</strong> Thực tiễn là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý và bác bỏ sai lầm¹⁷.</li>
            </ul>
          </section>
        );

      case 8:
        return (
          <section className="card">
            <h2>Các giai đoạn cơ bản của quá trình nhận thức</h2>
            <p>Quá trình nhận thức diễn ra theo con đường biện chứng:</p>
            <p className="quote-text"><em>"Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn"</em>¹⁸.</p>
          </section>
        );

      case 9:
        return (
          <section className="card">
            <h2>Nhận thức cảm tính (Trực quan sinh động)</h2>
            <p>Là giai đoạn đầu tiên, phản ánh trực tiếp khách thể thông qua các giác quan¹⁹.</p>
            <h3>Các hình thức:</h3>
            <ul>
              <li><strong>Cảm giác:</strong> Phản ánh một thuộc tính riêng lẻ của sự vật²⁰.</li>
              <li><strong>Tri giác:</strong> Tổng hợp nhiều cảm giác, cho hình ảnh trọn vẹn hơn về sự vật²¹.</li>
              <li><strong>Biểu tượng:</strong> Hình ảnh sự vật được tái hiện trong óc khi không còn tác động trực tiếp²².</li>
            </ul>
            <p><strong>Hạn chế:</strong> Chưa đem lại hiểu biết sâu sắc, khái quát, chưa phân biệt được bản chất và hiện tượng²³.</p>
          </section>
        );

      case 10:
        return (
          <section className="card">
            <h2>Nhận thức lý tính (Tư duy trừu tượng)</h2>
            <p>Bắt nguồn từ nhận thức cảm tính, phản ánh sự vật một cách gián tiếp, khái quát và đầy đủ hơn²⁴.</p>
            <h3>Các hình thức:</h3>
            <ul>
              <li><strong>Khái niệm:</strong> Phản ánh các thuộc tính chung, bản chất của sự vật²⁵.</li>
              <li><strong>Phán đoán:</strong> Liên kết các khái niệm để phản ánh mối liên hệ giữa các sự vật²⁶.</li>
              <li><strong>Suy lý (Suy luận):</strong> Đi từ cái đã biết đến cái chưa biết một cách gián tiếp (Quy nạp và Diễn dịch)²⁷.</li>
            </ul>
            <p><strong>Ưu điểm:</strong> Phản ánh được mối liên hệ bản chất, tất nhiên, bên trong của sự vật²⁸.</p>
          </section>
        );

      case 11:
        return (
          <section className="card">
            <h2>Sự thống nhất giữa các giai đoạn và thực tiễn</h2>
            <ul>
              <li>Nhận thức cảm tính và lý tính là hai giai đoạn khác nhau nhưng thống nhất, liên hệ và bổ sung cho nhau²⁹.</li>
              <li>Quá trình nhận thức lặp đi lặp lại chu trình "Trực quan sinh động → Tư duy trừu tượng → Thực tiễn" để ngày càng tiến sâu hơn vào bản chất sự vật³⁰.</li>
              <li>Nhận thức của con người là một quá trình vô tận³¹.</li>
            </ul>
          </section>
        );

      case 12:
        return (
          <section className="card">
            <h2>Chân lý và các tính chất</h2>
            <h3>Khái niệm chân lý:</h3>
            <p>Là tri thức phù hợp với hiện thực khách quan và đã được thực tiễn kiểm nghiệm³².</p>
            <h3>Các tính chất của chân lý:</h3>
            <ul>
              <li><strong>Tính khách quan:</strong> Nội dung của chân lý là khách quan, không phụ thuộc vào ý muốn chủ quan³³.</li>
              <li><strong>Tính tương đối và tính tuyệt đối:</strong> Chân lý tuyệt đối là tổng số của các chân lý tương đối³⁴.</li>
              <li><strong>Tính cụ thể:</strong> Chân lý luôn gắn với điều kiện, hoàn cảnh lịch sử, không gian và thời gian cụ thể³⁵.</li>
            </ul>
          </section>
        );

      case 13:
        return (
          <section className="card">
            <h2>Kết luận</h2>
            <ul>
              <li>Trong nhận thức và hoạt động thực tiễn, cần phải tôn trọng tính khách quan và hành động theo quy luật khách quan³⁶.</li>
              <li>Việc chấp nhận một quan điểm chỉ vì được số đông tin theo mà thiếu sự kiểm chứng khách quan có thể dẫn đến những sai lầm nghiêm trọng³⁷.</li>
            </ul>
          </section>
        );

      case 14:
        return (
          <section className="card">
            <h2>Chân lý và Sự thừa nhận của Đám đông</h2>
            <h3>Phân biệt Chân lý với Niềm tin chủ quan</h3>
            <div className="quote-text">
              <p>"Cái gì đám đông thừa nhận thì chính là chân lý" - quan điểm sai lầm về mặt triết học, đi ngược lại nguyên tắc của chủ nghĩa duy vật biện chứng⁹.</p>
            </div>
            <p>• <strong>Chân lý không phụ thuộc</strong> vào niềm tin của cá nhân hay số đông¹⁰.</p>
            <p>• Chấp nhận một quan điểm chỉ vì số đông tin theo mà không có kiểm chứng khách quan có thể dẫn đến sai lầm nghiêm trọng¹¹.</p>
            
            <h3>"Quần chúng nhân dân" ≠ "Đám đông tin theo"</h3>
            <p><strong>Quần chúng nhân dân:</strong> Chủ thể sáng tạo, động lực phát triển lịch sử, hoạt động thực tiễn theo quy luật khách quan¹².</p>
            <p><strong>Đám đông tin theo:</strong> Sự thừa nhận dựa trên niềm tin chủ quan, không phải cơ sở xác định chân lý¹³.</p>
          </section>
        );

      case 15:
        return (
          <section className="card">
            <h2>Ví dụ thực tiễn: Khi "Đám đông" sai lầm</h2>
            <div className="quote-text">
              <p><strong>Chân lý không được quyết định bởi số lượng người tin vào nó</strong></p>
            </div>
            
            <h3>🌍 Thuyết Địa tâm</h3>
            <p><strong>Niềm tin đám đông:</strong> Trong nhiều thế kỷ, hầu hết mọi người tin Mặt Trời quay quanh Trái Đất.</p>
            <p><strong>Chân lý khách quan:</strong> Thực tiễn khoa học (Copernicus, Galileo) chứng minh Trái Đất quay quanh Mặt Trời.</p>

            <h3>📱 Tin giả trên mạng xã hội</h3>
            <p><strong>Niềm tin đám đông:</strong> Thông tin sai lệch được hàng triệu người chia sẻ trong vài giờ.</p>
            <p><strong>Chân lý khách quan:</strong> Phải kiểm chứng bằng nguồn tin cậy và bằng chứng thực tế.</p>

            <h3>🌍 Quan niệm Trái Đất phẳng</h3>
            <p>Dù có vô số bằng chứng khoa học, một số nhóm vẫn tin điều này. Chân lý khoa học đã chứng minh Trái Đất hình cầu.</p>

            <div className="quote-text">
              <p><strong>Kết luận:</strong> Chân lý luôn phải bắt nguồn và được kiểm nghiệm bởi hiện thực khách quan, không phải sự thừa nhận của đám đông¹⁵.</p>
            </div>
          </section>
        );

      default:
        return (
          <section className="card">
            <h2>Slide không tồn tại</h2>
            <p>Vui lòng chọn slide từ 1 đến 15</p>
          </section>
        );
    }
  };

  return (
    <main className="container">
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <span className="theme-icon">🌙</span>
      </button>
      
      {/* Navigation Controls */}
      <div className="slide-nav">
        <button 
          className="nav-btn" 
          onClick={prevSlide} 
          disabled={currentSlide === 1}
        >
          ← Trước
        </button>
        <span className="slide-counter">{currentSlide}/15</span>
        <button 
          className="nav-btn" 
          onClick={nextSlide} 
          disabled={currentSlide === 15}
        >
          Tiếp →
        </button>
      </div>

      {/* Slide Content */}
      {renderSlideContent()}
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);