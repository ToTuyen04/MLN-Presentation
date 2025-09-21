/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

interface SlideData {
  id: number;
  title: string;
  content: React.ReactNode;
  background?: string;
  icon?: string;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const totalSlides = 15;

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
      setIsDarkMode(true);
    }
    
    // Animate progress bar
    const timer = setTimeout(() => {
      setProgress((currentSlide / totalSlides) * 100);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const toggleTheme = () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const changeSlide = (newSlide: number) => {
    if (newSlide < 1 || newSlide > totalSlides || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setIsTransitioning(false);
    }, 150);
  };

  const nextSlide = () => changeSlide(currentSlide + 1);
  const prevSlide = () => changeSlide(currentSlide - 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Home') changeSlide(1);
      if (e.key === 'End') changeSlide(totalSlides);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slideData: SlideData[] = [
    {
      id: 1,
      title: "CHÂN LÝ TRONG TRIẾT HỌC MÁC - LÊNIN",
      icon: "🎓",
      content: (
        <div className="content">
          <div className="hero-content">
            <h1>🎓 CHÂN LÝ TRONG TRIẾT HỌC MÁC - LÊNIN</h1>
            <h2>⭐ Đám đông có tạo nên chân lý??</h2>
            <div className="author-info">
              <div className="author-card">
                <h3>👨‍🎓 Báo cáo viên: Nguyễn Tô Tuyên</h3>
                <p>📚 Lớp: AI1806</p>
                <p>👨‍🏫 Giảng viên: Nguyễn Văn Bình</p>
              </div>
            </div>
            <div className="slide-hint">
              <p>🔄 Sử dụng phím mũi tên hoặc nút điều hướng để chuyển slide</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Khái niệm Chân lý",
      icon: "💡",
      content: (
        <div className="content">
          <h2>💡 Khái niệm Chân lý</h2>
          <div className="quote-text">
            <p>"Chân lý là sự phản ánh đúng đắn hiện thực khách quan trong tư duy con người"¹</p>
          </div>
          <h3>🔍 Các đặc điểm cơ bản:</h3>
          <ul className="animated-list">
            <li style={{'--i': '0'} as React.CSSProperties}>
              <span className="icon">🎯</span>
              <strong>Tính khách quan:</strong> Nội dung của chân lý không phụ thuộc vào ý thức chủ quan²
            </li>
            <li style={{'--i': '1'} as React.CSSProperties}>
              <span className="icon">📍</span>
              <strong>Tính cụ thể:</strong> Chân lý luôn gắn liền với điều kiện thời gian, không gian cụ thể³
            </li>
            <li style={{'--i': '2'} as React.CSSProperties}>
              <span className="icon">⚖️</span>
              <strong>Tính tương đối và tuyệt đối:</strong> Mọi chân lý đều là sự thống nhất giữa cái tuyệt đối và tương đối⁴
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: "Tính khách quan của Chân lý",
      icon: "🎯",
      content: (
        <div className="content">
          <h2>🎯 Tính khách quan của Chân lý</h2>
          <p>Chân lý có nội dung khách quan, không phụ thuộc vào ý thức chủ quan của con người⁵.</p>
          <h3>📋 Thể hiện qua:</h3>
          <ul className="animated-list">
            <li style={{'--i': '0'} as React.CSSProperties}>
              <span className="icon">🌍</span>
              <strong>Đối tượng phản ánh:</strong> Là hiện thực khách quan tồn tại độc lập⁶
            </li>
            <li style={{'--i': '1'} as React.CSSProperties}>
              <span className="icon">🔗</span>
              <strong>Nội dung phản ánh:</strong> Các quy luật, mối liên hệ khách quan của sự vật⁷
            </li>
            <li style={{'--i': '2'} as React.CSSProperties}>
              <span className="icon">🧪</span>
              <strong>Tiêu chuẩn kiểm nghiệm:</strong> Thực tiễn xã hội khách quan⁸
            </li>
          </ul>
          <div className="insight-box">
            <p>💡 <strong>Ý nghĩa:</strong> Khẳng định tính độc lập của thế giới khách quan và khả năng nhận thức của con người.</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Tính tuyệt đối của Chân lý",
      icon: "♾️",
      content: (
        <div className="content">
          <h2>♾️ Tính tuyệt đối của Chân lý</h2>
          <p>Chân lý tuyệt đối thể hiện ở những nội dung không thay đổi, vĩnh viễn đúng⁹.</p>
          <h3>✨ Các biểu hiện:</h3>
          <ul className="animated-list">
            <li style={{'--i': '0'} as React.CSSProperties}>
              <span className="icon">🧠</span>
              <strong>Khả năng nhận thức:</strong> Con người có thể nhận thức được thế giới¹⁰
            </li>
            <li style={{'--i': '1'} as React.CSSProperties}>
              <span className="icon">📚</span>
              <strong>Tri thức tích lũy:</strong> Mỗi chân lý đều chứa đựng yếu tố tuyệt đối¹¹
            </li>
            <li style={{'--i': '2'} as React.CSSProperties}>
              <span className="icon">📈</span>
              <strong>Xu hướng phát triển:</strong> Nhận thức ngày càng gần với chân lý tuyệt đối¹²
            </li>
          </ul>
          <div className="quote-text">
            <p>"Chân lý tuyệt đối là giới hạn mà nhận thức con người vươn tới"¹³</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Tính tương đối của Chân lý",
      icon: "🔄",
      content: (
        <div className="content">
          <h2>🔄 Tính tương đối của Chân lý</h2>
          <p>Chân lý tương đối phản ánh tính hữu hạn, không hoàn chỉnh của mỗi tri thức cụ thể¹⁴.</p>
          <h3>🔍 Nguyên nhân:</h3>
          <ul className="animated-list">
            <li style={{'--i': '0'} as React.CSSProperties}>
              <span className="icon">⏰</span>
              <strong>Điều kiện lịch sử:</strong> Mức độ phát triển của khoa học và thực tiễn¹⁵
            </li>
            <li style={{'--i': '1'} as React.CSSProperties}>
              <span className="icon">🔬</span>
              <strong>Khả năng nhận thức:</strong> Còn hạn chế ở từng giai đoạn lịch sử¹⁶
            </li>
            <li style={{'--i': '2'} as React.CSSProperties}>
              <span className="icon">🌐</span>
              <strong>Tính phức tạp:</strong> Của thế giới khách quan vô hạn¹⁷
            </li>
          </ul>
          <div className="insight-box">
            <p>💡 <strong>Ý nghĩa:</strong> Thúc đẩy quá trình nhận thức không ngừng phát triển.</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Mối quan hệ Tuyệt đối - Tương đối",
      icon: "⚖️",
      content: (
        <div className="content">
          <h2>⚖️ Mối quan hệ giữa Chân lý Tuyệt đối và Tương đối</h2>
          <div className="dual-column">
            <div className="column">
              <h3>🤝 Sự thống nhất:</h3>
              <ul className="animated-list">
                <li style={{'--i': '0'} as React.CSSProperties}>
                  <span className="icon">🌱</span>
                  <strong>Thống nhất về nguồn gốc:</strong> Đều phản ánh hiện thực khách quan¹⁸
                </li>
                <li style={{'--i': '1'} as React.CSSProperties}>
                  <span className="icon">🔄</span>
                  <strong>Thống nhất trong quá trình:</strong> Chân lý tuyệt đối thể hiện qua những chân lý tương đối¹⁹
                </li>
              </ul>
            </div>
            <div className="column">
              <h3>🆚 Sự khác biệt:</h3>
              <ul className="animated-list">
                <li style={{'--i': '2'} as React.CSSProperties}>
                  <span className="icon">✅</span>
                  <strong>Về tính hoàn chỉnh:</strong> Tuyệt đối là hoàn chỉnh, tương đối là không hoàn chỉnh²⁰
                </li>
                <li style={{'--i': '3'} as React.CSSProperties}>
                  <span className="icon">📊</span>
                  <strong>Về tính ổn định:</strong> Tuyệt đối không thay đổi, tương đối luôn phát triển²¹
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Tính cụ thể của Chân lý",
      icon: "📍",
      content: (
        <div className="content">
          <h2>📍 Tính cụ thể của Chân lý</h2>
          <p>Chân lý luôn gắn liền với điều kiện thời gian, không gian và hoàn cảnh lịch sử cụ thể²².</p>
          <h3>🎯 Ý nghĩa:</h3>
          <ul className="animated-list">
            <li style={{'--i': '0'} as React.CSSProperties}>
              <span className="icon">🚫</span>
              <strong>Chống chủ nghĩa giáo điều:</strong> Không áp dụng máy móc các công thức²³
            </li>
            <li style={{'--i': '1'} as React.CSSProperties}>
              <span className="icon">⚡</span>
              <strong>Chống chủ nghĩa tương đối:</strong> Khẳng định tính khách quan của chân lý²⁴
            </li>
            <li style={{'--i': '2'} as React.CSSProperties}>
              <span className="icon">🎨</span>
              <strong>Hướng dẫn thực tiễn:</strong> Vận dụng linh hoạt, sáng tạo²⁵
            </li>
          </ul>
          <div className="quote-text">
            <p>"Không có chân lý trừu tượng, chân lý luôn cụ thể" - V.I. Lenin²⁶</p>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Quá trình nhận thức",
      icon: "🧭",
      content: (
        <div className="content">
          <h2>🧭 Các giai đoạn cơ bản của quá trình nhận thức</h2>
          <p>Quá trình nhận thức diễn ra theo con đường biện chứng:</p>
          <div className="process-flow">
            <div className="step">
              <span className="step-number">1</span>
              <span className="step-text">Trực quan sinh động</span>
            </div>
            <span className="arrow">→</span>
            <div className="step">
              <span className="step-number">2</span>
              <span className="step-text">Tư duy trừu tượng</span>
            </div>
            <span className="arrow">→</span>
            <div className="step">
              <span className="step-number">3</span>
              <span className="step-text">Thực tiễn</span>
            </div>
          </div>
          <div className="quote-text">
            <p>"Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn"²⁷</p>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Nhận thức cảm tính",
      icon: "👁️",
      content: (
        <div className="content">
          <h2>👁️ Nhận thức cảm tính (Trực quan sinh động)</h2>
          <p>Là giai đoạn đầu tiên, phản ánh trực tiếp khách thể thông qua các giác quan²⁸.</p>
          <h3>🔍 Các hình thức:</h3>
          <ul className="animated-list">
            <li style={{'--i': '0'} as React.CSSProperties}>
              <span className="icon">👂</span>
              <strong>Cảm giác:</strong> Phản ánh một thuộc tính riêng lẻ của sự vật²⁹
            </li>
            <li style={{'--i': '1'} as React.CSSProperties}>
              <span className="icon">👀</span>
              <strong>Tri giác:</strong> Tổng hợp nhiều cảm giác, cho hình ảnh trọn vẹn hơn về sự vật³⁰
            </li>
            <li style={{'--i': '2'} as React.CSSProperties}>
              <span className="icon">🧠</span>
              <strong>Biểu tượng:</strong> Hình ảnh sự vật được tái hiện trong óc khi không còn tác động trực tiếp³¹
            </li>
          </ul>
          <div className="limitation-box">
            <p>⚠️ <strong>Hạn chế:</strong> Chưa đem lại hiểu biết sâu sắc, khái quát, chưa phân biệt được bản chất và hiện tượng³².</p>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Nhận thức lý tính",
      icon: "🧮",
      content: (
        <div className="content">
          <h2>🧮 Nhận thức lý tính (Tư duy trừu tượng)</h2>
          <p>Bắt nguồn từ nhận thức cảm tính, phản ánh sự vật một cách gián tiếp, khái quát và đầy đủ hơn³³.</p>
          <h3>🔧 Các hình thức:</h3>
          <ul className="animated-list">
            <li style={{'--i': '0'} as React.CSSProperties}>
              <span className="icon">💭</span>
              <strong>Khái niệm:</strong> Phản ánh các thuộc tính chung, bản chất của sự vật³⁴
            </li>
            <li style={{'--i': '1'} as React.CSSProperties}>
              <span className="icon">🔗</span>
              <strong>Phán đoán:</strong> Liên kết các khái niệm để phản ánh mối liên hệ giữa các sự vật³⁵
            </li>
            <li style={{'--i': '2'} as React.CSSProperties}>
              <span className="icon">🎯</span>
              <strong>Suy lý (Suy luận):</strong> Đi từ cái đã biết đến cái chưa biết một cách gián tiếp (Quy nạp và Diễn dịch)³⁶
            </li>
          </ul>
          <div className="advantage-box">
            <p>✅ <strong>Ưu điểm:</strong> Phản ánh được mối liên hệ bản chất, tất nhiên, bên trong của sự vật³⁷.</p>
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "Sự thống nhất và thực tiễn",
      icon: "🤝",
      content: (
        <div className="content">
          <h2>🤝 Sự thống nhất giữa các giai đoạn và thực tiễn</h2>
          <p>Nhận thức cảm tính và lý tính là hai giai đoạn khác nhau nhưng thống nhất, liên hệ và bổ sung cho nhau³⁸.</p>
          <h3>🎯 Vai trò của thực tiễn:</h3>
          <ul className="animated-list">
            <li style={{'--i': '0'} as React.CSSProperties}>
              <span className="icon">🏗️</span>
              <strong>Cơ sở của nhận thức:</strong> Cung cấp đối tượng và phương tiện nhận thức³⁹
            </li>
            <li style={{'--i': '1'} as React.CSSProperties}>
              <span className="icon">⚡</span>
              <strong>Động lực của nhận thức:</strong> Đặt ra nhiệm vụ và thúc đẩy phát triển⁴⁰
            </li>
            <li style={{'--i': '2'} as React.CSSProperties}>
              <span className="icon">🎯</span>
              <strong>Mục đích của nhận thức:</strong> Hướng dẫn và phục vụ thực tiễn⁴¹
            </li>
            <li style={{'--i': '3'} as React.CSSProperties}>
              <span className="icon">📏</span>
              <strong>Tiêu chuẩn của chân lý:</strong> Kiểm nghiệm tính đúng đắn của nhận thức⁴²
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 12,
      title: "Thực tiễn - Tiêu chuẩn chân lý",
      icon: "🧪",
      content: (
        <div className="content">
          <h2>🧪 Thực tiễn - Tiêu chuẩn duy nhất của Chân lý</h2>
          <p>Thực tiễn xã hội là hoạt động vật chất có tính mục đích của con người nhằm cải tạo thế giới⁴³.</p>
          <h3>❓ Tại sao thực tiễn là tiêu chuẩn duy nhất?</h3>
          <ul className="animated-list">
            <li style={{'--i': '0'} as React.CSSProperties}>
              <span className="icon">🎯</span>
              <strong>Tính khách quan:</strong> Không phụ thuộc vào ý thức chủ quan⁴⁴
            </li>
            <li style={{'--i': '1'} as React.CSSProperties}>
              <span className="icon">👁️</span>
              <strong>Tính cảm tính:</strong> Có thể quan sát, đo lường được⁴⁵
            </li>
            <li style={{'--i': '2'} as React.CSSProperties}>
              <span className="icon">🌐</span>
              <strong>Tính toàn diện:</strong> Kiểm nghiệm mọi lĩnh vực nhận thức⁴⁶
            </li>
          </ul>
          <div className="quote-text">
            <p>"Vấn đề con người có tư duy đúng hay không... là vấn đề thực tiễn" - K. Marx⁴⁷</p>
          </div>
        </div>
      )
    },
    {
      id: 13,
      title: "Tạm Kết",
      icon: "✅",
      content: (
        <div className="content">
          <h2>✅ Tạm Kết</h2>
          <h3>🎯 Chân lý theo quan điểm Triết học Mác - Lênin</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <span className="check">☑️</span>
              <strong>Có tính khách quan:</strong> Không phụ thuộc vào ý thức chủ quan.
            </div>
            <div className="summary-item">
              <span className="check">☑️</span>
              <strong>Có tính tuyệt đối:</strong> Phản ánh đúng hiện thực khách quan.
            </div>
            <div className="summary-item">
              <span className="check">☑️</span>
              <strong>Có tính tương đối:</strong> Luôn phát triển và hoàn thiện.
            </div>
            <div className="summary-item">
              <span className="check">☑️</span>
              <strong>Có tính cụ thể:</strong> Gắn liền với điều kiện lịch sử cụ thể.
            </div>
            <div className="summary-item">
              <span className="check">☑️</span>
              <strong>Được thực tiễn kiểm nghiệm:</strong> Thực tiễn là tiêu chuẩn duy nhất.
            </div>
          </div>
          <p className="footnote">📚 Các tài liệu tham khảo: [1] Giáo trình Triết học Mác - Lênin, NXB Chính trị Quốc gia Sự thật</p>
        </div>
      )
    },
    {
      id: 14,
      title: "Chân lý và Đám đông",
      icon: "👥",
      content: (
        <div className="content">
          <h2>👥 Chân lý và Sự thừa nhận của Đám đông</h2>
          <h3>🔍 Phân biệt Chân lý với Niềm tin chủ quan</h3>
          <div className="quote-text">
            <p>"Cái gì đám đông thừa nhận thì chính là chân lý" - quan điểm sai lầm về mặt triết học, đi ngược lại nguyên tắc của chủ nghĩa duy vật biện chứng⁹.</p>
          </div>
          <ul className="animated-list">
            <li style={{'--i': '0'} as React.CSSProperties}>
              <span className="icon">🚫</span>
              <strong>Chân lý không phụ thuộc</strong> vào niềm tin của cá nhân hay số đông¹⁰
            </li>
            <li style={{'--i': '1'} as React.CSSProperties}>
              <span className="icon">⚠️</span>
              Chấp nhận một quan điểm chỉ vì số đông tin theo mà không có kiểm chứng khách quan có thể dẫn đến sai lầm nghiêm trọng¹¹
            </li>
          </ul>
          
          <h3>🆚 "Quần chúng nhân dân" ≠ "Đám đông tin theo"</h3>
          <div className="comparison-box">
            <div className="comparison-item positive">
              <h4>👨‍👩‍👧‍👦 Quần chúng nhân dân:</h4>
              <p>Chủ thể sáng tạo, động lực phát triển lịch sử, hoạt động thực tiễn theo quy luật khách quan¹².</p>
            </div>
            <div className="comparison-item negative">
              <h4>👥 Đám đông tin theo:</h4>
              <p>Sự thừa nhận dựa trên niềm tin chủ quan, không phải cơ sở xác định chân lý¹³.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 15,
      title: "Ví dụ thực tiễn",
      icon: "📊",
      content: (
        <div className="content">
          <h2>📊 Ví dụ thực tiễn: Khi "Đám đông" sai lầm</h2>
          <div className="quote-text">
            <p><strong>Chân lý không được quyết định bởi số lượng người tin vào nó</strong></p>
          </div>
          
          <div className="examples-grid">
            <div className="example-card">
              <h3>🌍 Thuyết Địa tâm</h3>
              <div className="example-content">
                <p><strong>👥 Niềm tin đám đông:</strong> Trong nhiều thế kỷ, hầu hết mọi người tin Mặt Trời quay quanh Trái Đất.</p>
                <p><strong>🔬 Chân lý khách quan:</strong> Thực tiễn khoa học (Copernicus, Galileo) chứng minh Trái Đất quay quanh Mặt Trời.</p>
              </div>
            </div>

            <div className="example-card">
              <h3>📱 Tin giả trên mạng xã hội</h3>
              <div className="example-content">
                <p><strong>👥 Niềm tin đám đông:</strong> Thông tin sai lệch được hàng triệu người chia sẻ trong vài giờ.</p>
                <p><strong>🔬 Chân lý khách quan:</strong> Phải kiểm chứng bằng nguồn tin cậy và bằng chứng thực tế.</p>
              </div>
            </div>

            <div className="example-card">
              <h3>🌍 Quan niệm Trái Đất phẳng</h3>
              <div className="example-content">
                <p>Dù có vô số bằng chứng khoa học, một số nhóm vẫn tin điều này. Chân lý khoa học đã chứng minh Trái Đất hình cầu.</p>
              </div>
            </div>
          </div>

          <div className="quote-text">
            <p><strong>🎯 Kết luận:</strong> Chân lý luôn phải bắt nguồn và được kiểm nghiệm bởi hiện thực khách quan, không phải sự thừa nhận của đám đông¹⁵.</p>
          </div>
        </div>
      )
    }
  ];

  const currentSlideData = slideData[currentSlide - 1];

  return (
    <main className="container">
      {/* Progress bar */}
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Theme toggle */}
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <span className="theme-icon">{isDarkMode ? '☀️' : '🌙'}</span>
      </button>

      {/* Slide indicator */}
      <div className="slide-indicator">
        <span className="slide-icon">{currentSlideData.icon}</span>
        <span className="slide-title">{currentSlideData.title}</span>
      </div>
      
      {/* Navigation Controls */}
      <div className="slide-nav">
        <button 
          className="nav-btn" 
          onClick={prevSlide} 
          disabled={currentSlide === 1 || isTransitioning}
        >
          ← Trước
        </button>
        <span className="slide-counter">{currentSlide}/{totalSlides}</span>
        <button 
          className="nav-btn" 
          onClick={nextSlide} 
          disabled={currentSlide === totalSlides || isTransitioning}
        >
          Tiếp →
        </button>
      </div>

      {/* Slide Content */}
      <div className={`slide-content ${isTransitioning ? 'transitioning' : ''}`}>
        <section className="card">
          {currentSlideData.content}
        </section>
      </div>

      {/* Slide dots navigation */}
      <div className="slide-dots">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            className={`dot ${currentSlide === i + 1 ? 'active' : ''}`}
            onClick={() => changeSlide(i + 1)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);