import "./App.css";

export default function App() { //React 컴포넌트를 내보내는 코드
  return (
    <div>
      <header className="header">
        <h1>My Profile</h1>
        <p>★Welcome byul's page★</p>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#about">자기소개</a></li>
          <li><a href="#features">관심사</a></li>
          <li><a href="#contact">연락하기</a></li>
          <li><a href="https://skulikelion.com" target="_blank" >멋사 사이트 바로가기</a></li>
        </ul>
      </nav>

      <main className="main">
        <section id="about" className="section">
          <h2>안녕하세요!</h2>
          <p>저는 전자컴퓨터공학과 23학번 김별입니다.</p>
          <p>멋사 활동하는 동안 잘 지내봐요 !</p>
          <img
            className="img"
            src="/hi.jpg"
            alt="about_image"
          />
        </section>

        <section id="features" className="section">
          <h2>관심사</h2>
          
          <h3>취미</h3>
          <ul>
            <li>감성카페 가기</li>
            <li>음악 감상</li>
            <li>일렉 치기(아직 연습 중..)</li>
          </ul>
          <img
            className="img"
            src="/guitar.jpg"
            alt="guitar_image"
          />

          <h3>좋아하는 음식 순위</h3>
          <ol>
            <li>떡복이</li>
            <li>돈까스</li>
            <li>파스타</li>
          </ol>
          <img
            className="img"
            src="/food.jpg"
            alt="food_image"
          />
        </section>

        <section id="contact" className="section">
          <h2>연락하기</h2>
          <p>이메일: byul227@skuniv.ac.kr</p>
          <p>전화번호: 010-7737-2724</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025. SKU LIKELION. All rights reserved.</p>
      </footer>
    </div>
  );
}