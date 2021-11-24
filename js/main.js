function nextSlider(){
    const elSliderItem = document.querySelectorAll("#slider__item");
    for(let i = 0; i < elSliderItem.length - 1; i++){
        if(elSliderItem[i].style.transform == "translateX(0px)"){
            elSliderItem[i].style.transform = "translateX(1200px)";
            break;
        } 
    }
}

function previousSlider(){
    const elSliderItem = document.querySelectorAll("#slider__item");
    for(let i = elSliderItem.length - 1; i < elSliderItem.length; i--){
        if(elSliderItem[i].style.transform == "translateX(1200px)"){
            elSliderItem[i].style.transform = "translateX(0px)";
            break;
        } 
    }
}