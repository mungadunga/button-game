import { nFormatter, localSet, reverseFormat, styleEffect, cashCheck } from "./material.js";

// SETUP
const $ = document.querySelector.bind(document);

let cash = 0;
let multi = 1;
let clicks = 0;

if(localStorage.getItem("cash")) cash = Number(localStorage.getItem("cash"))
else localSet(cash, multi, clicks);
if(localStorage.getItem("multi")) multi = Number(localStorage.getItem("multi"))
else localSet(cash, multi, clicks);
if(localStorage.getItem("clicks")) clicks = Number(localStorage.getItem("clicks"))
else localSet(cash, multi, clicks);

$(".BoostersC-Booster1-cost").textContent = nFormatter(multi * 10);
$(".BoostersC-Booster2-cost").textContent = nFormatter(multi * 100);


// BOOSTERS
const refresh = () => {
   $("#cash").textContent = nFormatter(cash);
   $("#multi").textContent = nFormatter(multi);
   $("#clicks").textContent = nFormatter(clicks);
   localStorage.setItem("cash", cash);
   localStorage.setItem("multi", multi);
   localStorage.setItem("clicks", clicks);
};

// main button
$(".ButtonC-container-button").addEventListener("click", e => {
   // math
   cash += multi;
   clicks++;
   refresh();
   // styles
   let randomNum = Math.random() * 45 - 24.5;
   const div = document.createElement("DIV");
   div.classList.add("ButtonC-popupDiv");
   // popup onclick
   const p = document.createElement("P");
   p.classList.add("ButtonC-popup");
   p.textContent = `+${nFormatter(multi)}`;
   p.style.transform = `rotate(${randomNum}deg)`;
   div.appendChild(p);
   // delete div after 500ms
   $(".ButtonC-popupContainer").appendChild(div);
   setTimeout(() => div.remove(), 500);
});

// BOOSTERS

// +1 multiplier booster
$("#BoostersC-Booster1-button").addEventListener("click", e => {
   let cost = reverseFormat($(".BoostersC-Booster1-cost").textContent);
   const doStuff = () => {
      // math and displaying abreviated num 
      cash -= cost;
      multi++;
      $(".BoostersC-Booster1-cost").textContent = nFormatter(multi * 10);
      // style effect
      // $("#BoostersC-Booster1").style.borderLeft = "10px solid green";
      // setTimeout(() => $("#BoostersC-Booster1").style.borderLeft = "5px solid green", 100);
      styleEffect("#BoostersC-Booster1");
      // refresh
      refresh();
   }
   cashCheck(cash, cost, doStuff);
});

// x2 cash for 10 seconds booster
$("#BoostersC-Booster2-button").addEventListener("click", e => {
   let cost = reverseFormat($(".BoostersC-Booster2-cost").textContent);
   const doStuff = () => {
      cash -= cost;
      multi *= 2;
      setTimeout(() => {
         multi /= 2;
         refresh();
      }, 10000);
      $(".BoostersC-Booster2-cost").textContent = nFormatter(multi * 50);
      refresh();
   }
   cashCheck(cash, cost, doStuff);
   // style effect
   styleEffect("#BoostersC-Booster2");
});



