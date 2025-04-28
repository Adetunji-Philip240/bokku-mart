function toggleMenu() {
    const menu = document.getElementById("menu");
    const toggler = document.getElementById("toggler");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      toggler.classList.remove("bi-list");
      toggler.classList.add("bi-x");
    } else {
      toggler.classList.remove("bi-x");
      toggler.classList.add("bi-list");
    }
  }