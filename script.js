// function toggleSidebar() {
//     const sidebar = document.getElementById('sidebar');
//     if (sidebar.style.width === '100%') {
//       sidebar.style.width = '0';
//     } else {
//       sidebar.style.width = '100%';
//     }
// }

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = `
      <section>
        <img src="logo.png" class="footer-logo" alt="Footer Logo">
        <div class="margin"></div>
        <h2>
          We only have <a href="https://instagram.com" target="_blank">Instagram</a> .. for now 😉 <br />
          <a class="playfair no-underline" href="about.html">Who Are We Exactly?</a>
        </h2>
        <div class="margin"></div>
        <div class="margin"></div>
      </section>
    `;
  }
});


document.addEventListener("DOMContentLoaded", function () {
  // Insert the navigation bar
  const nav = document.getElementById("nav");
  if (nav) {
    nav.innerHTML = `
      <div class="logo-nav">
        <a href="index.html"><img src="logo.png" alt="Logo"></a>
      </div>
      <div class="nav-links">
        <a href="artworks.html">Artworks</a>
        <a href="about.html">About Us</a>
      </div>
      <div class="hamburger" onclick="toggleSidebar()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
  }

  // Insert the sidebar
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.innerHTML = `
      <a href="javascript:void(0)" class="close-btn" onclick="toggleSidebar()"></a>
      <a href="artworks.html">Artworks</a>
      <a href="about.html">About</a>
    `;
  }
});

// Sidebar toggle function
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

  
