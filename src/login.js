let verify = document.getElementById("verify");
let btn=document.querySelector("button")
let form = document.querySelector("form");
let pd = document.getElementById("pd");
let vis=document.getElementById("vis")

verify.addEventListener("click", e => {

    let tog = btn.classList.toggle("active");
    if (tog) {
        btn.removeAttribute("disabled");
        btn.style.background = " rgb(27, 26, 26)";
        btn.style.color = "white";
    }
    else {
        btn.setAttribute("disabled","");
        btn.style.background = "#ebebeb repeating-linear-gradient(45deg, #ebebeb, #ebebeb 2px, #f2f2f2 2px, #f2f2f2 8px)";
        btn.style.color = "black";
    }
})
  vis.addEventListener("click", e => {
    let tog1 = vis.classList.toggle("active");
    if (tog1) {
      vis.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
      pd.setAttribute("type", "text");
    } else {
      vis.innerHTML = `<i class="fa-solid fa-eye"></i>`;
      pd.setAttribute("type", "password");
    }
  });

let v1 = localStorage.getItem("UserName");
let v2 = localStorage.getItem("Password");
let un = document.getElementById("un");

form.addEventListener("submit", e => {
    e.preventDefault();
    let vn = un.value;
    let vp = pd.value;
    console.log(vn, vp);
    if (vn == "") {
      alert("Enter User Name Field Cannot be empty");
    } else if (vp == "") {
      alert("Enter Password Field Cannot be empty");
    } else if (vp.length < 4) {
      alert("Password Should Be Minimum 4 Characters");
    } else if (vn != v1) {
      alert("Invalid User Name");
    } else if (vp != v2) {
      alert("Invalid Password");
    }
    else{
      alert("Logged in Successfully");
      open("./index.html", target = "_self")
      sessionStorage.setItem("msg","done")
    }
})