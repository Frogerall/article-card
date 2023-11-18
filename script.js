function adjustLayout() {
 let screenWidth = window.innerWidth;
 let contact = document.querySelector(".contact");
 let shareLink = document.querySelector(".share-link");
 let toolTip = document.querySelector(".tooltiptext");
 let profileMargin = document.querySelector(".profile");

 if (screenWidth >= 600 && toolTip.style.display === "none") {
  toolTip.style.display = "flex";
 } else if (screenWidth < 600 && toolTip.style.display === "none") {
  toolTip.style.display = "flex";
  contact.classList.toggle("close");
  shareLink.classList.toggle("active");
  profileMargin.style.margin = "0rem";
 } else {
  toolTip.style.display = "none";
  contact.classList.remove("close");
  shareLink.classList.remove("active");
  profileMargin.style.margin = "1rem";
 }
}
window.addEventListener("load", adjustLayout);
window.addEventListener("resize", adjustLayout);
document.querySelector(".share-link").addEventListener("click", (event) => {
 event.preventDefault();
 adjustLayout();
});
