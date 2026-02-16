(() => {
  const openNav = document.querySelector(".open-menu"),
    closeNav = document.querySelector(".close-menu"),
    navMenu = document.querySelector(".nav-links-container"),
    dropdownToggle = document.querySelector("#align-txt-icon");

  openNav.addEventListener("click", () => {
    navMenu.classList.add("open");
  });

  closeNav.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });

  dropdownToggle.addEventListener("click", () => {
    dropdownToggle.classList.toggle("active");
  });
})();
