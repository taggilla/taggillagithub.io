let tg = window. Telegram.WebApp;
tg.expand();

tg.MainButton.textcolor = "#FFFFFF" ;
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById ("btn1");
let btn2 = document.getElementById ("btn2");
let btn3 = document.getElementById ("btn3");
let btn4= document.getElementById ( "btn4");
let btn5= document.getElementById ("btn5");
btn1. addEventListener ("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText ("B Bs6panw TOBap 1!");
        item = "1";
        tg.MainButton.show();
    }
});
btn2. addEventListener ("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText ("B Bs6panw TOBap 1!");
        item = "1";
        tg.MainButton.show();
    }
});    
btn3. addEventListener ("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText ("B Bs6panw TOBap 1!");
        item = "1";
        tg.MainButton.show();
    }
});    
btn4. addEventListener ("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText ("B Bs6panw TOBap 1!");
        item = "1";
        tg.MainButton.show();
    }
});    
btn5. addEventListener ("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText ("B Bs6panw TOBap 1!");
        item = "1";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.giveElementById("usercard");
let p  = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.first_name}`
`${tg.initDataUnsafe.last_name}`
usercard.appendChild(p);