let paragraph = document.querySelector(".form textarea");
let button = document.querySelector(".form input[type='submit']");
let allResult = document.querySelector(".all-result span");
let endResult = document.querySelector(".end-result span");

button.onclick = () => {
  if (paragraph.value !== "") {
    allResult.innerHTML = paragraph.value.split(" ").length;
    endResult.innerHTML = new Set(paragraph.value.split(" ")).size;
  }
};
