'use strict';

window.addEventListener('DOMContentLoaded',
  function() {
    // ページ本体が読み込まれたタイミングで実行するコード

    // -------------------------------------------------------------------------------- 
    // ボタン１ クリック（演算の結果確認）
    // -------------------------------------------------------------------------------- 
    {
      let btn1 = document.getElementById('btn1');
      btn1.addEventListener('click', function() {
        /*******************************************************/
        // １．代入演算子
        /*******************************************************/
        var continent = "Europe";
        console.log("var continent ➡" + continent);

        /*******************************************************/
        // ２．算術演算子
        /*******************************************************/
          // ■加算（足し算）：Addition
          var x = 2 + 2;
          console.log("var x = 2 + 2;" + " ➡ " + x);
          
          //  ■減算（引き算）：Subtraction
          var x = 10 - 7; 
          console.log("var x = 10 - 7;" + " ➡ " + x);
          
          //  ■乗算（掛け算）：Multiplication
          var x = 4 * 5; 
          console.log("var x = 4 * 5;" + " ➡ " + x);
          
          //  ■除算（割り算）：Division
          var x = 20 / 2;
          console.log("var x = 20 / 2;" + " ➡ " + x);
          
          // ■剰余（余り）：Modulus
          var x = 10 % 3;
          console.log("var x = 10 % 3;" + " ➡ " + x);
          
          // ■インクリメント演算子：Increment
          var x = 10;
          var y = x++;
          console.log("var y = x++;" + " ➡ " + y);
          
          var x = 10;
          var y = ++x;
          console.log("var y = ++x;" + " ➡ " + y);
          
          // ■デクリメント演算子：Decrement
          var x = 10;
          var y = x--;
          console.log("var y = x--;" + " ➡ " + y);
          
          var x = 10;
          var y = --x;
          console.log("var y = --x;" + " ➡ " + y);

        /*******************************************************/
        // ３．比較演算子
        /*******************************************************/
          // ■等価演算子：Equal
          var x = 8; //数値
          var y = 8; //数値
          if(x == y) {
            console.log("x == y" + " ➡ " + "true");
          } else{
            console.log("x == y" + " ➡ " + "false");
          }

          var x = 8; //数値
          var y = "8"; //文字
          if(x == y) {
            console.log("x == y" + " ➡ " + "true");
          } else{
            console.log("x == y" + " ➡ " + "false");
          }

          // ■厳密等価演算子：Strict Equal
          var x = 8; //数値
          var y = 8; //数値
          if(x === y) {
            console.log("x === y" + " ➡ " + "true");
          } else{
            console.log("x === y" + " ➡ " + "false");
          }

          var x = 8; //数値
          var y = "8"; //文字
          if(x === y) {
            console.log("x === y" + " ➡ " + "true");
          } else{
            console.log("x === y" + " ➡ " + "false");
          }

          // ■不等価演算子：Not Equal
          var x = 50; //数値
          var y = 50; //数値
          if(x != y) {
            console.log("x != y" + " ➡ " + "true");
          } else{
            console.log("x != y" + " ➡ " + "false");
          }

          var x = 50; //数値
          var y = "50"; //文字
          if(x != y) {
            console.log("x != y" + " ➡ " + "true");
          } else{
            console.log("x != y" + " ➡ " + "false");
          }

          // ■厳密不等価演算子：Strict Not Equal
          var x = 50; //数値
          var y = 50; //数値
          if(x !== y) {
            console.log("x !== y" + " ➡ " + "true");
          } else{
            console.log("x !== y" + " ➡ " + "false");
          }

          var x = 50; //数値
          var y = "50"; //文字
          if(x !== y) {
            console.log("x !== y" + " ➡ " + "true");
          } else{
            console.log("x !== y" + " ➡ " + "false");
          }

          // ■小なり演算子（より少ない）：Less Than
          var x = 99;
          var y = 100;
          if(x < y) {
            console.log("x < y" + " ➡ " + "true");
          } else{
            console.log("x < y" + " ➡ " + "false");
          }

          // ■小なりイコール演算子（より小さいまたは等しい）：Less Than or Equal To
          var x = 100;
          var y = 100;
          if(x <= y) {
            console.log("x <= y" + " ➡ " + "true");
          } else{
            console.log("x <= y" + " ➡ " + "false");
          }

          // ■大なり演算子（より大きい）：Greater Than
          var x = 99;
          var y = 100;
          if(x > y) {
            console.log("x > y" + " ➡ " + "true");
          } else{
            console.log("x > y" + " ➡ " + "false");
          }

          // ■大なりイコール演算子（より大きいまたは等しい：Greater Than or Equal To）
          var x = 100;
          var y = 100;
          if(x >= y) {
            console.log("x >= y" + " ➡ " + "true");
          } else{
            console.log("x >= y" + " ➡ " + "false");
          }

        /*******************************************************/
        // ４．論理演算子
        /*******************************************************/
          // ■And演算子
          var x = 5;
          if(x > 1 && x < 10) {
            console.log("x > 1 && x < 10" + " ➡ " + "true");
          } else{
            console.log("x > 1 && x < 10" + " ➡ " + "false");
          }

          var test1 = 50;
          var test2 = 80;
          if(test1>=60 && test2>=60){
              console.log("合格です！＼(^o^)／");
                  //test1が60点以上、かつtest2も60点以上のとき、「合格」を表示する。
          }else{
              console.log("残念！不合格です。( ﾟДﾟ)");
                  //ifの条件に当てはまらない時に「不合格」を表示する。
          }

          // ■Or演算子
          var test1 = 50;
          var test2 = 85;
          if(test1>=85 || test2>=85){
              console.log("合格です！＼(^o^)／");
                  //test1が85点以上、またはtest2が85点以上のとき、「合格」を表示する。
          }else{
              console.log("残念！不合格です。( ﾟДﾟ)");
                  //ifの条件に当てはまらない時に「不合格」を表示する。
          }

          // ■Not演算子
          var teacher = true ; // 先生の場合はtrueを入れる。
          if (!teacher){
              console.log("あなたの学生番号はなんですか？");
                  //もし先生ではないときに出力する
          }else{
              console.log("あなたは先生です。");
          }

        /*******************************************************/
        // ５．演算子の優先順位(priority)
        /*******************************************************/
        var x = 15 - 5 * 10;

        var x = (15 - 5) * 10;
        
        /*******************************************************/
        // ６．条件文
        /*******************************************************/
          // If／Else文は３、４を参照

          // Switch文
          var n = 1;
    
          switch (n) {
            case 0:
              console.log("Very Happy!!!!!");
              break;
            case 1:
              console.log("Happy!!!");
              break;
            case 2:
              console.log("Funny!");
              break;
            case 3:
              console.log("sad..");
              break;
            case 4:
              console.log("Bad.....");
              break;
          }

      }, false);
    }
    // -------------------------------------------------------------------------------- 
    // ボタン２ クリック（関数の結果確認）
    // -------------------------------------------------------------------------------- 
    {
      let btn2 = document.getElementById('btn2');
      btn2.addEventListener('click', () => {
        /*******************************************************/
        // ７．関数
        /*******************************************************/
          // 宣言：Declaration
          function greeting() {
            return "Hello, World!";
          }

          // 関数の呼び出し
          var message = greeting();
          console.log(message);

        // --------------

          // 仮引数（parameter）と実引数（argument）
          function addTwoNumbers(x, y) {
            return x + y;
          }
          // 関数の呼び出し
          var answer = addTwoNumbers(7, 3);
          console.log(answer);

          // 関数の呼び出し
          var answer = addTwoNumbers(100, 5);
          console.log(answer);


      }, false);
    }

  }, false
);
