const copyBtn = document.getElementById("copy");
const copyText = document.getElementById("copy-text");
const formInput = document.getElementById("form");
const message = document.querySelector("[name=message]");
const replace = document.querySelector("[name=replace]");
const rightSide = document.querySelector(".right");
rightSide.classList.add('hideSide')

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  const messageValue = message.value.toLowerCase();
  const replaceValue = replace.value.toLowerCase();
  const replaceArray = replaceValue.split(" ");
  const modifiedArray = [];
  replaceArray.forEach((element) => {
    let star = "";
    let count = element.length;
    while (count > 0) {
      star += "*";
      count--;
    }

    if (modifiedArray.length !== 0) {
      modifiedArray[0] = modifiedArray[0].replaceAll(element, star);
    }
    return modifiedArray.push(messageValue.replaceAll(element, star));
  });
  copyText.textContent = modifiedArray[0];
  rightSide.classList.remove('hideSide')
  message.value = "";
  replace.value = "";
});

copyBtn.addEventListener("click", (e) => {
  navigator.clipboard.writeText(copyText.textContent).then(() => {
    e.target.classList.remove("btn-success");
    e.target.classList.add("btn-dark");
    e.target.textContent = "Copied!";
    setTimeout(() => {
      e.target.textContent = "Copy";
      e.target.classList.remove("btn-dark");
      e.target.classList.add("btn-success");
    }, 1500);
  });
});
