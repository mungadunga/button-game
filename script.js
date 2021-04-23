import { nFormatter } from "./material.js";


const $ = document.querySelector.bind(document);

let cash = 0;
let multi = 1;
let clicks = 0;

$(".BoostersC-Booster1-cost").textContent = nFormatter(multi * 10);
$(".BoostersC-Booster2-cost").textContent = nFormatter(multi * 100);




// BOOSTERS
const refresh = () => {
   $("#cash").textContent = nFormatter(cash);
   $("#multi").textContent = nFormatter(multi);
   $("#clicks").textContent = nFormatter(clicks);
};

// main button onClick
$(".ButtonC-container-button").addEventListener("click", e => {
   // stats
   cash += multi;
   clicks++;
   refresh();
   // styles
   let randomNum = Math.random() * 45 - 24.5;
   const div = document.createElement("DIV");
   div.classList.add("ButtonC-popupDiv");

   const p = document.createElement("P");
   p.classList.add("ButtonC-popup");
   p.textContent = `+${multi}`;
   p.style.transform = `rotate(${randomNum}deg)`;
   div.appendChild(p);
   
   $(".ButtonC-popupContainer").appendChild(div);
   setTimeout(() => div.remove(), 500);
});

// BOOSTERS
export const cashCheck = (cost, doStuff) => {
   if(cash < cost) alert("Not enough cash!");
   else doStuff();
}

// +1 multiplier
$("#BoostersC-Booster1-button").addEventListener("click", e => {
   let cost = Number($(".BoostersC-Booster1-cost").textContent);
   function doStuff(){
      cash -= cost;
      multi++;
      $(".BoostersC-Booster1-cost").textContent = multi * 10;
      refresh();
   }
   cashCheck(cost, doStuff);
});

// x2 cash for 10 seconds
$("#BoostersC-Booster2-button").addEventListener("click", e => {
   let cost = Number($(".BoostersC-Booster2-cost").textContent);
   function doStuff(){
      cash -= cost;
      multi *= 2;
      setTimeout(() => {
         multi /= 2;
         refresh();
      }, 10000);
      $(".BoostersC-Booster2-cost").textContent = multi * 50;
      refresh();
   }
   cashCheck(cost, doStuff);
});

