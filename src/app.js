let feat = document.getElementById("feat");
let arrow=document.querySelector("#feat span")
let dd = document.getElementById("dd-1");
let down = `<i class="fa-solid fa-chevron-down"></i>`;
let up = `<i class="fa-solid fa-chevron-up"></i>`;
let lang = document.getElementById("lang");
feat.addEventListener("mouseenter", e => {
  dd.style.visibility = "visible";
  arrow.innerHTML = up;
  dd.style.transitionDelay = "none";
});
dd.addEventListener("mouseenter", e => {
  dd.style.visibility = "visible";
  arrow.innerHTML = up;
  dd.style.transitionDelay = "none";
});
feat.addEventListener("mouseleave", e => {
  dd.style.visibility = "hidden";
  arrow.innerHTML = down;
  dd.style.transitionDelay = "none";
});
dd.addEventListener("mouseleave", e => {
  dd.style.visibility = "hidden";
  arrow.innerHTML = down;
  dd.style.transitionDelay = "none";
});

let p = async () => {
    let data = await window.fetch("./languages.json");
    let final = await data.json();
    final.forEach(e => {
        lang.innerHTML += `<option>${e.name}</option>`;
    });
}
p()

tc = document.getElementById("tc");
tc1 = document.getElementById("tc1");
tc2 = document.getElementById("tc2");
tc3 = document.getElementById("tc3");
tc4 = document.getElementById("tc4");

show = () => {
    tc.style.display = "none";
}
hide = () => {
    tc.style.display = "block";
}
show1 = () => {
  tc1.style.display = "none";
};
hide1 = () => {
  tc1.style.display = "block";
};
show2 = () => {
  tc2.style.display = "none";
};
hide2 = () => {
  tc2.style.display = "block";
};
show3 = () => {
  tc3.style.display = "none";
};
hide3 = () => {
  tc3.style.display = "block";
};
show4 = () => {
  tc4.style.display = "none";
};
hide4 = () => {
  tc4.style.display = "block";
};

//! Login Functions
