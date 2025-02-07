"use strict";

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

const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");

btn1.addEventListener("click", function () {
    let SoundEndflag = "0"; 

    if (SoundEndflag !== "1") {
        soundControl("end");
    }

    btn1.style.transition = "1s";

    let resultText = ["大吉!!!!!", "吉!!!!", "中吉!!!", "小吉!!", "末吉!", "凶.."];
    let resultColor = ["#ff0000", "#c71585", "#ff1493", "#ff69b4", "#ff8c00", "#1e90ff"];
    let resultFontsize = ["90px", "80px", "70px", "60px", "50px", "40px"];
    let resultMaxSpeed = [10, 10, 8, 5, 5, 5];
    let resultMaxSize = [30, 30, 20, 15, 20, 20];
    let resultImage = [
        "img/star.png",
        "img/sakura_hanabira.png",
        "img/sakura_hanabira.png",
        "img/sakura_hanabira.png",
        "img/leaf.png",
        "img/snowflakes.png"
    ];
    let resultSound = [
        "sound/omikuji_sound1.mp3",
        "sound/omikuji_sound2.mp3",
        "sound/omikuji_sound2.mp3",
        "sound/omikuji_sound2.mp3",
        "sound/omikuji_sound2.mp3",
        "sound/omikuji_sound3.mp3",
    ];
    let n = Math.floor(Math.random() * resultText.length);

   
    omikujiText.textContent = resultText[n];
    omikujiText.style.color = resultColor[n];
    omikujiText.style.fontSize = resultFontsize[n];

    let w_sound = resultSound[n];
    soundControl("start", w_sound);
    SoundEndflag = "1";
    
    $(document).snowfall("clear");

    
    $(document).snowfall({
        maxSpeed: resultMaxSpeed[n],
        minSpeed: 1,
        maxSize: resultMaxSize[n],
        minSize: 1,
        image: resultImage[n]
    });

  
});

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
