// console.log("print.js is loading");
const printButton = document.getElementById("printButton");

printButton.addEventListener("click", function(){
  // console.log("Print button was clicked");
  window.print();
});
