export const nFormatter = (num, fixed) => {
   if (num === null) { return null; } // terminate early
   if (num === 0) { return '0'; } // terminate early
   fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
   let b = (num).toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
      c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), // divide by power
      d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
      e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
   return e;
}

export const reverseFormat = num => {
   let obj = {
      "K": 1000,
      "M": 1000000,
      "B": 1000000000,
      "T": 1000000000000,
   }

   let state;
   [...num].forEach(e => e.match(/K|M|B|T/gi) ? state = true : state = false);
   return obj[[...num].pop()] * Number([...num].slice(0, [...num].length - 1).join(""));
}

export const localSet = () => {
   cash = 0;
   multi = 1;
   clicks = 0;
}

export const styleEffect = selec => {
   document.querySelector(selec).style.borderLeft = "10px solid green";
   setTimeout(() => document.querySelector(selec).style.borderLeft = "5px solid green", 100);
}

export const cashCheck = (cash, cost, doStuff) => {
   if(cash < cost) alert("Not enough cash!")
   else doStuff();
}