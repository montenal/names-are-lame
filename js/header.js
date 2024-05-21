document.querySelector(".writeHeader").innerHTML = `
    <div class="topnav">
        <img src="images/logo.png" alt="logo" class="logo"/>
        <a href="index.html">HOME</a>
        <a href="news.html">NEWS</a>
        <a href="webcomic.html">WEBCOMIC</a>
        <button class="toggle-theme" onclick="darkMode()"><b>DARK</b></button>
    </div>
`;

function darkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem("dark-mode", "enabled")
    } else {
      localStorage.setItem("dark-mode", "disabled")
    }
}

if (localStorage.getItem("dark-mode") === 'enabled') {
    document.body.classList.toggle("dark-mode")
}