function nextSlider(){
    const elSliderItem = document.querySelectorAll("#slider__item");
    const elSliderText = document.querySelector("#slider__desc");
    for(let i = 0; i < elSliderItem.length - 1; i++){
        if(elSliderItem[i].style.transform == "translateX(0px)"){
            elSliderItem[i].style.transform = "translateX(100%)";
            break;
        } 
        else if(elSliderItem[i - 1]){
            elSliderItem[i].style.transform = "translateX(0px)";
            elSliderItem[i - 1].style.transform = "translateX(0px)";
        }
    } 
}

function previousSlider(){
    const elSliderItem = document.querySelectorAll("#slider__item");
    for(let i = elSliderItem.length - 1; i < elSliderItem.length; i--){
        if(elSliderItem[i].style.transform == "translateX(100%)"){
            elSliderItem[i].style.transform = "translateX(0)";
            break;
        }
    }
}