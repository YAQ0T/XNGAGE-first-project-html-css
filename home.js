let burgerFlag = false;
document.getElementById("burger-menu").addEventListener("click", () => {
  if (!burgerFlag) {
    document.getElementById("mobile-menu-items").style.display = "flex";
    document.getElementsByTagName(
      "body"
    )[0].style.backgroundImage = `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;

    document.getElementsByClassName(
      "home-article"
    )[0].style.backgroundImage = `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
  }

  burgerFlag = !burgerFlag;
});

document.getElementById("exit-burger-menu").addEventListener("click", () => {
  if (burgerFlag) {
    document.getElementById("mobile-menu-items").style.display = "none";
    document.getElementsByTagName("body")[0].style.backgroundImage = "none";
    document.getElementsByClassName("home-article")[0].style.backgroundImage =
      "none";
  }
  burgerFlag = !burgerFlag;
});
