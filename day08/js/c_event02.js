window.addEventListener("load", () => {
  console.log("load@@@@");
});

{
  let $main = document.querySelector("main");

  window.addEventListener("scroll", () => {
    console.log("scroll@@@");
    console.dir(window.scrollY);

    if (window.scrollY > 1500) {
      $main.style.backgroundColor = "gold";
    } else if (window.scrollY > 1000) {
      $main.style.backgroundColor = "blue";
    } else if (window.scrollY > 500) {
      $main.style.backgroundColor = "green";
    } else {
      $main.style.backgroundColor = "bisque";
    }
  });
}
