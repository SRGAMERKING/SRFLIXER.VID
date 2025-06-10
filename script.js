
const content = document.getElementById('content');
const nav = document.getElementById('nav');
const countdownTarget = new Date('June 27, 2025 00:00:00').getTime();

const homePage = `
  <div class="banner-container">
    <video autoplay muted loop>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    </video>
    <div class="banner-content">
      <h1>GAMING ARENA</h1>
      <p>COMING 27TH JUNE</p>
      <div class="countdown" id="countdown">--d --h --m --s</div>
    </div>
  </div>

  <div class="hero"><h1>Welcome to SRFLIXER</h1></div>

  <div class="section"><h2>Popular on SRFLIXER</h2>
    <div class="video-grid">
      <iframe src="https://www.youtube.com/embed/UePbdph" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/8TUyKJv" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/hY2kSk1" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/CwP1Mmd" allowfullscreen></iframe>
    </div>
  </div>

  <div class="section"><h2>SR Gamer King Content</h2>
    <div class="video-grid">
      <iframe src="https://www.youtube.com/embed/h62KGRtFgqk" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/LLaD_NiumdA" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/lLNYDbFKdBg" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/hdYl_u5bIWs" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/Xnynwfqh4Sc" allowfullscreen></iframe>
    </div>
  </div>
`;

const loginForm = `
  <form class="auth-form" onsubmit="login(event)">
    <h2>Login to SRFLIXER</h2>
    <input type="text" id="username" placeholder="Username" required />
    <input type="password" id="password" placeholder="Password" required />
    <button type="submit">Login</button>
    <p>Don't have an account? <a href="#" onclick="showSignup()">Sign Up</a></p>
  </form>
`;

const signupForm = `
  <form class="auth-form" onsubmit="signup(event)">
    <h2>Sign Up for SRFLIXER</h2>
    <input type="text" id="newuser" placeholder="Username" required />
    <input type="password" id="newpass" placeholder="Password" required />
    <button type="submit">Sign Up</button>
    <p>Already have an account? <a href="#" onclick="showLogin()">Login</a></p>
  </form>
`;

function showHome() {
  nav.innerHTML = '<a href="#" onclick="logout()">Logout</a>';
  content.innerHTML = homePage;
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function showLogin() {
  nav.innerHTML = '';
  content.innerHTML = loginForm;
}

function showSignup() {
  nav.innerHTML = '';
  content.innerHTML = signupForm;
}

function login(e) {
  e.preventDefault();
  localStorage.setItem('srflixer_logged_in','true');
  showHome();
}

function signup(e) {
  e.preventDefault();
  localStorage.setItem('srflixer_logged_in','true');
  showHome();
}

function logout() {
  localStorage.removeItem('srflixer_logged_in');
  showLogin();
}

function updateCountdown() {
  const el = document.getElementById('countdown');
  const diff = countdownTarget - Date.now();
  if (diff < 0) return el.innerText = 'NOW STREAMING!';
  const d = Math.floor(diff/86400000);
  const h = Math.floor((diff%86400000)/3600000);
  const m = Math.floor((diff%3600000)/60000);
  const s = Math.floor((diff%60000)/1000);
  el.innerText = `${d}d ${h}h ${m}m ${s}s`;
}

if (localStorage.getItem('srflixer_logged_in') === 'true') showHome();
else showLogin();
