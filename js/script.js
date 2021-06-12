// //sellection
// let inname = document.getElementById("inputname");
// let email = document.getElementById("inputemail");
// let submit = document.getElementById("submitbutton");
// let todolist = document.getElementById("todolist");
// let errormessage = document.getElementById("message");
// console.log(localStorage);
// console.log(localStorage.length);

// //event validation

// submit.addEventListener("click", addlist);
// todolist.addEventListener("click", deletecheckbutton);
// // submit.addEventListener("click", addlist);

// //function
// function addlist(e) {
//   e.preventDefault();

//   const emailrepex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

//   if (inname.value == "" || email.value == "") {
//     errormessage.innerText = "Please enter Name and Email";
//     if (inname.value == "" && email.value !== "") {
//       errormessage.innerText = "Please enter Name ";
//     }
//     if (email.value == "" && inname.value !== "") {
//       errormessage.innerText = "Please enter Email";
//     }
//   } else if (!email.value.match(emailrepex)) {
//     errormessage.innerText = "Please enter Valid Email";
//   } else {
//     //local storage
//     localStorage.setItem(email.value, inname.value);
//     location.reload();

//     inname.value = "";
//     email.value = "";
//     errormessage.innerText = "";
//   }
//   //
// }

// function deletecheckbutton(e) {
//   const clickitem = e.target;
//   if (clickitem.classList == "trashbutton") {
//     const selectedelete =
//       clickitem.parentElement.firstChild.lastChild.innerHTML;
//     localStorage.removeItem(selectedelete);
//   }
//   if (clickitem.classList == "editbutton") {
//     const editkey = clickitem.parentElement.firstChild.firstChild.innerHTML;
//     const editkey2 = clickitem.parentElement.firstChild.lastChild.innerHTML;
//     console.log(localStorage.getItem(editkey, editkey2));
//     console.log(localStorage.getItem(editkey));
//     console.log(localStorage.setItem(editkey, editkey2));

//     // localStorage.removeItem(selectedelete);
//   }

//   // location.reload();
// }

// ///local storage

// for (i = 0; i < localStorage.length; i++) {
//   //  div
//   const tododiv = document.createElement("div");
//   tododiv.classList.add("tododiv");

//   // li tage
//   const todoli = document.createElement("div");
//   todoli.classList.add("todolist");
//   tododiv.appendChild(todoli);

//   // div of name inside of li tag
//   const namelist = document.createElement("div");
//   namelist.classList.add("namelist");
//   todoli.appendChild(namelist);

//   //div of email
//   const emaillist = document.createElement("div");
//   emaillist.classList.add("emaillist");

//   // emaillist.innerText = email.value;
//   todoli.appendChild(emaillist);

//   ////edit-button in tododiv tag
//   const editbutton = document.createElement("div");
//   editbutton.classList.add("editbutton");
//   editbutton.innerHTML = '<i class="fas fa-edit" ></i>';
//   tododiv.appendChild(editbutton);

//   //trust-button in tododiv tag
//   const trashbutton = document.createElement("div");
//   trashbutton.classList.add("trashbutton");
//   trashbutton.innerHTML = '<i class="fas fa-trash" ></i>';
//   tododiv.appendChild(trashbutton);

//   //append to list
//   todolist.appendChild(tododiv);

//   ///
//   const lsemail = localStorage.key(i);
//   const lsname = localStorage.getItem(lsemail);

//   namelist.innerText = lsname;
//   emaillist.innerText = lsemail;
//   console.log(lsname);
//   console.log(lsemail);
// }

///////////////////////////////////////////////////////////////////

//selection
const loginform = document.querySelector("#logininputform");
const signupform = document.querySelector("#signupinputform");
const forgetform = document.querySelector("#forgetform");
const loginlink = document.querySelector("#loginlink");
const signuplink = document.querySelector("#signuplink");
const forgotpassword = document.querySelector("#forgotpassword");
const forgetlink = document.querySelector("#forgetlink");
const sinupbutton = document.querySelector("#sinupinputsubmit");
const loginbutton = document.querySelector("#logininputsubmit");
const forgetbutton = document.querySelector("#forgetsubmit");

const errormessage = document.querySelector(".errormessage");

////////////////////////////////////////////////////////////////////////

//event listener
loginlink.addEventListener("click", (e) => {
  loginform.classList.remove("closed");
  loginform.classList.add("open");
  signupform.classList.remove("open");
  signupform.classList.add("closed");
});

signuplink.addEventListener("click", (e) => {
  signupform.classList.remove("closed");
  signupform.classList.add("open");
  loginform.classList.remove("open");
  loginform.classList.add("closed");
  forgetform.classList.remove("open");
  forgetform.classList.add("close");
});

forgotpassword.addEventListener("click", (e) => {
  loginform.classList.remove("open");
  loginform.classList.add("closed");
  forgetform.classList.remove("closed");
  forgetform.classList.add("open");
});

forgetlink.addEventListener("click", (e) => {
  loginform.classList.remove("closed");
  loginform.classList.add("open");
  forgetform.classList.remove("open");
  forgetform.classList.add("closed");
});

