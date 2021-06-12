let gridFuture = "gridFuture";

function myFunction(view) {
  console.log(view);
  if (gridFuture !== view) {
    console.log(document.querySelector(`.${gridFuture}`));
    console.log(document.querySelector(`.${view}`));
    document.querySelector(`.${gridFuture}`).style.display = "none";
    document.querySelector(`.${view}`).style.display = "grid";
  } else {
    document.querySelector(`.${view}`).style.display = "none";
    document.querySelector(`.${gridFuture}`).style.display = "grid";
  }
  gridFuture = view;
  console.log(gridFuture);
}

// const field1 = document.getElementById("field1");
// console.log(field1);

// field1.addEventListener("click", (e) => {
//   const gridFuture = document.querySelector(".gridFuture");
//   console.log(gridFuture);
//   gridFuture.style.display = "none";
// });
