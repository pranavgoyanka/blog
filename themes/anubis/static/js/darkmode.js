var toggle = document.getElementById("dark-mode-toggle");
    var darkTheme = document.getElementById("dark-mode-theme");

    toggle.addEventListener("click", () => {
        console.log(toggle.className)
        if (toggle.className === "light") {
            setTheme("dark");
        } else if (toggle.className === "dark") {
            setTheme("light");
        }
    });

    function setTheme(mode) {
        localStorage.setItem("dark-mode-storage", mode);
        if (mode === "dark") {
            console.log(mode);
            darkTheme.disabled = false;
            toggle.className = "dark";
            toggle.innerHTML = "🌖"
        } else if (mode === "light") {
            darkTheme.disabled = true;
            toggle.className = "light";
            toggle.innerHTML = "🌘"
        }
    }


    var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);