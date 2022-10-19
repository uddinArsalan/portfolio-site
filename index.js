const dark = document.querySelector(".dark");
const iconCont = document.querySelector(".socialMedia");

function darkMode(){
    document.body.classList.toggle("bg-gray-500")
    console.log(dark.src == "img and logo/moon.png")
    console.log(dark.src)
    console.log(dark.src == "img and logo/icons8-sun.gif")
    if(dark.src == "http://127.0.0.1:5500/public/my%20website/img%20and%20logo/moon.png"){
        dark.src = "img and logo/icons8-sun.gif"
        dark.classList.add("bg-gray-500")
        iconCont.classList.remove("bg-gray-500")
        iconCont.classList.add("bg-orange-400");
        // console.log(iconCont.classList)
    }
    else if(dark.src == "http://127.0.0.1:5500/public/my%20website/img%20and%20logo/icons8-sun.gif"){
        dark.src = "img and logo/moon.png";
        dark.classList.remove("bg-gray-500")
        // iconCont.classList.remove("bg-orange-400")
    }
}

dark.addEventListener("click",darkMode)