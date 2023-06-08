// Start Show Menu
let links = document.querySelector(' ul.links'),
  openMenu = document.querySelector('.icon-menu'),
  closeMenu = document.querySelector('.close')
openMenu.addEventListener('click', () => {
  links.style.right = '0'
})
closeMenu.addEventListener('click', () => {
  links.style.right = '-60%'
})
// End Show Menu
// Start toogle active class on links
let link = document.querySelectorAll("#links li a");
link.forEach((list) => {
  list.addEventListener("click", () => {
    document.querySelector("#links li a.active").classList.remove("active");
    list.classList.add("active")
  });
});
// End toogle active class on links

// Dark Mode
let body = document.querySelector("body"),
  dark = document.querySelector("#dark"),
  waveImages = document.querySelectorAll(".wave");

dark.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  waveImages.forEach((image) => {
    if (body.classList.contains("dark-mode")) {
      image.style.filter = "invert(0.91)"
    } else {
      image.style.filter = "invert(0)"
    }
  })



})