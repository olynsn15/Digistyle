var firstIndex=0;
function automaticSlide(){
    setTimeout(automaticSlide, 2000);
    var pics;
    const image=document.querySelectorAll('.SLIDER-IMAGE');
    for(pics=0; pics<image.length;pics++){
        image[pics].style.display="none"
    }
    firstIndex++;
    if(firstIndex > image.length){
        firstIndex =1;
    }
    image[firstIndex -1].style.display="block";
}
automaticSlide();