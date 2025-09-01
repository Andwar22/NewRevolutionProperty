
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
          navbar.style.padding = "1rem 4rem";
          navbar.style.background = "var(--white)";
          navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)"
        }
        else if (currentDevice === "tablet") {
          // navbar.style.padding = "1rem 3rem";
        }
        else if (currentDevice === "mobile") {
          // navbar.style.padding = "1rem 1.5rem";
        }
      }
      else {
        if (currentDevice === "desktop") {
          navbar.style.padding = "2rem 4rem";
          navbar.style.background = "transparent";
          navbar.style.boxShadow = "none"
        }
        else if (currentDevice === "tablet") {
          // navbar.style.padding = "1rem 3rem";
        }
      }

      // === Hide Navbar Saat Scroll Down ===
      if (Math.abs(lastScrollTop - scrollPos) > delta) {
        if (scrollPos > lastScrollTop && scrollPos > scrollThreshold) {
          // Scroll ke bawah
          navbar.style.top = "-5rem";
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
  // document.addEventListener("DOMContentLoaded", function() {
  //   // Mendapatkan elemen checkbox
  //   const darkModeToggle = document.getElementById("darkModeToggle");

  //   // Memeriksa apakah dark mode sudah disimpan di local storage sebelumnya
  //   const isDarkMode = localStorage.getItem("darkMode") === "true";

  //   // Mengatur status dark mode berdasarkan data di local storage
  //   if (isDarkMode) {
  //     document.body.classList.add("dark");
  //     darkModeToggle.checked = true;
  //   }

  //   // Fungsi untuk menangani perubahan status checkbox
  //   function toggleDarkMode() {
  //     // Tambahkan atau hilangkan class 'dark' pada <body>
  //     document.body.classList.toggle("dark");
  //     // Simpan status dark mode di local storage
  //     localStorage.setItem("darkMode", darkModeToggle.checked);
  //   }

  //   // Tambahkan event listener untuk memantau perubahan pada checkbox
  //   darkModeToggle.addEventListener("change", toggleDarkMode);
  // });
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

// #region ============= HEADER =============
  const HeroBuild = document.querySelector('.hero-building');
  const HeroTop = document.querySelector('.hero-top');

  const headerTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#header",
      start: "top top",
      end: "+=100%",
      scrub: true,
      invalidateOnRefresh: true
    }
  });

  headerTL.to(HeroBuild, { top: "-3rem" })
          .to(HeroTop, { top: "-3rem" }, "<")
// #endregion ========== HEADER =============

// #region ============= TENTANG =============
  const box1 = document.querySelector('#tentang .images div:first-child');
  const box2 = document.querySelector('#tentang .images div:nth-child(2)');
  const box3 = document.querySelector('#tentang .images div:nth-child(3)');
  const box4 = document.querySelector('#tentang .images div:last-child');
  const box1Title = document.querySelector('#tentang .images div:first-child span');
  const box2Title = document.querySelector('#tentang .images div:nth-child(2) span');
  const box3Title = document.querySelector('#tentang .images div:nth-child(3) span');
  const box4Title = document.querySelector('#tentang .images div:last-child span');

  const aboutTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#header",
      start: "bottom center",
      end: "+=55% center",
      scrub: true
    }
  });

  aboutTL.from(box1, { left: "-4rem", bottom: "-3rem", opacity: 0, duration: 6 })
         .from(box2, { right: "-3rem", bottom: "-2rem", opacity: 0, duration: 6 }, "<")
         .from(box3, { left: "-3rem", bottom: "-5rem", opacity: 0, duration: 6 }, "<")
         .from(box4, { right: "-3rem", bottom: "-5rem", opacity: 0, duration: 6 }, "<")
         .to(box1Title, { bottom: "1.5rem", opacity: 1, duration: 4 })
         .to(box2Title, { top: "1rem", opacity: 1, duration: 4 })
         .to(box3Title, { top: "1rem", opacity: 1, duration: 4 })
         .to(box4Title, { bottom: "1.5rem", opacity: 1, duration: 2 })
// #endregion ========== TENTANG =============

// #region ============= KENAPA =============
  const alasan = document.querySelector('#kenapa .alasan');

  const alasanTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#tentang",
      start: "bottom center",
      end: "+=55% center",
      scrub: true
    }
  });

  alasanTL.from(alasan, { transform: "scale(.75)", opacity: 0 })
// #endregion ========== KENAPA =============

