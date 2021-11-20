const modal = document.querySelector(".modal");
const smallImage = document.querySelectorAll(".l-main img");
const fullImage = document.querySelector(".full-img");
const imgCaption = document.querySelector(".caption");

smallImage.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    fullImage.classList.add("open");
    const originalSrc = img.getAttribute("data-original");
    fullImage.src = `./assets/img/${originalSrc}`;
    const altText = img.alt;
    imgCaption.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    fullImage.classList.remove("open");
  }
});