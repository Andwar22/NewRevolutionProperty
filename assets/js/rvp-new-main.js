
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
    const layerTop = document.querySelector(".ly-top");
    const layerBot = document.querySelector(".ly-bot");
    const bttBtn = document.getElementById("bttBtn");

    let currentDevice = "";
    let lastScrollTop = 0;
    const delta = 10; // sensitivitas gerakan scroll

    // Threshold = 60% tinggi viewport (60vh)
    const getScrollThreshold = () =>
      (window.innerHeight || document.documentElement.clientHeight) * 0.6;

    let scrollThreshold = getScrollThreshold();

    // Deteksi device
    function detectDevice() {
      if (window.matchMedia('screen and (min-width: 1024px)').matches) {
        currentDevice = "desktop";
      } else if (window.matchMedia('screen and (min-width: 768px) and (max-width: 1023px)').matches) {
        currentDevice = "tablet";
      } else {
        currentDevice = "mobile";
      }
    }
    detectDevice();

    // Update device & threshold saat resize
    window.addEventListener("resize", () => {
      detectDevice();
      scrollThreshold = getScrollThreshold();
    });

    // Scroll event utama
    window.addEventListener("scroll", function() {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;

      // === Back to Top Button ===
      bttBtn.style.transform = scrollPos > 100 ? "scale(1)" : "scale(0)";

      // === Ubah Style Navbar ===
      // if (currentDevice === "desktop") {}
      if (scrollPos > 70) {
        if (layerTop) layerTop.style.opacity = 0;
        if (layerBot) layerBot.style.opacity = 1;
      } else {
        if (layerTop) layerTop.style.opacity = 1;
        if (layerBot) layerBot.style.opacity = 0;
      }

      // === Hide Navbar Saat Scroll Down (aktif setelah > 60vh) ===
      if (Math.abs(lastScrollTop - scrollPos) > delta) {
        if (scrollPos > lastScrollTop && scrollPos > scrollThreshold) {
          // Scroll ke bawah
          navbar.style.top = "-6rem";
        } else {
          // Scroll ke atas
          navbar.style.top = "0";
        }
        lastScrollTop = scrollPos;
      }
    }, { passive: true });
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
  document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');
    const body = document.body;
    const navMenuLinks = document.querySelectorAll('.nav-menu a');

    if (!navToggle || !navbar) return; // Pastikan elemen penting ada sebelum lanjut

    // Fungsi untuk menangani klik di luar navbar
    function handleOutsideClick(event) {
        // Abaikan jika elemen yang diklik adalah toggle itu sendiri
        if (!navbar.contains(event.target) && event.target !== navToggle) {
            navToggle.checked = false;
            body.style.overflowY = 'auto';
        }
    }

    // Fungsi untuk mengatur scroll pada body saat checkbox di-centang
    function handleBodyScroll() {
        body.style.overflowY = navToggle.checked ? 'hidden' : 'auto';
    }

    // Fungsi untuk menangani klik pada tautan di dalam .nav-menu
    function handleNavMenuLinkClick() {
        navToggle.checked = false;
        body.style.overflowY = 'auto';
    }

    // Event listeners
    document.addEventListener('click', handleOutsideClick);
    navToggle.addEventListener('change', handleBodyScroll);
    navMenuLinks.forEach(link => link.addEventListener('click', handleNavMenuLinkClick));
  });
// #endregion ========== NAVBAR MOBILE =============

// #region ============= HEADER =============
  window.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("heroVideo");
    const toggleBtn = document.getElementById("toggleMuteBtn");

    // Pastikan video autoplay saat reload
    // Browser kadang butuh user gesture, jadi kita paksa play lewat Promise
    const playVideo = () => {
      video.play().catch(() => {
        // kalau gagal autoplay (karena policy browser), tunggu interaksi user
        document.addEventListener("click", () => video.play(), { once: true });
      });
    };

    playVideo();

    // Set default muted
    video.muted = true;
    toggleBtn.innerHTML = `<i class="ci-volume-high"></i>`;

    // Toggle suara
    toggleBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      toggleBtn.innerHTML = video.muted
        ? `<i class="ci-volume-high"></i>`
        : `<i class="ci-volume-off-02"></i>`;
    });
  });
// #endregion ========== HEADER =============

