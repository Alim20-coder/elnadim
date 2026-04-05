document.addEventListener("DOMContentLoaded", function() {

    // --- 1. Navbar & Parallax Logic (Merged Scroll Event) ---
    const nav = document.getElementById('mainNavbar');
    const bg = document.querySelector('.parallax-bg');

    window.addEventListener('scroll', function() {
        // Navbar Logic
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('navbar-scrolled', 'shadow');
            } else {
                nav.classList.remove('navbar-scrolled', 'shadow');
            }
        }

        // Parallax Logic
        if (bg && window.innerWidth > 991) {
            let scrollPos = window.pageYOffset;
            bg.style.transform = 'translateY(' + (scrollPos * 0.15) + 'px)';
        }
    });

    // --- 2. Hero Mouse Tracking Logic ---
    const heroArea = document.querySelector('#hero-area');
    const img = document.querySelector('.hero-moving-img');

    if (heroArea && img) {
        heroArea.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 991) {
                let x = (window.innerWidth / 2 - e.pageX) / 30;
                let y = (window.innerHeight / 2 - e.pageY) / 30;
                img.style.transform = `perspective(1000px) rotateY(${-x}deg) rotateX(${y}deg)`;
            }
        });
    }

    // --- 3. Intersection Observer for Service Cards ---
    const observerOptions = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    // --- 4. Zones Rendering Logic ---
    (function() {
const zones = [
    "أبو نصير", "شفا بدران", "الجبيهة", "تلاع العلي", "الرابية", "دير غبار",
    "الصويفية", "عبدون", "ماركا الجنوبية", "ماركا الشمالية", "طبربور", "ضاحية الأمير حسن",
    "ضاحية الأقصى", "ضاحية الحاج حسن", "مرج الحمام", "الجويدة", "خريبة السوق", "أم السماق",
    "خلدا", "البنيات", "بيادر وادي السير", "الياسمين", "حي النزال", "الجاردنز",
    "سحاب", "عين الباشا", "صويلح", "المدينة الرياضية", "صافوط", "الدوار الأول",
    "الدوار الثالث", "الدوار الرابع", "الدوار السابع", "شارع الحرية", "المدينة الطبية", "عرجان"
];
        const container = document.getElementById("zones-container");
        if (!container) return;

        let html = "";
        for (let i = 0; i < zones.length; i++) {
            html += `
                <div class="col-6 col-md-4 col-lg-2">
                    <div class="location-card-mini shadow-sm">
                        <i class="bi bi-geo-alt-fill"></i>
                        <span class="text-white small fw-bold">${zones[i]}</span>
                    </div>
                </div>
            `;
        }
        container.innerHTML = html;
    })();

});