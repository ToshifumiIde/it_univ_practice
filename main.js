"use strict";

{
  const plus = document.getElementById("plus");
  const reset = document.getElementById("reset");
  const minus = document.getElementById("minus");
  const target = document.getElementById("target");

  let num = 0;
  target.innerHTML = num;

  reset.addEventListener("click", () => {
    num = 0;
    target.innerHTML = num;
  });
  plus.addEventListener("click", () => {
    num++;
    target.innerHTML = num;
  });
  minus.addEventListener("click", () => {
    num--;
    target.innerHTML = num;
  });
}
