var volume = true;

$(document).ready(function(){
    $("#volumen-img").click(function () {
        if (volume == true){
            $(this).attr("src","../image/volume-off.png");
            volume = false;
        }
        else{
            $(this).attr("src","../image/volumen.png");
            volume = true;
        }
        console.log(volume);
    });
    $(".muñeco").click(function(){
        $(".panel").css("display", "block");
        $(".bienvenido").css("display", "block");
        
        if (volume == true){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', '../juegos/Cartoon_Winning_Sound_Effect.mp3');
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
        }
    });
    $(".muñeco2").click(function(){
        $(".panel").css("display", "block");
        $(".bienvenido").css("display", "block");
        
        if (volume == true){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', '../juegos/Cartoon_Winning_Sound_Effect.mp3');
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
        }
    });
    $("#ayuda").click(function(){
        open('ayuda.html','','top=300,left=300,width=300,height=300') ; 

    });
    $("#salir").click(function(){
        open('salir.html','','top=300,left=300,width=300,height=300') ; 

    });
    
    $("#entra").click(function(){
        if($("#imput-n").val() === "usuario"){
            if ($("#imput-a").val() === "1234"){
                $("#entra").attr('href', './menu.html');
            }
        }
        else{
            $(".error").css("display","block");
        }
    });
    
});