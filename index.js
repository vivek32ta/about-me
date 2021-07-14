var width = $(window).width(); 

var myDate = new Date();
var hrs = myDate.getHours();
var greet = "good day";

if (hrs < 12)
    greet = 'good morning';
else if (hrs >= 12 && hrs < 16)
    greet = 'good afternoon';
else if (hrs >= 16 && hrs <= 24)
    greet = 'good evening';

document.getElementById('greeting').innerHTML = greet + '.';

console.log('%cUm, Dr. Schrodinger? I opened the box, and, well…','font-size:1.5rem; font-weight: bold');

document.addEventListener('visibilitychange', function(){
    if(document.hidden)
    {
        document.title = "Come backk :(";
    }
    else {
        document.title = "Oddity";
    }
})

if(width < 400) {
    $("#greeting-typer").attr("data-words","      ,hi.,how are you?,have we met?");
    $("#about h1").css("font-size","36px");
} else {
    $("#greeting-typer").attr("data-words","      ,hi.,how are you?,have we met yet?");
    $("#about h1").css("font-size","45px");

}

window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");

        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
else {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 180) {
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.5)");
    }
    else{
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
    }
}
}

$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(500);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(500);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                      // Scroll to top of body
    }, 1800);
});

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
            scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });


  