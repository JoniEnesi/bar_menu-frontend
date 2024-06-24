document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("darkemode-toggle");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggle.checked = true;
    }

    toggle.addEventListener("change", function() {
        if (this.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const globeIcon = document.getElementById('globe-icon');
    const languageOptions = document.getElementById('language-options');
    const langAL = document.getElementById('lang-al');
    const langEN = document.getElementById('lang-en');

    // Lexo gjuhën e ruajtur në localStorage, nëse ka
    let currentLanguage = localStorage.getItem('currentLanguage');

    // Nëse nuk ka gjuhë të ruajtur, përdor gjuhën parazgjedhur (p.sh., 'en' si gjuha angleze)
    if (!currentLanguage) {
        currentLanguage = 'en';
    }

    // Funksion për vendosjen e gjuhës aktive
    setLanguage(currentLanguage);

    globeIcon.addEventListener('click', function() {
        if (languageOptions.style.display === 'none' || languageOptions.style.display === '') {
            languageOptions.style.display = 'block';
        } else {
            languageOptions.style.display = 'none';
        }
    });

    langAL.addEventListener('click', function() {
        changeLanguage('al');
    });

    langEN.addEventListener('click', function() {
        changeLanguage('en');
    });

    function changeLanguage(lang) {
        setLanguage(lang);
        localStorage.setItem('currentLanguage', lang); // Ruaj gjuhën e zgjedhur në localStorage
        languageOptions.style.display = 'none';
    }

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            element.innerText = element.getAttribute(`data-lang-${lang}`);
        });
    }
});





function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}