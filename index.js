const menu = document.getElementsByClassName("menu-hamburger")[0];

menu.addEventListener("click", () => {
  const menuList = document.getElementsByClassName("header-menu")[0];
  const isVisible = menuList.classList.contains("menu-mobile");

  if (!isVisible) {
    menuList.classList.add("menu-mobile");
  } else {
    menuList.classList.remove("menu-mobile");
  }
});
