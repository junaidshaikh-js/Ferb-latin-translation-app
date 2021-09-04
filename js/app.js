const textarea = document.querySelector("textarea");

const submitBtn = document.querySelector("button");

const outputBox = document.querySelector(".output-box");

const URL = "https://api.funtranslations.com/translate/ferb-latin.json";

function constructUrl(text) {
  const urlStr = `${URL}?text=${text}`;
  return urlStr;
}

function translateText() {
  const userInput = textarea.value;

  if (userInput == "") {
    alert("Enter Some Text");
  } else {
    const urlStr = constructUrl(userInput);

    fetch(urlStr)
      .then((response) => response.json())
      .then((data) => {
        outputBox.innerHTML = data.contents.translated;
      })
      .catch(() => {
        alert(`Some Error Occured ${error}
Please try again after some time`);
      });
  }
}

submitBtn.addEventListener("click", translateText);

textarea.addEventListener("input", () => {
  outputBox.innerHTML = "";
});
