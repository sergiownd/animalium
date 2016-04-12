var volume = true;

$(document).ready(function(){
    $(".muñeco").click(function(){
        $(".panel").css("display", "block");
        $(".bienvenido").css("display", "block");
    });
    $("#ayuda").click(function(){
        open('ayuda.html','','top=300,left=300,width=300,height=300') ; 

    });
    $("#salir").click(function(){
        open('salir.html','','top=300,left=300,width=300,height=300') ; 

    });
    $("#volumen-img").click(function () {
        if (volume == true){
            $(this).attr("src","../image/volume-off.png");
            volume = false;
        }
        else{
            $(this).attr("src","../image/volumen.png");
            volume = true;
        }
    });
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '../');
    audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    $.get();

    audioElement.addEventListener("load", function() {
        audioElement.Play();
    }, true);

    $('.play').click(function() {
        audioElement.Play();
    });
    
    $('.pause').click(function() {
        audioElement.Stop();
    });
});