// #region ============= TENTANG =============
  const box1 = document.querySelector('#about .images div:first-child');
  const box2 = document.querySelector('#about .images div:nth-child(2)');
  const box3 = document.querySelector('#about .images div:nth-child(3)');
  const box4 = document.querySelector('#about .images div:last-child');
  const box1Title = document.querySelector('#about .images div:first-child span');
  const box2Title = document.querySelector('#about .images div:nth-child(2) span');
  const box3Title = document.querySelector('#about .images div:nth-child(3) span');
  const box4Title = document.querySelector('#about .images div:last-child span');

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


  // GSAP counter
  const counterObj = { val: 0 };
  const counterID = document.getElementById("visitorCounter");

  // Buat animasi counter (pause dulu)
  const counterTL = gsap.to(counterObj, {
    val: 3000,
    duration: 2,
    ease: "power1.out",
    paused: true,
    onUpdate: () => {
      counterID.textContent =
      Math.floor(counterObj.val / 20) * 20;
    }
  });

  // ScrollTrigger untuk restart animasi setiap kali masuk
  ScrollTrigger.create({
    trigger: "#about",
    start: "+=30% center",
    onEnter: () => {
      counterObj.val = 0; // reset angka
      counterTL.restart();
    }
  });
// #endregion ========== TENTANG =============

// #region ============= USAHA SENDIRI =============
  const imgProb = document.querySelectorAll('#selfEmployed .big-image img');
  const putarProb = document.querySelectorAll('#selfEmployed .rotating-prob');
  const putarProbTeks = document.querySelectorAll('#selfEmployed .rotating-prob .item-prob div span b');

  const putarProbAnim = gsap.timeline({
    scrollTrigger: {
      trigger: "#selfEmployed",
      start: "top center", // mulai saat section muncul di tengah viewport
      toggleActions: "play none none reverse"
    }
  });

  putarProbAnim.fromTo(imgProb, 
    { y: 400, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1 }
  );
  
  // Rotasi setiap lingkaran bergantian
  putarProb.forEach((el, i) => {
    // setiap elemen berputar 45 derajat lebih banyak dari sebelumnya
    putarProbAnim.to(el, {
      rotate: 45 * (i + 1),
      duration: 0.6,
      ease: "power1.out"
    }, i * 0.1); // jeda kecil antara tiap animasi
  });

  // Setelah rotasi selesai, tampilkan teks
  putarProbAnim.fromTo(putarProbTeks, 
    { x: -50, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
    ">+=0.2" // mulai sedikit setelah animasi rotasi selesai
  );  
// #endregion ========== USAHA SENDIRI =============

// #region ============= NABUNG =============
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("sliderYears");
    const wrapCompare = document.getElementById("wrapCompare");
    const homeDiv = document.getElementById("homeImg");
    const moneyDiv = document.getElementById("moneyImg");
    const homeVal = document.getElementById("homeValNow");
    const moneyVal = document.getElementById("moneyValNow");
    const tahunSpans = document.querySelectorAll(".tahunNow");
    const sliderOn = document.getElementById("sliderOn");

    // mapping slider value ke tahun
    const tahunMap = {
      0: 2005,
      10: 2007,
      20: 2009,
      30: 2011,
      40: 2013,
      50: 2015,
      60: 2017,
      70: 2019,
      80: 2021,
      90: 2023,
      100: 2025,
    };

    // harga tanah per tahun (rata-rata, dalam juta)
    const hargaTanah = {
      2005: 100,
      2007: 120,
      2009: 140,
      2011: 170,
      2013: 200,
      2015: 230,
      2017: 270,
      2019: 320,
      2021: 380,
      2023: 440,
      2025: 500,
    };

    // daya beli Rp 100.000 (kg beras)
    const dayaBeli = {
      2005: 30,
      2007: 27,
      2009: 24,
      2011: 20,
      2013: 16,
      2015: 13,
      2017: 10,
      2019: 8,
      2021: 6,
      2023: 5,
      2025: 4,
    };

    // ukuran dasar img
    const homeMin = 100; 
    const homeMax = 150; 
    const moneyMin = 100;
    const moneyMax = 150;

    function updateSizes() {
      const value = parseInt(slider.value, 10);
      const tahun = tahunMap[value] || "";
      const stepCount = value / 10; // hitung step (0-10)

      // update tahun di semua span
      tahunSpans.forEach(span => {
        span.textContent = tahun;
      });

      // update harga tanah
      const harga = hargaTanah[tahun] || 0;
      homeVal.textContent = harga + " juta";

      // update daya beli
      const kg = dayaBeli[tahun] || 0;
      moneyVal.textContent = kg;

      // ukuran img
      const homeSize = homeMin + stepCount * ((homeMax - homeMin) / 10);
      const moneySize = moneyMax - stepCount * ((moneyMax - moneyMin) / 10);

      // update style img
      homeDiv.style.width = homeSize + "px";
      homeDiv.style.height = homeSize + "px";
      moneyDiv.style.width = moneySize + "px";
      moneyDiv.style.height = moneySize + "px";

      // tambahkan class "max" jika value = 100
      if (value === 100) {
        wrapCompare.classList.add("max");
      } else {
        wrapCompare.classList.remove("max");
      }

      slider.oninput = ()=>{
        sliderOn.style.width = slider.value + "%";
      }
    }

    // jalankan sekali saat load
    updateSizes();

    // update saat slider digeser
    slider.addEventListener("input", updateSizes);
  });
