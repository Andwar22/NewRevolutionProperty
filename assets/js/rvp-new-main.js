
// #region ============= INSTALLER =============
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// #endregion ========== GSAP INSTALLER =============

// #region ============= BACK TO TOP =============
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
// #endregion ========== BACK TO TOP =============

// #region ============= CHANGE STYLE ONSCROLL =============
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 800)
    {
      // GLOBAL
      bttBtn.style.transform = "scale(1)";

      // DEKSTOP
      if (window.matchMedia('screen and (min-width: 1024px)').matches) {
        document.getElementById("navbar").style.padding = "1rem 3rem";
        document.getElementById("navbar").style.background = "var(--white)";
        document.getElementById("navbar").style.boxShadow = "0 5px 15px #69696933";
      }

      // TABLET
      if (window.matchMedia('screen and (min-width: 768px) and (max-width: 1023px)').matches) {
        document.getElementById("navbar").style.padding = "1rem 3rem";       
      }

      // HP
      if (window.matchMedia('screen and (max-width: 767px)').matches) {
        document.getElementById("navbar").style.padding = "1rem 1.5rem";
      }
    }
    else
    {
      // GLOBAL
      bttBtn.style.transform = "scale(0)";

      // DEKSTOP
      if (window.matchMedia('screen and (min-width: 1024px)').matches) {
        document.getElementById("navbar").style.padding = "2rem 3rem";
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.boxShadow = "none";
      }

      // TABLET
      if (window.matchMedia('screen and (min-width: 768px) and (max-width: 1023px)').matches) {
        document.getElementById("navbar").style.padding = "1rem 3rem";
      }

      // HP
      if (window.matchMedia('screen and (max-width: 767px)').matches) {
        
      }
    }
  }
// #endregion ========== CHANGE STYLE ONSCROLL =============

// #region ============= HIDE NAVBAR ONSCROLL DOWN =============
  document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 750, delta = 15;
    window.addEventListener("scroll", function() {
      var st = window.scrollY || document.documentElement.scrollTop;
      
      if (Math.abs(lastScrollTop - st) <= delta)
        return;
      if ((st > lastScrollTop) && (lastScrollTop > 750)) {
        document.getElementById("navbar").style.top = "-4.5rem";
      } else {
        document.getElementById("navbar").style.top = "0px";
      }
      lastScrollTop = st;
    });
  });
// #endregion ========== HIDE NAVBAR ONSCROLL DOWN =============

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