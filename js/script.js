//sellection
let inname = document.getElementById("inputname");
let email = document.getElementById("inputemail");
let submit = document.getElementById("submitbutton");
let todolist = document.getElementById("todolist");
let errormessage = document.getElementById("message");
console.log(localStorage);
console.log(localStorage.length);

//event validation

submit.addEventListener("click", addlist);
todolist.addEventListener("click", deletebutton);
// submit.addEventListener("click", addlist);

//function
function addlist(e) {
  e.preventDefault();

  const emailrepex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  if (inname.value == "" || email.value == "") {
    errormessage.innerText = "Please enter Name and Email";
    if (inname.value == "" && email.value !== "") {
      errormessage.innerText = "Please enter Name ";
    }
    if (email.value == "" && inname.value !== "") {
      errormessage.innerText = "Please enter Email";
    }
  } else if (!email.value.match(emailrepex)) {
    errormessage.innerText = "Please enter Valid Email";
  } else {
    //local storage
    localStorage.setItem(inname.value, email.value);
    location.reload();

    inname.value = "";
    email.value = "";
    errormessage.innerText = "";
  }
  //
}

function deletebutton(e) {
  const clickitem = e.target;
  const selectedelete = clickitem.parentElement.firstChild.firstChild.innerHTML;
  localStorage.removeItem(selectedelete);
  location.reload();
}

///local storage

for (i = 0; i < localStorage.length; i++) {
  //  div
  const tododiv = document.createElement("div");
  tododiv.classList.add("tododiv");
  // li tage
  const todoli = document.createElement("div");
  todoli.classList.add("todolist");
  tododiv.appendChild(todoli);
  // div of name inside of li tag
  const namelist = document.createElement("div");
  namelist.classList.add("namelist");
  // namelist.innerText = inname.value;
  todoli.appendChild(namelist);
  //div of email
  const emaillist = document.createElement("div");
  emaillist.classList.add("emaillist");
  // emaillist.innerText = email.value;
  todoli.appendChild(emaillist);
  //button in tododiv tag
  const trashbutton = document.createElement("div");
  trashbutton.classList.add("trashbutton");
  trashbutton.innerHTML = '<i class="fas fa-trash" ></i>';
  tododiv.appendChild(trashbutton);

  //append to list
  todolist.appendChild(tododiv);

  ///

  const lsname = localStorage.key(i);
  const lsemail = localStorage.getItem(lsname);

  namelist.innerText = lsname;
  emaillist.innerText = lsemail;
  console.log(lsname);
  console.log(lsemail);
}
