            
    var toggle = document.getElementById("dark-mode-toggle");
    var darkTheme = document.getElementById("dark-mode-theme");

    toggle.addEventListener("click", () => {
        // console.log(toggle.className)
        if (toggle.className === "light") {
            setTheme("dark");
        } else if (toggle.className === "dark") {
            setTheme("light");
        }
    });

    function setTheme(mode) {
        if (mode === "dark") {
            // console.log(mode);
            darkTheme.disabled = false;
            // document.styleSheets[1].disabled = false
            toggle.className = "dark";
        } else if (mode === "light") {
            darkTheme.disabled = true;
            // document.styleSheets[1].disabled = true;
            toggle.className = "light";
        }
    }