let sliderIndex = 1;
slider(sliderIndex);

function moveRight(n){
    slider(sliderIndex +=n);
}
function moveLeft(n){
    slider(sliderIndex -=n);
}
function currentSlide(n){
    slider(sliderIndex=n);
}
function slider(n){
    
    let sliders=document.querySelectorAll(".slider");
    let dots=document.querySelectorAll(".dot");
    console.log(dots);

    if(n>sliders.length){
        sliderIndex = 1;
    }

    if(n <1){
        sliderIndex =sliders.length;
    }

    let i; 
     // hidding
    for(i =0 ; i <sliders.length ; i++ ){
      sliders[i].style.display = "none";
    }
    for(i=0;i<dots.length ; i++){
        dots[i].className.replace("active","");
    }

    // showing
    sliders[sliderIndex-1].style.display = "flex";
    dots[sliderIndex-1].classList.add("active");  
}

function rand(){
    // automatic slide show
    sliderIndex = sliderIndex+1;
    slider(sliderIndex);   
}
setInterval(rand, 4000);


