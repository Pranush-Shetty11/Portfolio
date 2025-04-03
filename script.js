const menubar = document.querySelector("#menu");
const Navbar = document.querySelector(".navbar");

menubar.onclick = () => {
  menubar.classList.toggle("bx-x");
  Navbar.classList.toggle("active");
};
const section = document.querySelectorAll("section");
const navlink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + height) {
      sec.classList.add("start-animation");
      navlink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove("bx-x");
  Navbar.classList.remove("active");
};
// Read More Button Fix
const readMoreBtn = document.querySelector("#readMoreBtn");
const aboutText = document.querySelector(".text-content2 p");

readMoreBtn.addEventListener("click", () => {
  if (readMoreBtn.innerText === "Read More") {
    aboutText.innerHTML +=
      " I have experience in working with multiple web technologies and frameworks. I enjoy solving problems and learning new skills.";
    readMoreBtn.innerText = "Read Less";
  } else {
    aboutText.innerHTML =
      "Passionate and detail-oriented Web Developer with experience in designing, developing, and maintaining dynamic web applications. Skilled in both front-end and back-end development, with expertise in modern frameworks and technologies. Adept at creating responsive, user-friendly interfaces and optimizing performance.";
    readMoreBtn.innerText = "Read More";
  }
});