// #region ============= PERBEDAAN =============
  const slider = document.querySelector(".slider-divider input");
  const shrink = document.querySelector(".img-shrink");
  const full = document.querySelector(".img-full");
  const handle = document.querySelector(".drag-handle");
  const activeSide = document.querySelector(".wrap-perbedaan");

  if (slider && shrink && full && handle && activeSide) {
    slider.addEventListener("input", () => {
      let sliderVal = parseInt(slider.value, 10);

      shrink.style.width = sliderVal + "%";
      full.style.width = (100 - sliderVal) + "%";
      handle.style.left = sliderVal + "%";

      activeSide.classList.toggle("min", sliderVal <= 30);
      activeSide.classList.toggle("max", sliderVal >= 70);
    });
  }
// #endregion ========== PERBEDAAN =============

// #region ============= HISTORY =============
  const timelineTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".timeline",
      start: "top top",
      end: "+=500%", 
      scrub: true,
      pin: true
    }
  });

  const items = document.querySelectorAll('.history .timeline .item');
  const dotsLine = document.querySelector('.history .timeline .dots .line');
  const dots = document.querySelectorAll('.history .timeline .dots span');

  const totalItems = items.length;

  items.forEach((item, i) => {
    if (i === 0) return; // item pertama tidak animasi line

    // animasi item masuk
    timelineTL.from(item, {
      bottom: "-100%",
      opacity: 0,
      duration: 1
    }, "+=1");

    // animasi line bertambah sesuai progress
    const progress = (i / (totalItems - 1)) * 100;
    timelineTL.to(dotsLine, { height: progress + "%" }, "<");

    // animasi dot berubah warna
    timelineTL.to(dots[i], { backgroundColor: "yellow", scale: "1", duration: 2 }, "<");
  });
// #endregion ========== HISTORY =============

// #region ============= VARIAN =============
  $(document).ready(function() {
    var contents = {
      0: '.content-resort1',
      1: '.content-resort2',
      2: '.content-resort3',
    };

    $('.carousel').on('select.flickity', function(event, index) {
      console.log('Flickity select ' + index);

      for (var key in contents) {
        if (index == key) {
          $(contents[key]).addClass('active');
        } else {
          $(contents[key]).removeClass('active');
        }
      }
    });
  });
// #endregion ========== VARIAN =============

// #region ============= COUNTER PROMO =============
  function getMonthlyCountdown() {
    const now = new Date();

    // Tanggal 1 bulan berikutnya jam 00:00:00
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);

    const diff = nextMonth - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  //buat agar 2 digit
  function formatNumber(num) {
    return String(num).padStart(2, "0");
  }

  function updateTimer() {
    const countdown = getMonthlyCountdown();
    document.getElementById("promoDays").textContent = `${formatNumber(countdown.days)}`;
    document.getElementById("promoHours").textContent = `${formatNumber(countdown.hours)}`;
    document.getElementById("promoMinutes").textContent = `${formatNumber(countdown.minutes)}`;
    document.getElementById("promoSeconds").textContent = `${formatNumber(countdown.seconds)}`;
  }

  // Jalankan langsung pertama kali
  updateTimer();

  // Update tiap detik
  setInterval(updateTimer, 1000);
// #endregion ========== COUNTER PROMO =============

// #region ============= TESTIMONI =============
  const photosWrap = document.querySelector('#testimoni .photos .wrap');
  const commentsArea = document.querySelectorAll('#testimoni .comments');

  const testiTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".promo",
      start: "bottom center",
      end: "+=100%",
      scrub: true
    }
  });
  testiTL.to(photosWrap, { opacity: .2, duration: 6, delay: 4 })
         .from(commentsArea, { y: "100vh", opacity: 0, duration: 10, ease: "power3.out" })

  let commentItem = gsap.utils.toArray(".review");

  commentItem.forEach((container, i) => {
    let localItems = container.querySelectorAll(".review-item"),
    distance = () => {
      let lastItemBounds = localItems[localItems.length-1].getBoundingClientRect(),
          containerBounds = container.getBoundingClientRect();
      return Math.max(0, lastItemBounds.right - containerBounds.right);
    };
    gsap.to(container, {
      x: () => -distance(),
      scrollTrigger: {
        trigger: "#testimoni",
        start: "top top",
        end: () => "+=" + distance(),
        pin: true,
        scrub: true,
        invalidateOnRefresh: true
      }
    })
  });
// #endregion ========== TESTIMONI =============

// #region ============= GET YEAR =============
  function getYear() {
    return new Date().getFullYear();
  }
  document.getElementById("year").textContent = getYear();
// #endregion ========== GET YEAR =============







// #region ============= XXXX =============

// #endregion ========== XXXX =============
