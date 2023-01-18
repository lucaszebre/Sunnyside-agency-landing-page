window.onload = function(){
    const offcanvas = document.querySelector(".off-canvas");
    let show =false
    document.addEventListener('click',function(e){
        if(e.target.id==="hanburger" ){
            if(!show){
            offcanvas.style.display="flex";
            show=true;
            }
            else {
            offcanvas.style.display="none";
            show=false;}
        }
    })
}