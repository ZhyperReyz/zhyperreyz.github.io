const slides = document.querySelectorAll(".slide");
let current = 0;

// Ganti slide setelah video selesai
slides.forEach((slide, index) => {
  const vid = slide.querySelector("video");
  vid.addEventListener("ended", () => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
    slides[current].querySelector("video").play();
  });
});

const circles = document.querySelectorAll(".circle");
    const overlay = document.getElementById("overlay");
    const activeCircle = document.querySelector(".active-circle");
    const detailText = document.getElementById("detailText");
    const closeBtn = document.getElementById("closeBtn");

    const explanations = {
      html: "HTML (HyperText Markup Language) adalah bahasa standar untuk membuat struktur halaman web. Elemen-elemen HTML seperti <div> <p> <img> digunakan untuk menyusun konten sehingga dapat ditampilkan di browser.",
      css: "CSS (Cascading Style Sheets) digunakan untuk mengatur tampilan halaman web. Dengan CSS, kita bisa mengubah warna, ukuran, layout, animasi, hingga membuat desain responsif.",
      js: "JavaScript adalah bahasa pemrograman untuk membuat halaman web interaktif. Mulai dari validasi form, animasi, manipulasi DOM, hingga koneksi API bisa dilakukan dengan JS."
    };

    // animasi mlaku
    circles.forEach(circle => {
      const percentEl = circle.querySelector(".percent");
      const target = parseInt(circle.dataset.percent);
      let value = 0;
      const clr = circle.style.getPropertyValue("--clr");
      const interval = setInterval(() => {
        if (value >= target) {
          clearInterval(interval);
        } else {
          value++;
          percentEl.textContent = value + "%";
          circle.style.background = `conic-gradient(${clr} ${value * 3.6}deg, #222 ${value * 3.6}deg)`;
        }
      }, 30);
    });

    // double click buka detail
    circles.forEach(container => {
      container.addEventListener("dblclick", () => {
        const skill = container.dataset.skill;
        const clone = container.cloneNode(true);

        // set persen langsung dari ori
        const originalPercent = container.querySelector(".percent").textContent;
        clone.querySelector(".percent").textContent = originalPercent;

        activeCircle.innerHTML = "";
        activeCircle.appendChild(clone);
        detailText.classList.remove("show");
         detailText.innerHTML = `<p style="margin-top:10px;">${explanations[skill]}</p>`;
        setTimeout(() => detailText.classList.add("show"), 200);
        

        overlay.classList.add("active");
      });
    });

    // mulyono
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });

      const hero = document.getElementById('hero');
    const heroTitle = document.getElementById('hero-title');
    const productImages = document.querySelectorAll('.product-card img');

    productImages.forEach(img => {
      img.addEventListener('click', () => {
        const bg = img.getAttribute('data-bg');
        const name = img.getAttribute('data-name');
        hero.style.backgroundImage = `url('${bg}')`;
        heroTitle.textContent = name;
      });
    });
    const track = document.querySelector('.carousel-track');
    const slidesProj = Array.from(track.children);
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let index = 0;
    function moveToSlide(idx) { track.style.transform = `translateX(-${idx * 100}%)`; }
    nextBtn.addEventListener('click', ()=>{ index=(index+1)%slidesProj.length; moveToSlide(index); });
    prevBtn.addEventListener('click', ()=>{ index=(index-1+slidesProj.length)%slidesProj.length; moveToSlide(index); });
    setInterval(()=>{ index=(index+1)%slidesProj.length; moveToSlide(index); },7000);
     
