"use strict";

window.addEventListener("DOMContentLoaded",
function(){
    //ページ本体が読み込まれたタイミングで実行するコード
     const item = document.querySelectorAll(".item");
     item.forEach(function(element, index){
        //0.2秒ずつずれて表示
         setTimeout(function(){
            element.classList.add("fade-in");
         },200 * index);
     });
},false
);