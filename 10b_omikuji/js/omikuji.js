"use strict";
let n =-1 ;
let nBefore = -1;
window.addEventListener("DOMContentLoaded", function () {
    
    $("header").textillate({
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 2000,
        autoStart: true,
        in: {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: true
        }
    });

    ScrollReveal().reveal("#btn1", { duration: 9000 });


    setTimeout(function () {
        let popMessage = "いらっしゃい！おみくじ引いてって!";
        window.alert(popMessage);
    }, 5000);
});
    let SoundEndflag = "0"; 
    const btn1 = document.getElementById("btn1");
    const omikujiText = document.getElementById("omikujiText");
    const omikujiTextImage = document.getElementById("omikujiTextImage");

    btn1.addEventListener("click",
     function () {
    

    if (SoundEndflag === "1") {
        soundControl("end","");
    }

    

    let resultText = [
        "img/daikichi.png", 
        "img/chukichi.png", 
        "img/syokichi.png", 
        "img/suekichi.png", 
        "img/daikyo.png"
  
    ];
    
    let resultMaxSpeed = [10, 10, 8, 5, 5, 5];
    let resultMaxSize = [30, 30, 20, 15, 20, 20];
    let resultImage = [
        "img/star.png",
        "img/sakura_hanabira.png",
        "img/water1.png",
        "img/redleaves4.png",
        "img/snowflakes.png"
    ];
    let resultSound = [
        "sound/omikuji_sound1.mp3",
        "sound/omikuji_sound2.mp3",
        "sound/omikuji_sound3.mp3",
        "sound/omikuji_sound4.mp3",
        "sound/omikuji_sound5.mp3",
    ];
    //let n = Math.floor(Math.random() * resultText.length);

    while(n===nBefore){
    n = Math.floor(Math.random() * resultText.length);
   }
    nBefore =n;
    omikujiTextImage.src = resultText[n];
    omikujiTextImage.classList.add("omikujiPaper");

    omikujiTextImage.addEventListener("animationend",
       function(){
        omikujiTextImage.classList.remove("omikujiPaper");
       },false
    );

   

    let w_sound = resultSound[n];
    soundControl("start", w_sound);
    SoundEndflag = "1";
    
    $(document).snowfall("clear");

    $(document).ready(function(){

    $(document).snowfall({
        maxSpeed: resultMaxSpeed[n],
        minSpeed: 1,
        maxSize: resultMaxSize[n],
        minSize: 1,
        image: resultImage[n]
       });
     });
    },false
);
function soundControl(status, w_sound) {
    let music;
  
    if (status === "start") {
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
    } else if (status === "end") {
        if (music) {
            music.pause();
            music.currentTime = 0;
        }
    }
}
