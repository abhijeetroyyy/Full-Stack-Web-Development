let div = document.createElement("div");
div.innerHTML = "I have been inserted by <b>abhijeet roy</b>";
div.setAttribute("class", "created");
document.querySelector(".container").before(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").append(div);

let cont = document.querySelector(`.container`);
cont.insertAdjacentHTML(
    "afterend",
    "<p>This is a paragraph added using insertAdjacentHTML method.</p>"
  );
//   cont.insertAdjacentHTML(
//     "beforebegin",
//     "<p>This is a paragraph added using insertAdjacentHTML method.</p>"
//   );
