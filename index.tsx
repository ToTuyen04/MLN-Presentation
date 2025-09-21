/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const toggleTheme = () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const button = document.querySelector('.theme-icon');
    
    if (currentTheme === 'dark') {
      body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      if (button) button.textContent = '🌙';
    } else {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      if (button) button.textContent = '☀️';
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
      
      <header>
        <div className="header-image">
          <img src="images/3people.png" alt="Marx, Engels và Lenin - Ba nhà tư tưởng vĩ đại" />
        </div>
        <h1>Chân lý trong Triết học Mác – Lênin</h1>
        <p>"Cái gì đám đông thừa nhận thì chính là chân lý" - một quan điểm không được chấp nhận.</p>
      </header>
      
      <section className="card">
        <h2>I. Lý thuyết về chân lý trong lịch sử và quan điểm của Chủ nghĩa Duy vật Biện chứng</h2>
        
        <h3>1. Khái niệm và Con đường biện chứng của chân lý</h3>
        <p>Chủ nghĩa duy vật biện chứng (CDBT) khẳng định rằng quan điểm về đời sống, về thực tiễn, phải là quan điểm thứ nhất và cơ bản của lý luận về nhận thức.</p>
        
        <p><strong>Khái niệm Chân lý:</strong> Chân lý là tri thức, không phải bản thân hiện thực khách quan, nhưng tri thức đó phải phản ánh đúng hiện thực khách quan và được thực tiễn kiểm nghiệm.</p>
        
        <p><strong>Tính Khách quan của Chân lý:</strong> CDBT thừa nhận chân lý khách quan, tức là chân lý không phụ thuộc vào con người và loài người, mà chỉ phụ thuộc vào thực tại khách quan. Nội dung của tri thức chân lý phản ánh là khách quan, không phụ thuộc vào tính đơn giản hay tính chặt chẽ của logic, không phụ thuộc vào lợi ích hay sự quy ước.</p>
        
        <div className="concept-image">
          <img src="images/cccl.png" alt="Cán cân công lý - Biểu tượng của việc cân bằng và đánh giá chân lý một cách khách quan" />
        </div>
        
        <p><strong>Con đường biện chứng của sự nhận thức chân lý</strong> (theo V.I. Lênin) là: "Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn". Thực tiễn là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý và bác bỏ sai lầm.</p>
        
        <h3>2. Các tính chất cơ bản của Chân lý</h3>
        <p>Chân lý có ba tính chất cơ bản:</p>
        
        <p><strong>Tính khách quan:</strong> Nội dung của tri thức phản ánh không phụ thuộc vào ý chí chủ quan hay niềm tin của cá nhân hay số đông.</p>
        
        <p><strong>Tính tuyệt đối và tính tương đối:</strong> Chân lý là sự thống nhất biện chứng giữa tính tuyệt đối và tính tương đối.</p>
        <ul>
          <li><strong>Tính tương đối:</strong> Thể hiện ở chỗ tri thức chân lý mới chỉ phản ánh đúng một mặt, một bộ phận nào đó của hiện thực khách quan trong những điều kiện giới hạn xác định. Tính tương đối này là do điều kiện lịch sử chế ước.</li>
          <li><strong>Tính tuyệt đối:</strong> Thể hiện ở chỗ tri thức đó phản ánh đầy đủ, toàn diện hiện thực khách quan ở một giai đoạn lịch sử cụ thể xác định. Chân lý tuyệt đối chỉ là tổng số những chân lý tương đối.</li>
        </ul>
        
        <p>Phương pháp luận yêu cầu chống lại việc cường điệu tuyệt đối hóa tính tuyệt đối (phủ nhận tính tương đối) hoặc tuyệt đối hóa tính tương đối (phủ nhận tính khách quan của chân lý).</p>
        
        <p><strong>Tính cụ thể:</strong> Không có chân lý trừu tượng, chung chung; chân lý luôn là cụ thể. Chân lý phản ánh sự vật, hiện tượng trong một điều kiện cụ thể, hoàn cảnh lịch sử cụ thể trong một không gian và thời gian xác định. Thoát ly những điều kiện cụ thể này sẽ dẫn đến sai lầm.</p>
      </section>

      <section className="card">
        <h2>II. Phân tích mối quan hệ giữa Chân lý và Sự thừa nhận xã hội</h2>
        
        <h3>1. Phân tích tính quyết định của Hiện thực Khách quan đối với Chân lý</h3>
        <p>Vấn đề đặt ra là liệu "cái gì đám đông thừa nhận thì chính là chân lý" hay chân lý phải dựa vào hiện thực khách quan. Theo quan điểm của CDBT, chân lý phải dựa vào hiện thực khách quan và được kiểm nghiệm bằng thực tiễn.</p>
        
        <p><strong>Chân lý không phụ thuộc vào ý chí chủ quan hay niềm tin:</strong> Tính khách quan là thuộc tính cốt lõi của chân lý. Nội dung của tri thức chân lý là hình ảnh chủ quan của thế giới khách quan, nhưng nội dung ấy được quyết định bởi vật chất (hiện thực khách quan). Do đó, việc một quan điểm được số đông (hay "đám đông") tin theo không đủ để quyết định tính chân lý của nó. Tri thức chỉ được coi là chân lý khi nó phù hợp với khách thể của nhận thức.</p>
        
        <p><strong>Thực tiễn là tiêu chuẩn khách quan duy nhất:</strong> Nếu tri thức không được kiểm tra bằng thực tiễn, mà chỉ bằng "sự tán thành của số đông", thì không thể khẳng định được tính đúng, sai của tri thức đó. V.I. Lênin khẳng định người duy vật phải thừa nhận chân lý khách quan. C. Mác cũng nhấn mạnh rằng vấn đề tìm hiểu liệu tư duy có thể đạt tới tính chân lý khách quan hay không, hoàn toàn không phải là một vấn đề lý luận mà là một vấn đề thực tiễn.</p>
        
        <h3>2. Phân biệt vai trò của "Đám đông" và "Quần chúng nhân dân"</h3>
        <p>Quan điểm cho rằng "cái gì đám đông thừa nhận thì chính là chân lý" là quan điểm duy tâm, coi thường tính khách quan và quy luật khách quan.</p>
        
        <div className="concept-image">
          <img src="images/dd.png" alt="Đám đông vs. Cá nhân - Minh họa cho khái niệm số đông tin theo" />
        </div>
        
        <p><strong>Tính chất của sự thừa nhận xã hội (Đám đông):</strong> Sự chấp nhận rộng rãi của số đông trong xã hội số (số đông tin theo) thể hiện ý thức chủ quan. Việc chấp nhận một quan điểm chỉ vì số đông tin theo mà thiếu sự kiểm chứng khách quan có thể dẫn đến những sai lầm nghiêm trọng, đi ngược lại các quy luật khách quan. Những người theo chủ nghĩa duy tâm thường cường điệu vai trò của yếu tố chủ quan và duy ý chí, và tin rằng ý thức có thể quyết định vật chất, trái ngược với nguyên tắc vật chất quyết định ý thức của CDBT.</p>
        
        <p><strong>Vai trò của Quần chúng nhân dân (theo CDBT):</strong> Triết học Mác – Lênin khẳng định quần chúng nhân dân là chủ thể sáng tạo chân chính, là động lực phát triển của lịch sử. Vai trò này được xác định thông qua khả năng hoạt động thực tiễn, sản xuất vật chất, và thay đổi xã hội theo quy luật khách quan. Vai trò của quần chúng nhân dân là lực lượng vật chất, chứ không phải ở việc họ định đoạt tính chân lý của một quan điểm thông qua niềm tin chủ quan của số đông.</p>
        
        <h3>3. Khẳng định vai trò quyết định của Hiện thực Khách quan</h3>
        <p>Trong nhận thức và hoạt động thực tiễn, CDBT yêu cầu phải quán triệt nguyên tắc khách quan – xuất phát từ hiện thực khách quan, tôn trọng khách quan, nhận thức và vận dụng đúng đắn quy luật khách quan.</p>
        
        <p>Sự thừa nhận xã hội, dù rộng rãi đến đâu, cũng chỉ là một hình thức biểu hiện của ý thức xã hội. Ý thức xã hội (bao gồm niềm tin) có thể lạc hậu hơn tồn tại xã hội, thậm chí là phản ánh hư ảo, và nó không bao giờ quyết định tồn tại xã hội (vật chất). Nếu hành động theo sự thừa nhận chủ quan của số đông mà vi phạm quy luật khách quan, chắc chắn sẽ phải gánh chịu những hậu quả tai hại khôn lường. Do đó, chân lý vẫn phải dựa vào hiện thực khách quan.</p>
      </section>

      <section className="conclusion">
        <h2>Kết luận</h2>
        <p>Chủ nghĩa duy vật biện chứng khẳng định chân lý phải dựa vào hiện thực khách quan và được kiểm nghiệm bằng thực tiễn, chứ không phải dựa vào sự thừa nhận của số đông. Quan điểm "cái gì đám đông thừa nhận thì chính là chân lý" là quan điểm duy tâm, coi thường tính khách quan và quy luật khách quan.</p>
        
        <p>Chân lý có ba tính chất cơ bản: tính khách quan, tính tuyệt đối và tương đối, tính cụ thể. Việc tuyệt đối hóa sự thừa nhận chủ quan của số đông mà vi phạm quy luật khách quan sẽ dẫn đến những hậu quả tai hại. Do đó, trong nhận thức và hoạt động thực tiễn, chúng ta phải quán triệt nguyên tắc khách quan - xuất phát từ hiện thực khách quan, tôn trọng và vận dụng đúng đắn quy luật khách quan.</p>
        
        <p>Vai trò của quần chúng nhân dân được thể hiện qua hoạt động thực tiễn và khả năng thay đổi xã hội theo quy luật khách quan, chứ không phải thông qua việc định đoạt chân lý bằng niềm tin chủ quan. Chân lý vẫn phải dựa vào hiện thực khách quan và được thực tiễn kiểm nghiệm.</p>
      </section>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const button = document.querySelector('.theme-icon');
  
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    if (button) button.textContent = '☀️';
  } else {
    if (button) button.textContent = '🌙';
  }
});
