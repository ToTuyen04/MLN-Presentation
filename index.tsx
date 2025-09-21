/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [currentSlide, setCurrentSlide] = React.useState('main'); // 'main' or 'discussion'

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

  const goToDiscussion = () => setCurrentSlide('discussion');
  const goToMain = () => setCurrentSlide('main');

  return (
    <main className="container">
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <span className="theme-icon">🌙</span>
      </button>
      
      {currentSlide === 'main' && (
        <button 
          className="discussion-btn" 
          onClick={goToDiscussion}
          aria-label="Bàn luận chuyên sâu"
        >
          Bàn luận CQ
        </button>
      )}
      
      {currentSlide === 'discussion' && (
        <button 
          className="back-btn" 
          onClick={goToMain}
          aria-label="Quay lại slide chính"
        >
          ← Quay lại
        </button>
      )}
      
      {currentSlide === 'main' ? (
        <>
          <header>
            <div className="header-image">
              <img src="/images/3people.png" alt="Marx, Engels và Lenin - Ba nhà tư tưởng vĩ đại" />
            </div>
            <h1>Chương 2. Chủ nghĩa duy vật biện chứng</h1>
            <p className="subtitle-quote">III. Lý luận nhận thức</p>
          </header>
          
          <section className="card">
            <h2>Lý luận nhận thức của Triết học Mác – Lênin</h2>
            <p>Lý luận nhận thức của Triết học Mác – Lênin giải quyết mối quan hệ giữa tri thức con người với hiện thực xung quanh, và khẳng định khả năng con người có thể nhận thức được thế giới.</p>
            
            <h3>2. Lý luận nhận thức của chủ nghĩa duy vật biện chứng</h3>
            <p>Chủ nghĩa duy vật biện chứng khẳng định khả năng con người nhận thức được thế giới. Nhận thức là một quá trình biện chứng, có phát triển, bổ sung và hoàn thiện, không phải là quá trình một lần là xong.</p>
            
            <h4>a. Các nguyên tắc của lý luận nhận thức duy vật biện chứng</h4>
            <p><strong>Thừa nhận tính khách quan của tồn tại vật chất:</strong> Nguyên tắc nền tảng này khẳng định thế giới vật chất tồn tại khách quan bên ngoài và độc lập với ý thức con người và loài người nói chung. Ý thức chỉ là sự phản ánh của tồn tại, nhiều lắm cũng chỉ là một phản ánh gần đúng (chính xác một cách lý tưởng).</p>
            
            <p><strong>Công nhận tính chủ quan của hình ảnh phản ánh:</strong> Khẳng định cảm giác, tri giác, ý thức nói chung là hình ảnh chủ quan của thế giới khách quan. Đây không phải là sự phản ánh thụ động, cứng đờ (giống như cái gương), mà là sự phản ánh tích cực, sáng tạo của chủ thể.</p>
            
            <p><strong>Lấy thực tiễn làm tiêu chuẩn:</strong> Thực tiễn phải là quan điểm thứ nhất và cơ bản của lý luận về nhận thức. Thực tiễn, bao gồm cả thực tiễn của những sự quan sát, phát hiện về thiên văn học, là tiêu chuẩn để kiểm tra tính chân thực của tri thức.</p>
            
            <div className="concept-image">
              <img src="/images/cccl.png" alt="Cán cân công lý - Biểu tượng của việc cân bằng và đánh giá chân lý một cách khách quan" />
            </div>
            
            <h4>b. Nguồn gốc và bản chất của nhận thức</h4>
            <p><strong>Nguồn gốc:</strong> Thế giới vật chất tồn tại khách quan là nguồn gốc sinh ra ý thức, là đối tượng của nhận thức.</p>
            
            <p><strong>Bản chất:</strong> Nhận thức là quá trình phản ánh hiện thực khách quan vào bộ óc người. Tri giác và biểu tượng của con người là hình ảnh của các sự vật. Đây là một quá trình biện chứng, cần phải phân tích sự hiểu biết nảy sinh từ sự không hiểu biết, và sự không đầy đủ trở thành đầy đủ hơn, chính xác hơn.</p>
          </section>

          <section className="card">
            <h2>3. Thực tiễn và vai trò của thực tiễn đối với nhận thức</h2>
            
            <h3>a. Phạm trù thực tiễn</h3>
            <p>Thực tiễn là toàn bộ hoạt động vật chất – cảm tính, có tính lịch sử – xã hội của con người, nhằm cải tạo tự nhiên và xã hội phục vụ nhân loại tiến bộ.</p>
            
            <h4>Đặc trưng của thực tiễn:</h4>
            <ul>
              <li><strong>Tính vật chất - cảm tính:</strong> Thực tiễn là những hoạt động mà con người phải sử dụng lực lượng vật chất, công cụ vật chất tác động vào các đối tượng vật chất để làm biến đổi chúng, và có thể quan sát trực quan được.</li>
              <li><strong>Tính lịch sử - xã hội:</strong> Thực tiễn chỉ diễn ra trong xã hội, với sự tham gia của đông đảo người trong xã hội, truyền lại kinh nghiệm từ thế hệ này qua thế hệ khác, và bị giới hạn bởi những điều kiện lịch sử - xã hội cụ thể.</li>
              <li><strong>Tính tự giác:</strong> Thực tiễn là hoạt động có tính tự giác cao của con người, khác với hoạt động bản năng thụ động của động vật.</li>
            </ul>
            
            <h4>Các hình thức cơ bản của thực tiễn:</h4>
            <ul>
              <li><strong>Hoạt động sản xuất vật chất:</strong> Hình thức thực tiễn có sớm nhất, cơ bản nhất, quan trọng nhất, là phương thức tồn tại cơ bản của con người và xã hội loài người.</li>
              <li><strong>Hoạt động chính trị – xã hội:</strong> Nhằm biến đổi, cải tạo xã hội, phát triển các quan hệ xã hội.</li>
              <li><strong>Hoạt động thực nghiệm khoa học:</strong> Hình thức đặc biệt, trong đó con người chủ động tạo ra những điều kiện không có sẵn trong tự nhiên và xã hội để tiến hành thực nghiệm khoa học.</li>
            </ul>
            
            <div className="concept-image">
              <img src="/images/dd.png" alt="Hoạt động thực tiễn của con người - Minh họa cho các hình thức thực tiễn" />
            </div>
            
            <h3>b. Vai trò của thực tiễn</h3>
            <p><strong>Thực tiễn là cơ sở, động lực của nhận thức:</strong> Mọi nhận thức của con người (kể cả tư duy trừu tượng) suy đến cùng đều được nảy sinh từ thực tiễn. Thực tiễn đề ra nhu cầu, nhiệm vụ và phương hướng phát triển của nhận thức, đồng thời có tác dụng rèn luyện các giác quan của con người.</p>
            
            <p><strong>Thực tiễn là mục đích của nhận thức:</strong> Nhận thức của con người là nhằm phục vụ thực tiễn, soi đường, dẫn dắt, chỉ đạo thực tiễn.</p>
            
            <p><strong>Thực tiễn là tiêu chuẩn để kiểm tra chân lý:</strong> Thực tiễn là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý, bác bỏ sai lầm. Chỉ có thực tiễn mới có thể vật chất hoá được tri thức, hiện thực hoá được tư tưởng.</p>
            
            <p>Vấn đề tìm hiểu tính chân lý khách quan hoàn toàn không phải là một vấn đề lý luận mà là một vấn đề thực tiễn.</p>
            
            <p>Thực tiễn là tiêu chuẩn chân lý vừa có tính tuyệt đối (là tiêu chuẩn khách quan duy nhất), vừa có tính tương đối (vì bản thân thực tiễn có quá trình vận động, biến đổi, phát triển, do đó không thể xác nhận hoặc bác bỏ một cách hoàn toàn một biểu tượng nào đó).</p>
          </section>

          <section className="card">
            <h2>4. Các giai đoạn cơ bản của quá trình nhận thức</h2>
            <p>Quá trình nhận thức diễn ra theo con đường biện chứng được V.I. Lênin khái quát là: <em>"Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn"</em>.</p>
            
            <h3>a. Nhận thức cảm tính (Trực quan sinh động)</h3>
            <p>Là giai đoạn đầu tiên, phản ánh trực tiếp khách thể lên các giác quan.</p>
            
            <ul>
              <li><strong>Cảm giác:</strong> Hình thức đầu tiên, giản đơn nhất, phản ánh một thuộc tính riêng lẻ của sự vật.</li>
              <li><strong>Tri giác:</strong> Là tổng hợp của nhiều cảm giác, cho ta hình ảnh về sự vật trọn vẹn hơn cảm giác.</li>
              <li><strong>Biểu tượng:</strong> Hình ảnh sự vật được tái hiện trong óc nhờ trí nhớ, khi sự vật không trực tiếp tác động vào giác quan. Biểu tượng là khâu trung gian chuyển từ nhận thức cảm tính lên nhận thức lý tính.</li>
            </ul>
            
            <p><strong>Hạn chế:</strong> Nhận thức cảm tính chưa đem lại những hiểu biết sâu sắc, khái quát trong tính chỉnh thể về sự vật, chưa phân biệt được cái riêng/cái chung, bản chất/hiện tượng, nguyên nhân/kết quả.</p>
            
            <h3>b. Nhận thức lý tính (Tư duy trừu tượng)</h3>
            <p>Bắt nguồn từ trực quan sinh động, phản ánh sự vật một cách gián tiếp, khái quát hơn, đầy đủ hơn.</p>
            
            <ul>
              <li><strong>Khái niệm:</strong> Hình thức cơ bản của tư duy trừu tượng, phản ánh khái quát, gián tiếp một số thuộc tính chung có tính bản chất nào đó của một nhóm sự vật. Khái niệm là chủ quan trong tính trừu tượng nhưng là khách quan trong chỉnh thể, trong quá trình, trong nguồn gốc.</li>
              <li><strong>Phán đoán:</strong> Hình thức liên hệ các khái niệm, phản ánh mối liên hệ giữa các sự vật hiện tượng.</li>
              <li><strong>Suy lý (Suy luận):</strong> Phương thức quan trọng để tư duy của con người đi từ cái đã biết đến cái chưa biết một cách gián tiếp. Gồm Quy nạp (từ cái đơn nhất đến cái chung) và Diễn dịch (từ cái chung đến cái ít chung hơn).</li>
            </ul>
            
            <p><strong>Ưu điểm:</strong> Nhận thức lý tính phản ánh, khái quát, trừu tượng, gián tiếp sự vật trong tính tất yếu, chỉnh thể toàn diện. Nó có thể phản ảnh được mối liên hệ bản chất, tất nhiên, bên trong của sự vật, sâu sắc hơn nhận thức cảm tính.</p>
            
            <h3>c. Sự thống nhất giữa các giai đoạn và thực tiễn</h3>
            <p>Nhận thức cảm tính và nhận thức lý tính là hai giai đoạn khác nhau về chất nhưng thống nhất với nhau, liên hệ, bổ sung cho nhau trong quá trình nhận thức. Cảm tính là cơ sở cho lý tính, và nhờ lý tính mà con người mới đi sâu nhận thức được bản chất của sự vật.</p>
            
            <p>Quá trình nhận thức thông qua các vòng khâu nhận thức (Trực quan sinh động → Tư duy trừu tượng → Thực tiễn) để ngày càng tiến sâu hơn vào bản chất của các sự vật, hiện tượng. Nhận thức của con người là vô tận.</p>
          </section>

          <section className="card">
            <h2>5. Chân lý và các tính chất</h2>
            
            <h3>a. Khái niệm chân lý</h3>
            <p>Chân lý là tri thức phù hợp với hiện thực khách quan mà con người phản ánh và được thực tiễn kiểm nghiệm.</p>
            
            <h3>b. Các tính chất của chân lý</h3>
            <p><strong>Tính khách quan:</strong> Nội dung chân lý phản ánh là khách quan, không phụ thuộc vào ý muốn chủ quan hay niềm tin của cá nhân hay số đông. Chân lý phải dựa vào hiện thực khách quan và được kiểm nghiệm bằng thực tiễn.</p>
            
            <p><strong>Tính tương đối và tính tuyệt đối:</strong></p>
            <ul>
              <li><strong>Tính tương đối:</strong> Tri thức phản ánh một bộ phận nào đó của hiện thực khách quan trong những điều kiện giới hạn xác định.</li>
              <li><strong>Tính tuyệt đối:</strong> Tri thức phản ánh đầy đủ, toàn diện hiện thực khách quan ở một giai đoạn lịch sử cụ thể xác định. Chân lý tuyệt đối là tổng số những chân lý tương đối.</li>
            </ul>
            <p>Sự phân biệt này chỉ là tương đối và đường ranh giới này có thể vượt qua được.</p>
            
            <p><strong>Tính cụ thể:</strong> Chân lý luôn là cụ thể, phản ánh sự vật, hiện tượng ở trong một điều kiện, hoàn cảnh lịch sử, không gian và thời gian xác định. Không có chân lý trừu tượng, chung chung.</p>
          </section>

          <section className="conclusion">
            <h2>Kết luận</h2>
            <p>Triết học Mác – Lênin yêu cầu phải luôn tôn trọng tính khách quan và hành động theo quy luật khách quan trong nhận thức và hoạt động thực tiễn. Việc chấp nhận quan điểm chỉ vì số đông tin theo mà thiếu kiểm chứng khách quan có thể dẫn đến sai lầm nghiêm trọng.</p>
            
            <p>Lý luận nhận thức của chủ nghĩa duy vật biện chứng khẳng định khả năng con người nhận thức được thế giới thông qua quá trình biện chứng từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn.</p>
            
            <p>Thực tiễn đóng vai trò quyết định trong nhận thức: là cơ sở, động lực, mục đích và tiêu chuẩn để kiểm tra chân lý. Chân lý có ba tính chất cơ bản: tính khách quan, tính tuyệt đối và tương đối, tính cụ thể.</p>
          </section>
        </>
      ) : (
        <>
          <header>
            <h1>Bàn luận Chuyên sâu</h1>
            <p className="subtitle-quote">Lý thuyết về Chân lý trong Lịch sử Triết học</p>
          </header>
          
          <section className="card">
            <h2>1. Lý thuyết về Chân lý trong Lịch sử Triết học</h2>
            <p>Trong lịch sử triết học, có nhiều quan điểm khác nhau về chân lý và khả năng nhận thức thế giới:</p>
            
            <p><strong>Chủ nghĩa duy tâm:</strong> Cường điệu hóa vai trò của ý thức và tinh thần, coi ý thức là cái có trước. Họ tuyệt đối hóa yếu tố tinh thần, biến nó thành một thực thể tồn tại độc lập, là nguồn gốc sinh ra thế giới vật chất.</p>
            
            <p><strong>Thuyết hoài nghi và Thuyết không thể biết (Agnosticism):</strong> Nghi ngờ khả năng nhận thức của con người, hoặc khẳng định rằng con người về nguyên tắc không thể nhận thức được bản chất thế giới ("vật tự nó").</p>
            
            <p><strong>Chủ nghĩa duy vật trước Mác:</strong> Thừa nhận khả năng nhận thức và coi nhận thức là quá trình phản ánh hiện thực khách quan vào bộ óc người, nhưng lại hiểu sự phản ánh này một cách giản đơn, thụ động, mang tính siêu hình và trực quan.</p>
          </section>

          <section className="card">
            <h2>2. Quan điểm của Chủ nghĩa Duy vật Biện chứng về Chân lý</h2>
            <p>Triết học Mác – Lênin xác định chân lý là tri thức phù hợp với hiện thực khách quan mà con người phản ánh và được thực tiễn kiểm nghiệm.</p>
            
            <h3>Tính Khách quan của Chân lý:</h3>
            <p>Chân lý được đặc trưng bởi tính khách quan, nghĩa là nội dung chân lý phản ánh là khách quan, không phụ thuộc vào con người và loài người. V.I. Lênin khẳng định thừa nhận chân lý khách quan là đặc điểm của người duy vật. Chân lý chỉ phụ thuộc vào thực tại khách quan, không phụ thuộc vào lợi ích hay sự quy ước.</p>
            
            <h3>Vai trò quyết định của Thực tiễn:</h3>
            <p>Trong lý luận nhận thức, thực tiễn là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý và bác bỏ sai lầm. Vấn đề tìm hiểu tính chân lý khách quan hoàn toàn không phải là một vấn đề lý luận mà là một vấn đề thực tiễn.</p>
            
            <p>Ngoài ra, chân lý còn có:</p>
            <ul>
              <li><strong>Tính tương đối và tuyệt đối:</strong> Tri thức đúng nhưng chưa hoàn toàn đầy đủ (tương đối), nhưng tổng số những chân lý tương đối sẽ tiến gần đến chân lý tuyệt đối.</li>
              <li><strong>Tính cụ thể:</strong> Chân lý luôn là cụ thể, phản ánh sự vật trong những điều kiện, hoàn cảnh lịch sử xác định, không có chân lý trừu tượng, chung chung.</li>
            </ul>
          </section>

          <section className="card">
            <h2>3. Chân lý và Sự thừa nhận của Đám đông/Xã hội</h2>
            <p>Trong bối cảnh xã hội số, quan điểm cho rằng "cái gì đám đông thừa nhận thì chính là chân lý" là một quan điểm sai lầm về mặt triết học và đi ngược lại nguyên tắc nền tảng của Chủ nghĩa duy vật biện chứng.</p>
            
            <h3>Phân biệt Chân lý với Niềm tin Chủ quan:</h3>
            <p>Chân lý không phụ thuộc vào ý muốn chủ quan hay niềm tin của cá nhân hay số đông. Sự chấp nhận một quan điểm chỉ vì số đông tin theo mà thiếu sự kiểm chứng khách quan có thể dẫn đến những sai lầm nghiêm trọng, đi ngược lại các quy luật khách quan.</p>
            
            <h3>"Quần chúng nhân dân" khác với "Đám đông tin theo":</h3>
            <p>Triết học Mác – Lênin khẳng định quần chúng nhân dân là chủ thể sáng tạo chân chính, là động lực phát triển của lịch sử. Họ là lực lượng căn bản quyết định của lực lượng sản xuất, sản xuất ra toàn bộ của cải vật chất và tinh thần. Tuy nhiên, vai trò động lực này được nhấn mạnh ở khả năng hoạt động thực tiễn và thay đổi xã hội theo quy luật khách quan, chứ không phải ở việc họ định đoạt tính chân lý của một quan điểm thông qua niềm tin chủ quan của số đông. Ngược lại, các nhà duy tâm trước Mác thường coi quần chúng là "đám đông ô hợp" chịu sự điều khiển của vĩ nhân.</p>
            
            <div className="concept-image">
              <img src="/images/dd.png" alt="Đám đông vs. Quần chúng nhân dân - Sự khác biệt về vai trò trong nhận thức chân lý" />
            </div>
          </section>

          <section className="card">
            <h2>4. Khẳng định vai trò quyết định của Hiện thực Khách quan</h2>
            <p>Chân lý phải luôn dựa vào hiện thực khách quan và được kiểm nghiệm bằng thực tiễn.</p>
            
            <p>Tính chân lý của một tri thức được xác định bởi sự phù hợp của nó với thế giới vật chất tồn tại độc lập với ý thức con người. Triết học Mác – Lênin yêu cầu con người phải tôn trọng tính khách quan và hành động theo quy luật khách quan trong nhận thức và hoạt động thực tiễn. Bất cứ sự chấp nhận rộng rãi nào (từ đám đông) mà không tuân thủ tính khách quan và không được thực tiễn chứng minh đều không phải là chân lý.</p>
            
            <div className="concept-image">
              <img src="/images/cccl.png" alt="Cán cân công lý - Biểu tượng của việc cân bằng giữa chân lý khách quan và sự thừa nhận chủ quan" />
            </div>
          </section>

          <section className="conclusion">
            <h2>Kết luận</h2>
            <p>Qua phân tích các quan điểm triết học trong lịch sử, chúng ta thấy rằng quan điểm "cái gì đám đông thừa nhận thì chính là chân lý" là một quan điểm sai lầm về mặt triết học. Chủ nghĩa duy vật biện chứng khẳng định chân lý phải dựa vào hiện thực khách quan và được kiểm nghiệm bằng thực tiễn.</p>
            
            <p>Vai trò của quần chúng nhân dân được thể hiện qua hoạt động thực tiễn cải tạo thế giới, chứ không phải thông qua việc định đoạt chân lý bằng niềm tin chủ quan. Chân lý có tính khách quan, tuyệt đối và tương đối, cụ thể - không phụ thuộc vào ý muốn hay sự thừa nhận của số đông.</p>
          </section>
        </>
      )}
      
      {/* Remove old modal code */}
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

// Parallax scroll effect for background patterns
let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const parallax = document.documentElement.style;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  
  // Calculate scroll progress (0 to 1)
  const scrollProgress = scrolled / (documentHeight - windowHeight);
  
  // Calculate parallax offset with easing - positive value to move UP when scrolling DOWN
  const parallaxSpeed = 0.5;
  const yPos = scrolled * parallaxSpeed;
  
  // Add subtle rotation that increases with scroll progress
  const rotation = scrollProgress * 2; // Max 2 degrees rotation
  
  // Apply transform to pseudo elements via CSS custom property
  parallax.setProperty('--scroll-offset', `${yPos}px`);
  parallax.setProperty('--scroll-rotation', `${rotation}deg`);
  
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

// Add passive listener for better performance
window.addEventListener('scroll', requestTick, { passive: true });
