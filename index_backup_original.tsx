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
            <h1>CHÂN LÝ TRONG TRIẾT HỌC MÁC - LÊNIN</h1>
            <h2>Đặc điểm và Tiêu chuẩn</h2>
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
            <h2>Khái niệm Chân lý</h2>
            <p className="quote-text">
              <em>"Chân lý là sự phản ánh đúng đắn hiện thực khách quan trong tư duy con người"</em>¹
            </p>
            <h3>Các đặc điểm cơ bản:</h3>
            <ul>
              <li><strong>Tính khách quan:</strong> Nội dung của chân lý không phụ thuộc vào ý thức chủ quan²</li>
              <li><strong>Tính cụ thể:</strong> Chân lý luôn gắn liền với điều kiện thời gian, không gian cụ thể³</li>
              <li><strong>Tính tương đối và tuyệt đối:</strong> Mọi chân lý đều là sự thống nhất giữa cái tuyệt đối và tương đối⁴</li>
            </ul>
          </section>
        );

      case 3:
        return (
          <section className="card">
            <h2>Tính khách quan của Chân lý</h2>
            <p>Chân lý có nội dung khách quan, không phụ thuộc vào ý thức chủ quan của con người⁵.</p>
            <h3>Thể hiện qua:</h3>
            <ul>
              <li><strong>Đối tượng phản ánh:</strong> Là hiện thực khách quan tồn tại độc lập⁶</li>
              <li><strong>Nội dung phản ánh:</strong> Các quy luật, mối liên hệ khách quan của sự vật⁷</li>
              <li><strong>Tiêu chuẩn kiểm nghiệm:</strong> Thực tiễn xã hội khách quan⁸</li>
            </ul>
            <p><strong>Ý nghĩa:</strong> Khẳng định tính độc lập của thế giới khách quan và khả năng nhận thức của con người.</p>
          </section>
        );

      case 4:
        return (
          <section className="card">
            <h2>Tính tuyệt đối của Chân lý</h2>
            <p>Chân lý tuyệt đối thể hiện ở những nội dung không thay đổi, vĩnh viễn đúng⁹.</p>
            <h3>Các biểu hiện:</h3>
            <ul>
              <li><strong>Khả năng nhận thức:</strong> Con người có thể nhận thức được thế giới¹⁰</li>
              <li><strong>Tri thức tích lũy:</strong> Mỗi chân lý đều chứa đựng yếu tố tuyệt đối¹¹</li>
              <li><strong>Xu hướng phát triển:</strong> Nhận thức ngày càng gần với chân lý tuyệt đối¹²</li>
            </ul>
            <p className="quote-text">
              <em>"Chân lý tuyệt đối là giới hạn mà nhận thức con người vươn tới"</em>¹³
            </p>
          </section>
        );

      case 5:
        return (
          <section className="card">
            <h2>Tính tương đối của Chân lý</h2>
            <p>Chân lý tương đối phản ánh tính hữu hạn, không hoàn chỉnh của mỗi tri thức cụ thể¹⁴.</p>
            <h3>Nguyên nhân:</h3>
            <ul>
              <li><strong>Điều kiện lịch sử:</strong> Mức độ phát triển của khoa học và thực tiễn¹⁵</li>
              <li><strong>Khả năng nhận thức:</strong> Còn hạn chế ở từng giai đoạn lịch sử¹⁶</li>
              <li><strong>Tính phức tạp:</strong> Của thế giới khách quan vô hạn¹⁷</li>
            </ul>
            <p><strong>Ý nghĩa:</strong> Thúc đẩy quá trình nhận thức không ngừng phát triển.</p>
          </section>
        );

      case 6:
        return (
          <section className="card">
            <h2>Mối quan hệ giữa Chân lý Tuyệt đối và Tương đối</h2>
            <h3>Sự thống nhất:</h3>
            <ul>
              <li><strong>Thống nhất về nguồn gốc:</strong> Đều phản ánh hiện thực khách quan¹⁸</li>
              <li><strong>Thống nhất trong quá trình:</strong> Chân lý tuyệt đối thể hiện qua những chân lý tương đối¹⁹</li>
            </ul>
            <h3>Sự khác biệt:</h3>
            <ul>
              <li><strong>Về tính hoàn chỉnh:</strong> Tuyệt đối là hoàn chỉnh, tương đối là không hoàn chỉnh²⁰</li>
              <li><strong>Về tính ổn định:</strong> Tuyệt đối không thay đổi, tương đối luôn phát triển²¹</li>
            </ul>
          </section>
        );

      case 7:
        return (
          <section className="card">
            <h2>Tính cụ thể của Chân lý</h2>
            <p>Chân lý luôn gắn liền với điều kiện thời gian, không gian và hoàn cảnh lịch sử cụ thể²².</p>
            <h3>Ý nghĩa:</h3>
            <ul>
              <li><strong>Chống chủ nghĩa giáo điều:</strong> Không áp dụng máy móc các công thức²³</li>
              <li><strong>Chống chủ nghĩa tương đối:</strong> Khẳng định tính khách quan của chân lý²⁴</li>
              <li><strong>Hướng dẫn thực tiễn:</strong> Vận dụng linh hoạt, sáng tạo²⁵</li>
            </ul>
            <p className="quote-text">
              <em>"Không có chân lý trừu tượng, chân lý luôn cụ thể"</em> - V.I. Lenin²⁶
            </p>
          </section>
        );

      case 8:
        return (
          <section className="card">
            <h2>Các giai đoạn cơ bản của quá trình nhận thức</h2>
            <p>Quá trình nhận thức diễn ra theo con đường biện chứng:</p>
            <p className="quote-text"><em>"Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn"</em>²⁷.</p>
          </section>
        );

      case 9:
        return (
          <section className="card">
            <h2>Nhận thức cảm tính (Trực quan sinh động)</h2>
            <p>Là giai đoạn đầu tiên, phản ánh trực tiếp khách thể thông qua các giác quan²⁸.</p>
            <h3>Các hình thức:</h3>
            <ul>
              <li><strong>Cảm giác:</strong> Phản ánh một thuộc tính riêng lẻ của sự vật²⁹.</li>
              <li><strong>Tri giác:</strong> Tổng hợp nhiều cảm giác, cho hình ảnh trọn vẹn hơn về sự vật³⁰.</li>
              <li><strong>Biểu tượng:</strong> Hình ảnh sự vật được tái hiện trong óc khi không còn tác động trực tiếp³¹.</li>
            </ul>
            <p><strong>Hạn chế:</strong> Chưa đem lại hiểu biết sâu sắc, khái quát, chưa phân biệt được bản chất và hiện tượng³².</p>
          </section>
        );

      case 10:
        return (
          <section className="card">
            <h2>Nhận thức lý tính (Tư duy trừu tượng)</h2>
            <p>Bắt nguồn từ nhận thức cảm tính, phản ánh sự vật một cách gián tiếp, khái quát và đầy đủ hơn³³.</p>
            <h3>Các hình thức:</h3>
            <ul>
              <li><strong>Khái niệm:</strong> Phản ánh các thuộc tính chung, bản chất của sự vật³⁴.</li>
              <li><strong>Phán đoán:</strong> Liên kết các khái niệm để phản ánh mối liên hệ giữa các sự vật³⁵.</li>
              <li><strong>Suy lý (Suy luận):</strong> Đi từ cái đã biết đến cái chưa biết một cách gián tiếp (Quy nạp và Diễn dịch)³⁶.</li>
            </ul>
            <p><strong>Ưu điểm:</strong> Phản ánh được mối liên hệ bản chất, tất nhiên, bên trong của sự vật³⁷.</p>
          </section>
        );

      case 11:
        return (
          <section className="card">
            <h2>Sự thống nhất giữa các giai đoạn và thực tiễn</h2>
            <p>Nhận thức cảm tính và lý tính là hai giai đoạn khác nhau nhưng thống nhất, liên hệ và bổ sung cho nhau³⁸.</p>
            <h3>Vai trò của thực tiễn:</h3>
            <ul>
              <li><strong>Cơ sở của nhận thức:</strong> Cung cấp đối tượng và phương tiện nhận thức³⁹.</li>
              <li><strong>Động lực của nhận thức:</strong> Đặt ra nhiệm vụ và thúc đẩy phát triển⁴⁰.</li>
              <li><strong>Mục đích của nhận thức:</strong> Hướng dẫn và phục vụ thực tiễn⁴¹.</li>
              <li><strong>Tiêu chuẩn của chân lý:</strong> Kiểm nghiệm tính đúng đắn của nhận thức⁴².</li>
            </ul>
          </section>
        );

      case 12:
        return (
          <section className="card">
            <h2>Thực tiễn - Tiêu chuẩn duy nhất của Chân lý</h2>
            <p>Thực tiễn xã hội là hoạt động vật chất có tính mục đích của con người nhằm cải tạo thế giới⁴³.</p>
            <h3>Tại sao thực tiễn là tiêu chuẩn duy nhất?</h3>
            <ul>
              <li><strong>Tính khách quan:</strong> Không phụ thuộc vào ý thức chủ quan⁴⁴</li>
              <li><strong>Tính cảm tính:</strong> Có thể quan sát, đo lường được⁴⁵</li>
              <li><strong>Tính toàn diện:</strong> Kiểm nghiệm mọi lĩnh vực nhận thức⁴⁶</li>
            </ul>
            <p className="quote-text">
              <em>"Vấn đề con người có tư duy đúng hay không... là vấn đề thực tiễn"</em> - K. Marx⁴⁷
            </p>
          </section>
        );

      case 13:
        return (
          <section className="card">
            <h2>Tạm Kết</h2>
            <h3>Chân lý theo quan điểm Triết học Mác - Lênin</h3>
            <p>
              ☑️ <strong>Có tính khách quan:</strong> Không phụ thuộc vào ý thức chủ quan.
            </p>
            <p>
              ☑️ <strong>Có tính tuyệt đối:</strong> Phản ánh đúng hiện thực khách quan.
            </p>
            <p>
              ☑️ <strong>Có tính tương đối:</strong> Luôn phát triển và hoàn thiện.
            </p>
            <p>
              ☑️ <strong>Có tính cụ thể:</strong> Gắn liền với điều kiện lịch sử cụ thể.
            </p>
            <p>
              ☑️ <strong>Được thực tiễn kiểm nghiệm:</strong> Thực tiễn là tiêu chuẩn duy nhất.
            </p>
            <p className="footnote">Các tài liệu tham khảo: [1] Giáo trình Triết học Mác - Lênin, NXB Chính trị Quốc gia Sự thật</p>
          </section>
        );

      case 14:
        return (
          <section className="card">
            <h2>Chân lý và Sự thừa nhận của Đám đông</h2>
            <h3>Phân biệt Chân lý với Niềm tin chủ quan</h3>
            <div className="quote-text">
              <p>
                "Cái gì đám đông thừa nhận thì chính là chân lý" - quan điểm sai lầm về mặt triết học, 
                đi ngược lại nguyên tắc của chủ nghĩa duy vật biện chứng⁹.
              </p>
            </div>
            <p>
              • <strong>Chân lý không phụ thuộc</strong> vào niềm tin của cá nhân hay số đông¹⁰.
            </p>
            <p>
              • Chấp nhận một quan điểm chỉ vì số đông tin theo mà không có kiểm chứng khách quan 
              có thể dẫn đến sai lầm nghiêm trọng¹¹.
            </p>
            
            <h3>"Quần chúng nhân dân" ≠ "Đám đông tin theo"</h3>
            <p>
              <strong>Quần chúng nhân dân:</strong> Chủ thể sáng tạo, động lực phát triển lịch sử, 
              hoạt động thực tiễn theo quy luật khách quan¹².
            </p>
            <p>
              <strong>Đám đông tin theo:</strong> Sự thừa nhận dựa trên niềm tin chủ quan, 
              không phải cơ sở xác định chân lý¹³.
            </p>
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
                bởi hiện thực khách quan, không phải sự thừa nhận của đám đông¹⁵.
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