// Theme toggle and mobile menu. Loaded in <head> so the saved theme applies before paint.
(function () {
  // Light/dark theme. The OS setting applies by default (via CSS); clicking the
  // toggle stores an explicit choice.
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

  function initTheme(button) {
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
  }

  // Mobile menu. CSS shows the button on small screens only and folds the nav
  // links under it; without JS the button stays hidden and the links stay visible.
  function initMenu(button) {
    var nav = button.parentNode;
    function isOpen() { return button.getAttribute("aria-expanded") === "true"; }
    function setOpen(open) { button.setAttribute("aria-expanded", String(open)); }
    button.hidden = false;
    button.addEventListener("click", function () { setOpen(!isOpen()); });
    // Close when focus or a tap lands outside the nav, so the open menu never covers the page.
    function closeIfOutside(e) { if (isOpen() && !nav.contains(e.target)) setOpen(false); }
    document.addEventListener("focusin", closeIfOutside);
    document.addEventListener("click", closeIfOutside);
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" || !isOpen()) return;
      var inside = nav.contains(document.activeElement);
      setOpen(false);
      if (inside) button.focus();
    });
    // Coming back with the Back button restores the page as it was left: close the menu.
    window.addEventListener("pageshow", function (e) { if (e.persisted) setOpen(false); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var theme = document.getElementById("theme-toggle");
    var menu = document.getElementById("menu-toggle");
    if (theme) initTheme(theme);
    if (menu) initMenu(menu);
  });
})();
