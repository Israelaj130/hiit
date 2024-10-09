
const hmb =  document.getElementById("hamburger")
const navs =  document.getElementById("navs")
const sections = document.querySelectorAll("section")

function aminatMenu(){
    if(hmb.classList.contains("fa-bars")){
        openMen()
    }
    else{
        closeMenu()
    }
}
hmb.addEventListener("click", aminatMenu)


function changeSection(x){
    for (let i = 0; i < sections.length; i++){
        sections[i].classList.remove("showSection")/*  */
    }

    sections[x].classList.add("showSection")
    closeMenu()
}
function openMen(){
    hmb.classList.remove("fa-bars")
        hmb.classList.add("fa-xmark")
        navs.classList.add("show-ul")
        navs.classList.remove("hide-ul")
}

function closeMenu(){
    hmb.classList.add("fa-bars")
        hmb.classList.remove("fa-xmark")
        navs.classList.remove("show-ul")
        navs.classList.add("hide-ul")
} 
let 