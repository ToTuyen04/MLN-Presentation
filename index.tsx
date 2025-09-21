/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './modern-styles.css';

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
          <section className="hero-slide animate-fade-scale">
            <div className="icon-wrapper icon-large">🧠</div>
            <h1 className="hero-title">Chương 2. Chủ nghĩa duy vật biện chứng</h1>
            <p className="hero-subtitle">II. Lý luận nhận thức</p>
            <div className="section-divider"></div>
            <div className="content-grid">
              <div className="content-card">
                <div className="icon-wrapper">👨‍🎓</div>
                <h3>Thành viên</h3>
                <p>Tô Minh Tuyền</p>
                <p>Trương Thiên Lộc</p>
                <p>Phùng Minh Thiện</p>
                <p>Trần Lưu Lâm Hoàng</p>
              </div>
              <div className="content-card">
                <div className="icon-wrapper">🏫</div>
                <h3>Lớp học</h3>
                <p>AI1806</p>
              </div>
              <div className="content-card">
                <div className="icon-wrapper">👨‍🏫</div>
                <h3>Giảng viên</h3>
                <p>Nguyễn Văn Bình</p>
              </div>
            </div>
          </section>
        );

      case 2:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">🎯</div>
            <h2 className="section-title">Lý luận nhận thức của chủ nghĩa duy vật biện chứng</h2>
            
            <div className="feature-grid">
              <div className="feature-card">
                <div className="icon-wrapper">✨</div>
                <h3 className="section-subtitle">Khả năng nhận thức</h3>
                <p className="body-text">Chủ nghĩa duy vật biện chứng khẳng định khả năng con người có thể nhận thức được thế giới.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">🔄</div>
                <h3 className="section-subtitle">Quá trình biện chứng</h3>
                <p className="body-text">Nhận thức không phải là một quá trình diễn ra một lần là xong, mà là một quá trình biện chứng, liên tục phát triển, bổ sung và hoàn thiện.</p>
              </div>
            </div>
          </section>
        );

       case 3:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">📋</div>
            <h2 className="section-title">Các nguyên tắc của lý luận nhận thức</h2>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div>
                  <h3 className="section-subtitle">Tính khách quan của tồn tại vật chất</h3>
                  <p className="body-text">Thế giới vật chất tồn tại khách quan, độc lập với ý thức con người. Ý thức chỉ là sự phản ánh của thế giới đó.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div>
                  <h3 className="section-subtitle">Tính chủ quan của hình ảnh phản ánh</h3>
                  <p className="body-text">Cảm giác, tri giác, ý thức là hình ảnh chủ quan của thế giới khách quan, mang tính tích cực và sáng tạo, không phải là sự phản ánh thụ động.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div>
                  <h3 className="section-subtitle">Thực tiễn làm tiêu chuẩn</h3>
                  <p className="body-text">Thực tiễn là quan điểm cơ bản và là tiêu chuẩn để kiểm tra tính chân thực của tri thức.</p>
                </div>
              </div>
            </div>
          </section>
        );

      case 4:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">🌱</div>
            <h2 className="section-title">Nguồn gốc và bản chất của nhận thức</h2>
            
            <div className="content-grid">
              <div className="content-card">
                <div className="icon-wrapper">🌍</div>
                <h3 className="section-subtitle">Nguồn gốc</h3>
                <p className="body-text">Thế giới vật chất khách quan là nguồn gốc và đối tượng của nhận thức.</p>
              </div>
              
              <div className="content-card">
                <div className="icon-wrapper">🧠</div>
                <h3 className="section-subtitle">Bản chất</h3>
                <p className="body-text">Nhận thức là quá trình phản ánh hiện thực khách quan vào bộ óc con người.</p>
              </div>
            </div>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">📊</div>
                <div>
                  <h3 className="section-subtitle">Quá trình biện chứng</h3>
                  <p className="body-text">Từ sự không hiểu biết đến hiểu biết, từ không đầy đủ trở nên đầy đủ và chính xác hơn.</p>
                </div>
              </div>
            </div>
          </section>
        );

      case 5:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">⚡</div>
            <h2 className="section-title">Thực tiễn và vai trò của thực tiễn</h2>
            
            <div className="quote-block">
              <p className="quote-text">Phạm trù thực tiễn: Là toàn bộ hoạt động vật chất – cảm tính, có tính lịch sử – xã hội của con người, nhằm cải tạo tự nhiên và xã hội</p>
            </div>
            
            <h3 className="section-subtitle">Đặc trưng của thực tiễn:</h3>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="icon-wrapper">🔨</div>
                <h3 className="section-subtitle">Tính vật chất - cảm tính</h3>
                <p className="body-text">Hoạt động thực tiễn có tính vật chất cụ thể, có thể quan sát được.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">📚</div>
                <h3 className="section-subtitle">Tính lịch sử - xã hội</h3>
                <p className="body-text">Gắn liền với sự phát triển lịch sử và điều kiện xã hội cụ thể.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">🎯</div>
                <h3 className="section-subtitle">Tính tự giác</h3>
                <p className="body-text">Con người hoạt động có ý thức, có mục đích và kế hoạch.</p>
              </div>
            </div>
          </section>
        );

     case 6:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">🏗️</div>
            <h2 className="section-title">Các hình thức cơ bản của thực tiễn</h2>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">🔨</div>
                <div>
                  <h3 className="section-subtitle">Hoạt động sản xuất vật chất</h3>
                  <p className="body-text">Hình thức cơ bản và quan trọng nhất, là phương thức tồn tại của con người và xã hội.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">⚖️</div>
                <div>
                  <h3 className="section-subtitle">Hoạt động chính trị – xã hội</h3>
                  <p className="body-text">Nhằm biến đổi, cải tạo và phát triển các quan hệ xã hội.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">🔬</div>
                <div>
                  <h3 className="section-subtitle">Hoạt động thực nghiệm khoa học</h3>
                  <p className="body-text">Con người chủ động tạo ra các điều kiện để tiến hành thực nghiệm, phục vụ nghiên cứu.</p>
                </div>
              </div>
            </div>
          </section>
        );

       case 7:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">🎪</div>
            <h2 className="section-title">Vai trò của thực tiễn đối với nhận thức</h2>
            
            <div className="feature-grid">
              <div className="feature-card">
                <div className="icon-wrapper">🎯</div>
                <h3 className="section-subtitle">Cơ sở, động lực của nhận thức</h3>
                <p className="body-text">Mọi nhận thức đều nảy sinh từ thực tiễn. Thực tiễn đặt ra nhu cầu, nhiệm vụ và phương hướng cho nhận thức phát triển.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">🚀</div>
                <h3 className="section-subtitle">Mục đích của nhận thức</h3>
                <p className="body-text">Nhận thức nhằm phục vụ, soi đường và chỉ đạo thực tiễn.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">✅</div>
                <h3 className="section-subtitle">Tiêu chuẩn kiểm tra chân lý</h3>
                <p className="body-text">Thực tiễn là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý và bác bỏ sai lầm.</p>
              </div>
            </div>
          </section>
        );

     case 8:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">🔄</div>
            <h2 className="section-title">Các giai đoạn cơ bản của quá trình nhận thức</h2>
            
            <div className="quote-block">
              <p className="quote-text">Quá trình nhận thức diễn ra theo con đường biện chứng:</p>
              <p className="quote-text"><em>"Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn"</em></p>
            </div>
          </section>
        );

      case 9:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">👁️</div>
            <h2 className="section-title">Nhận thức cảm tính (Trực quan sinh động)</h2>
            
            <p className="body-text">Là giai đoạn đầu tiên, phản ánh trực tiếp khách thể thông qua các giác quan.</p>
            
            <h3 className="section-subtitle">Các hình thức:</h3>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="icon-wrapper">👂</div>
                <h3>Cảm giác</h3>
                <p className="body-text">Phản ánh một thuộc tính riêng lẻ của sự vật.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">🖼️</div>
                <h3>Tri giác</h3>
                <p className="body-text">Tổng hợp nhiều cảm giác, cho hình ảnh trọn vẹn hơn về sự vật.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">💭</div>
                <h3>Biểu tượng</h3>
                <p className="body-text">Hình ảnh sự vật được tái hiện trong óc khi không còn tác động trực tiếp.</p>
              </div>
            </div>
            
            <div className="quote-block">
              <p><strong>Hạn chế:</strong> Chưa đem lại hiểu biết sâu sắc, khái quát, chưa phân biệt được bản chất và hiện tượng.</p>
            </div>
          </section>
        );

      case 10:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">🧮</div>
            <h2 className="section-title">Nhận thức lý tính (Tư duy trừu tượng)</h2>
            
            <p className="body-text">Bắt nguồn từ nhận thức cảm tính, phản ánh sự vật một cách gián tiếp, khái quát và đầy đủ hơn.</p>
            
            <h3 className="section-subtitle">Các hình thức:</h3>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="icon-wrapper">💡</div>
                <h3>Khái niệm</h3>
                <p className="body-text">Phản ánh các thuộc tính chung, bản chất của sự vật.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">🔗</div>
                <h3>Phán đoán</h3>
                <p className="body-text">Liên kết các khái niệm để phản ánh mối liên hệ giữa các sự vật.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">🧠</div>
                <h3>Suy lý (Suy luận)</h3>
                <p className="body-text">Đi từ cái đã biết đến cái chưa biết một cách gián tiếp (Quy nạp và Diễn dịch).</p>
              </div>
            </div>
            
            <div className="quote-block">
              <p><strong>Ưu điểm:</strong> Phản ánh được mối liên hệ bản chất, tất nhiên, bên trong của sự vật.</p>
            </div>
          </section>
        );

      case 11:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">🤝</div>
            <h2 className="section-title">Sự thống nhất giữa các giai đoạn và thực tiễn</h2>
            
            <div className="feature-grid">
              <div className="feature-card">
                <div className="icon-wrapper">🔄</div>
                <h3>Thống nhất và bổ sung</h3>
                <p className="body-text">Nhận thức cảm tính và lý tính là hai giai đoạn khác nhau nhưng thống nhất, liên hệ và bổ sung cho nhau.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">♻️</div>
                <h3>Chu trình liên tục</h3>
                <p className="body-text">Quá trình nhận thức lặp đi lặp lại chu trình "Trực quan sinh động → Tư duy trừu tượng → Thực tiễn" để ngày càng tiến sâu hơn vào bản chất sự vật.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">♾️</div>
                <h3>Quá trình vô tận</h3>
                <p className="body-text">Nhận thức của con người là một quá trình vô tận.</p>
              </div>
            </div>
          </section>
        );

      case 12:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">💎</div>
            <h2 className="section-title">Chân lý và các tính chất</h2>
            
            <div className="quote-block">
              <h3 className="section-subtitle">Khái niệm chân lý:</h3>
              <p className="quote-text">Là tri thức phù hợp với hiện thực khách quan và đã được thực tiễn kiểm nghiệm.</p>
            </div>
            
            <h3 className="section-subtitle">Các tính chất của chân lý:</h3>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="icon-wrapper">🌍</div>
                <h3>Tính khách quan</h3>
                <p className="body-text">Nội dung của chân lý là khách quan, không phụ thuộc vào ý muốn chủ quan.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">⚖️</div>
                <h3>Tính tương đối và tuyệt đối</h3>
                <p className="body-text">Chân lý tuyệt đối là tổng số của các chân lý tương đối.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">📍</div>
                <h3>Tính cụ thể</h3>
                <p className="body-text">Chân lý luôn gắn với điều kiện, hoàn cảnh lịch sử, không gian và thời gian cụ thể.</p>
              </div>
            </div>
          </section>
        );


      case 15:
        return (
          <section className="card animate-slide-up">
            <div className="icon-wrapper icon-large">🎯</div>
            <h2 className="section-title">Kết luận</h2>
            
            <div className="feature-grid">
              <div className="feature-card">
                <div className="icon-wrapper">✅</div>
                <h3>Tôn trọng tính khách quan</h3>
                <p className="body-text">Trong nhận thức và hoạt động thực tiễn, cần phải tôn trọng tính khách quan và hành động theo quy luật khách quan.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-wrapper">⚠️</div>
                <h3>Cảnh báo về sai lầm</h3>
                <p className="body-text">Việc chấp nhận một quan điểm chỉ vì được số đông tin theo mà thiếu sự kiểm chứng khách quan có thể dẫn đến những sai lầm nghiêm trọng.</p>
              </div>
            </div>
            
            <div className="quote-block">
              <p className="quote-text"><strong>Cảm ơn các bạn đã lắng nghe!</strong></p>
            </div>
          </section>
        );

      case 13:
        return (
          <section className="card">
            <h2>Chân lý và Sự thừa nhận của Đám đông</h2>
            <h3>Phân biệt Chân lý với Niềm tin chủ quan</h3>
            <div className="quote-text">
              <p>
                "Cái gì đám đông thừa nhận thì chính là chân lý" - quan điểm sai lầm về mặt triết học, 
                đi ngược lại nguyên tắc của chủ nghĩa duy vật biện chứng.
              </p>
            </div>
            <p>
              • <strong>Chân lý không phụ thuộc</strong> vào niềm tin của cá nhân hay số đông.
            </p>
            <p>
              • Chấp nhận một quan điểm chỉ vì số đông tin theo mà không có kiểm chứng khách quan 
              có thể dẫn đến sai lầm nghiêm trọng.
            </p>
            
            <h3>"Quần chúng nhân dân" ≠ "Đám đông tin theo"</h3>
            <p>
              <strong>Quần chúng nhân dân:</strong> Chủ thể sáng tạo, động lực phát triển lịch sử, 
              hoạt động thực tiễn theo quy luật khách quan.
            </p>
            <p>
              <strong>Đám đông tin theo:</strong> Sự thừa nhận dựa trên niềm tin chủ quan, 
              không phải cơ sở xác định chân lý.
            </p>
          </section>
        );

      case 14:
        return (
          <section className="card">
            <h2>Ví dụ thực tiễn: Khi "Đám đông" sai lầm</h2>
            <div className="quote-text">
              <p><strong>Chân lý không được quyết định bởi số lượng người tin vào nó</strong></p>
            </div>
            
            <h3>🌍 Thuyết Địa tâm</h3>
            <p>
              <strong>Niềm tin đám đông:</strong> Trong nhiều thế kỷ, hầu hết mọi người tin Mặt Trời quay quanh Trái Đất.
            </p>
            <p>
              <strong>Chân lý khách quan:</strong> Thực tiễn khoa học (Copernicus, Galileo) chứng minh Trái Đất quay quanh Mặt Trời.
            </p>

            <h3>📱 Tin giả trên mạng xã hội</h3>
            <p>
              <strong>Niềm tin đám đông:</strong> Thông tin sai lệch được hàng triệu người chia sẻ trong vài giờ.
            </p>
            <p>
              <strong>Chân lý khách quan:</strong> Phải kiểm chứng bằng nguồn tin cậy và bằng chứng thực tế.
            </p>

            <h3>🌍 Quan niệm Trái Đất phẳng</h3>
            <p>
              Dù có vô số bằng chứng khoa học, một số nhóm vẫn tin điều này. 
              Chân lý khoa học đã chứng minh Trái Đất hình cầu.
            </p>

            <div className="quote-text">
              <p>
                <strong>Kết luận:</strong> Chân lý luôn phải bắt nguồn và được kiểm nghiệm 
                bởi hiện thực khách quan, không phải sự thừa nhận của đám đông.
              </p>
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