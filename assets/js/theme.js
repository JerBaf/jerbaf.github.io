// Light/dark theme. The OS setting applies by default (via CSS); clicking the
// toggle stores an explicit choice. Loaded in <head> so it runs before paint.
(function () {
  var root = document.documentElement;
  var osDark = matchMedia("(prefers-color-scheme: dark)");
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) {}

  function isDark() {
    var theme = root.getAttribute("data-theme");
    return theme ? theme === "dark" : osDark.matches;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) return;
    function sync() { button.setAttribute("aria-pressed", String(isDark())); }
    button.hidden = false;
    sync();
    osDark.addEventListener("change", sync);
    button.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });
  });
})();
