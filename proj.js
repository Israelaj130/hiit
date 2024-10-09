const hmb = document.getElementById("hamburger")
const navs = document.getElementById("navs")
const sections = document.querySelectorAll("sections")
function toggleMenu(){
    if(hmb.classList.contains("solid lines")){
        openmenu()
    }
    else{
        closeMenu()
    }
}
hmb.addEventListener("click", toggleMenu)

function changeSections(){
    for(let i = 0; i < sections.length; i++){
        sections[i].classList.remove("showSection")
    }
    sections[x].classList.add("showSection")
    closeMenu()
}