// #endregion ========== NABUNG =============

// #region ============= CARA KERJA =============
  const hiwSection = document.querySelector('#howItWorks');
  const hiwItems   = gsap.utils.toArray('#howItWorks .list-text .item');

  // Helper: aktifkan semua item dari 0..index (kumulatif). Index < 0 = nonaktif semua.
  function setActiveUpTo(index) {
    hiwItems.forEach((el, i) => el.classList.toggle('active', i <= index));
  }

  // Set awal: item pertama aktif (opsional)
  setActiveUpTo(0);

  const lastIdx = hiwItems.length - 1;

  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: hiwSection,
      start: "top top",
      end: () => "+=" + (hiwItems.length * 300),
      pin: true,
      scrub: true,
      anticipatePin: 1,
      // markers: true,

      // Masuk dari atas: mulai dari item 0
      onEnter: () => setActiveUpTo(0),

      // Keluar di bawah: pertahankan semua aktif (tetap di item kelima)
      onLeave: () => setActiveUpTo(lastIdx),

      // Masuk kembali dari bawah: JANGAN reset ke 0 (biarkan scrub/timeline yang atur)
      // onEnterBack: () => setActiveUpTo(lastIdx), // opsional; bisa dihapus saja

      // Keluar di atas: nonaktifkan semua
      onLeaveBack: () => setActiveUpTo(-1),
    }
  });

  // Bagi timeline menjadi N segmen; tiap segmen kumulatif
  hiwItems.forEach((el, i) => {
    tl.from(el, {scale: .96, duration: 0.3 }, i);
    tl.call(setActiveUpTo, [i], i + 0.001);
  });

  tl.to({}, { duration: 0.5 });
// #endregion ========== CARA KERJA =============





// #region ============= BENEFIT =============
  const putar = document.querySelector('#benefit .rotating');
  const putarCircle1 = document.querySelector('#benefit .rotating .item-wheel:nth-child(8) div');
  const putarCircle2 = document.querySelector('#benefit .rotating .item-wheel:nth-child(7) div');
  const putarCircle3 = document.querySelector('#benefit .rotating .item-wheel:nth-child(6) div');
  const putarCircle4 = document.querySelector('#benefit .rotating .item-wheel:nth-child(5) div');
  const putarCircle5 = document.querySelector('#benefit .rotating .item-wheel:nth-child(4) div');
  const putarCircle6 = document.querySelector('#benefit .rotating .item-wheel:nth-child(3) div');
  const putarCircle7 = document.querySelector('#benefit .rotating .item-wheel:nth-child(2) div');
  const putarCircle8 = document.querySelector('#benefit .rotating .item-wheel:nth-child(1) div');
  const naik = document.querySelector('#benefit .moving-stacked');
  const boxNaik1 = document.querySelector('#benefit .moving-stacked div:nth-child(1)');

  const totalSteps = 8;   // 360 / 45 = 8 step
  const stepDistance = 200; // jarak naik per step (px)

  const benefitTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#benefit",
      start: "top top",
      end: `+=${totalSteps * 100}%`, // tiap step punya ruang scroll sendiri
      scrub: true,
      pin: true
    }
  });

  for (let i = 1; i <= totalSteps; i++) {
    benefitTL.to(putar, { rotate: 45 * i })
             .to(naik, { top: -stepDistance * i + "px" }, "<");
  }
  
// #endregion ========== BENEFIT =============

// #region ============= KENAPA =============
  const alasan = document.querySelector('#kenapa .alasan');
  const movingImg = document.querySelector('#kenapa .alasan .right');

  const alasanTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#alasan",
      start: "bottom bottom",
      end: "+=100%",
      scrub: true
    }
  });

  alasanTL.to(movingImg, { xPercent: -35, yPercent: 160 })
// #endregion ========== KENAPA =============

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
    timelineTL.to(dots[i], { backgroundColor: "var(--secondary)", scale: "1", duration: 2 }, "<");
  });
// #endregion ========== HISTORY =============

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
      trigger: "#nextProp",
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