sinupbutton.addEventListener("click", signupsubmit);
loginbutton.addEventListener("click", loginsubmit);
forgetbutton.addEventListener("click", forgetsubmit);

////////////////////////////////////////////////////////////////////////////////////////

//function
function signupsubmit(e) {
  e.preventDefault();
  // console.log(e.target.parentElement.children[4].innerText);

  if (e.target.parentElement.children[4].innerText !== "") {
    e.target.parentElement.children[4].innerHTML = "";
    console.log("mm");
  }

  const errortext = document.createElement("div");
  e.target.parentElement.children[4].appendChild(errortext);

  const usersignupdetials = {
    name: signupform.signupNameInput.value,
    email: signupform.signupEmailInput.value,
    password: signupform.signuppasswordinput.value,
  };

  if (
    usersignupdetials.name !== "" &&
    usersignupdetials.email !== "" &&
    usersignupdetials.password !== "" &&
    usersignupdetials.conformpassword !== ""
  ) {
    const emailRegex =
      /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    let va;
    //

    for (let i = 0; i <= localStorage.length; i++) {
      if (signupEmailInput.value === localStorage.key(i)) {
        va = false;
        console.log("false");
        break;
      } else {
        console.log("true");
        va = true;
      }
    }

    if (usersignupdetials.email.match(emailRegex)) {
      if (usersignupdetials.password.length > 0) {
        if (
          usersignupdetials.password ===
          signupform.signupconformpasswordinput.value
        ) {
          if (va) {
            localStorage.setItem(
              usersignupdetials.email,
              JSON.stringify(usersignupdetials)
            );
            document.location.href = "todo.html";
            signupform.signupNameInput.value = "";
            signupform.signupEmailInput.value = "";
          } else {
            errortext.innerText = "Email already used ";
          }
        } else {
          errortext.innerText = "password don't match";
        }
      } else {
        errortext.innerText = "please enter password more then 6 letter";
      }
    } else {
      errortext.innerText = "please enter valied email address";
    }
  } else {
    errortext.innerText = "please enter details";
  }
}

///////////////////////////////////////////////////////////////////////////////////////

function loginsubmit(e) {
  e.preventDefault();

  if (e.target.parentElement.children[2].innerText !== "") {
    e.target.parentElement.children[2].innerHTML = "";
  }

  const errortext = document.createElement("div");
  e.target.parentElement.children[2].appendChild(errortext);

  var va = [];
  if (
    loginform.loginEmailInput.value !== "" &&
    loginform.loginpasswordinput.value !== ""
  ) {
    //console.log(localStorage.length);
    for (let i = 0; i <= localStorage.length; i++) {
      if (loginform.loginEmailInput.value === localStorage.key(i)) {
        va[0] = true;
        va[1] = i;
        console.log(va[1]);
        break;
      } else {
        va[0] = false;
      }
    }

    if (va[0]) {
      const user = JSON.parse(localStorage.getItem(localStorage.key(va[1])));

      if (loginform.loginpasswordinput.value === user.password) {
        document.location.href = "todo.html";
        loginform.loginEmailInput.value = "";
      } else {
        errortext.innerText = "email or password is incorrect";
      }
    } else {
      errortext.innerText = "email or password is incorrect";
    }
  } else {
    errortext.innerText = "please enter details";
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////

function forgetsubmit(e) {
  e.preventDefault();

  if (e.target.parentElement.children[3].innerText !== "") {
    e.target.parentElement.children[3].innerHTML = "";
  }

  const errortext = document.createElement("div");
  e.target.parentElement.children[3].appendChild(errortext);

  var va = [];
  if (
    forgetform.forgetEmailInput.value !== "" &&
    forgetform.forgetpasswordinput.value !== "" &&
    forgetform.forgetconformpasswordinput.value !== ""
  ) {
    for (let i = 0; i <= localStorage.length; i++) {
      if (forgetform.forgetEmailInput.value === localStorage.key(i)) {
        va[0] = true;
        va[1] = i;
        console.log(va[1]);
        break;
      } else {
        va[0] = false;
      }
    }

    if (va[0]) {
      const user = JSON.parse(localStorage.getItem(localStorage.key(va[1])));
      if (
        forgetform.forgetpasswordinput.value ===
        forgetform.forgetconformpasswordinput.value
      ) {
        if (forgetform.forgetpasswordinput.value > 6) {
          let replacepassword = JSON.parse(
            localStorage.getItem(forgetform.forgetEmailInput.value)
          );
          replacepassword.password = forgetform.forgetpasswordinput.value;
          localStorage.setItem(
            replacepassword.email,
            JSON.stringify(replacepassword)
          );
          document.location.href = "todo.html";
          forgetform.forgetEmailInput.value = "";
        } else {
          errormessage.innerHTML = "use strong password";
        }
      } else {
        errortext.innerHTML = "password don't match";
      }
    } else {
      errortext.innerHTML = "hasn't registered yet";
    }
  } else {
    errortext.innerText = "please enter details";
  }
}
