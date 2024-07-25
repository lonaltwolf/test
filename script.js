const clickme = document.querySelector(".clickme");
clickme.addEventListener("click", () => {
  console.log("element clicked");
  if(clickme.textContent === "CLICK ME") {
    clickme.textContent = "LE BHOSDIWAALE KAR DIYE CODE PUSH DEKH LE";
  } else {
    clickme.textContent = "CLICK ME";
  }
});
