var pattern = document.getElementById('forePattern');


document.onmousemove = (event) => {
    if (window.scrollY == 0) {
        var x = event.clientX * 50 / visualViewport.width + "px";
        var y = event.clientY * 50 / visualViewport.height + "px";
        console.log(x + " " + y);
        pattern.style.marginLeft = x;
        pattern.style.marginTop = y;
    }
}


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            setTimeout(() => { entry.target.style.transition = "all 0.2s" }, 1000);
        } else {
            entry.target.classList.remove('show');
            setTimeout(() => { entry.target.style.transition = "all 1s" }, 0);
        }
    })
})

hiddenElements.forEach((el) => observer.observe(el));