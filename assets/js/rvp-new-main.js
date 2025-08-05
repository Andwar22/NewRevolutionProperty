
// #region ============= GSAP INSTALLER =============
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// #endregion ========== GSAP INSTALLER =============

// #region ============= BACK TO TOP =============
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  // #endregion ========== BACK TO TOP =============
  
// #region ============= NAVBAR CONTROL ONSCROLL =============
  document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const bttBtn = document.getElementById("bttBtn");
    
    let currentDevice = "";
    let lastScrollTop = 0;
    const delta = 10;          // Sensitivitas gerakan scroll
    const scrollThreshold = 200; // Ubah jadi lebih rendah agar terlihat cepat

    // Deteksi device
    function detectDevice() {
      if (window.matchMedia('screen and (min-width: 1024px)').matches) {
        currentDevice = "desktop";
      }
      else if (window.matchMedia('screen and (min-width: 768px) and (max-width: 1023px)').matches) {
        currentDevice = "tablet";
      }
      else {
        currentDevice = "mobile";
      }
    }
    detectDevice();
    window.addEventListener("resize", detectDevice);

    // Scroll event utama
    window.addEventListener("scroll", function() {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;

      // === Back to Top Button ===
      if (scrollPos > 70) {
        bttBtn.style.transform = "scale(1)";
      }
      else {
        bttBtn.style.transform = "scale(0)";
      }

      // === Ubah Style Navbar ===
      if (scrollPos > 70) {
        if (currentDevice === "desktop") {
          navbar.style.padding = "1rem 3rem";
          navbar.style.background = "var(--white)";
          navbar.style.boxShadow = "0 5px 15px #69696933";
        }
        else if (currentDevice === "tablet") {
          navbar.style.padding = "1rem 3rem";
        }
        else if (currentDevice === "mobile") {
          navbar.style.padding = "1rem 1.5rem";
        }
      }
      else {
        if (currentDevice === "desktop") {
          navbar.style.padding = "2rem 3rem";
          navbar.style.background = "transparent";
          navbar.style.boxShadow = "none";
        }
        else if (currentDevice === "tablet") {
          navbar.style.padding = "1rem 3rem";
        }
      }

      // === Hide Navbar Saat Scroll Down ===
      if (Math.abs(lastScrollTop - scrollPos) > delta) {
        if (scrollPos > lastScrollTop && scrollPos > scrollThreshold) {
          // Scroll ke bawah
          navbar.style.top = "-4.5rem";
        }
        else {
          // Scroll ke atas
          navbar.style.top = "0";
        }
        lastScrollTop = scrollPos;
      }
    });
  });
// #endregion ========== NAVBAR CONTROL ONSCROLL =============

// #region ============= TOGGLE DARK MODE =============
  document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan elemen checkbox
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Memeriksa apakah dark mode sudah disimpan di local storage sebelumnya
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    // Mengatur status dark mode berdasarkan data di local storage
    if (isDarkMode) {
      document.body.classList.add("dark");
      darkModeToggle.checked = true;
    }

    // Fungsi untuk menangani perubahan status checkbox
    function toggleDarkMode() {
      // Tambahkan atau hilangkan class 'dark' pada <body>
      document.body.classList.toggle("dark");
      // Simpan status dark mode di local storage
      localStorage.setItem("darkMode", darkModeToggle.checked);
    }

    // Tambahkan event listener untuk memantau perubahan pada checkbox
    darkModeToggle.addEventListener("change", toggleDarkMode);
  });
// #endregion ======= TOGGLE DARK MODE =============

// #region ============= NAVBAR MOBILE =============
  document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');
    const body = document.body;
    const navMenuLinks = document.querySelectorAll('.nav-menu a');

    // Fungsi untuk menangani klik di luar navbar
    function handleOutsideClick(event) {
        if (!navbar.contains(event.target)) {
            navToggle.checked = false;
            body.style.overflowY = 'auto'; // Mengembalikan overflow body menjadi auto
        }
    }

    // Tambahkan event listener untuk klik di luar navbar
    document.addEventListener('click', handleOutsideClick);

    // Fungsi untuk mengatur scroll pada body saat checkbox di-centang
    function handleBodyScroll() {
        if (navToggle.checked) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'auto';
        }
    }

    // Fungsi untuk menangani klik pada tautan di dalam .nav-menu
    function handleNavMenuLinkClick() {
        navToggle.checked = false; // Menonaktifkan checkbox
        body.style.overflowY = 'auto'; // Mengembalikan overflow body menjadi auto
    }

    // Tambahkan event listener untuk checkbox di-centang
    navToggle.addEventListener('change', handleBodyScroll);

    // Tambahkan event listener untuk setiap tautan di dalam .nav-menu
    navMenuLinks.forEach(function(link) {
        link.addEventListener('click', handleNavMenuLinkClick);
    });
  });
// #endregion ========== NAVBAR MOBILE =============