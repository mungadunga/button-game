const $ = document.querySelector.bind(document);

let cash = 0;
let multi = 1;
let clicks = 0;

const refresh = () => {
   $("#cash").textContent = cash;
   $("#multi").textContent = multi;
   $("#clicks").textContent = clicks;
   $(".BoostersC-Booster1-cost").textContent = multi * 10;
}

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
   p.innerHTML = `+${multi}`;
   p.style.transform = `rotate(${randomNum}deg)`;
   div.appendChild(p);
   
   $(".ButtonC-popupContainer").appendChild(div);
});

$(".BoostersC-Booster1-button").addEventListener("click", e => {

   let cost = Number($(".BoostersC-Booster1-cost").textContent);
   if(cash < cost){
      alert("Not enough cash!");
   } else {
      cash -= cost;
      multi++;
      refresh();
   }
});
