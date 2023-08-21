var is_opened = false;
function menu(){
    var menu_btn = document.getElementById("btn");
    var navigation = document.querySelector("nav");
    if(is_opened){
        is_opened = !is_opened;
        navigation.style.display = "none";
        menu_btn.src = "./images/icon-hamburger.svg";    
    }else{
        is_opened = !is_opened;
        navigation.style.display = "block";
        menu_btn.src = "./images/icon-close.svg";
    }
}