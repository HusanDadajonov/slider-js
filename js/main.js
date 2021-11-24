function nextSlider(){
    const elSliderItem = document.querySelectorAll("#slider__item");
    for(let i = 0; i < elSliderItem.length - 1; i++){
        if(elSliderItem[i].style.transform == "translateX(0px)"){
            elSliderItem[i].style.transform = "translateX(100%)";
            break;
        } 
        else if(elSliderItem[i - 1]){
           console.log("awdaw");
        }
    } 
}

function previousSlider(){
    const elSliderItem = document.querySelectorAll("#slider__item");
    for(let i = elSliderItem.length - 1; i < elSliderItem.length; i--){
        if(elSliderItem[i].style.transform == "translateX(100%)"){
            elSliderItem[i].style.transform = "translateX(0px)";
            break;
        } 
    }
}