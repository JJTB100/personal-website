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
