let fn = document.getElementById("fn");
let ln = document.getElementById("ln");
let un = document.getElementById("un");
let pd = document.getElementById("pd");
let btn = document.querySelector("button");
let form = document.querySelector("form");

form.addEventListener("submit", e => {
    let v1=fn.value;
    let v2=ln.value;
    let v3=un.value;
    let v4=pd.value;
    e.preventDefault();
    if (v1=="" || v2=="" || v3=="" || v4==""){
        alert("All Fields are Mandatory");
        open("#", target = "_self");
    }
    else {
        alert("Please Login to Access Your Account")
        localStorage.setItem("FirstName", v1);
        localStorage.setItem("LastName", v2);
        localStorage.setItem("UserName", v3);
        localStorage.setItem("Password", v4);
        open("./Login.html",target="_self");
    }
})