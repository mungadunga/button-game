/// <reference path="./interfaces.d.ts" /> 

class Stats extends React.Component {
   constructor(props){
      super(props);
   }
   render() {
      return (
         <div className="Stats">
            <p className="Stats-stat">Cash: <span className="Stats-stat-num" id="cash">0</span></p>
            <p className="Stats-stat">Clicks: <span className="Stats-stat-num" id="clicks">0</span></p>
            <p className="Stats-stat">Multiplier: <span className="Stats-stat-num" id="multi">0</span></p>
         </div>
      )
   }
}

class Button extends React.Component {
   constructor(props){
      super(props);
   }
   render() {
      return (
         <div className="ButtonC">
            <div className="ButtonC-container">
               <div className="ButtonC-popupContainer"></div>
               <br/>
               <h1 className="ButtonC-container-title">Button Clicker Game</h1>
               <button className="ButtonC-container-button">Click me!</button>
            </div>
         </div>
      )
   }
}

// BOOSTERS

class Boosters extends React.Component {
   constructor(props){
      super(props);
   }
   render(){
      return (
         <div className="BoostersC">
            <div className="BoostersC-container">
               <h1 className="BoostersC-title">Boosters</h1>
               <div>
                  <Booster1 />
                  <Booster2 />
               </div>
            </div>
         </div>
      )
   }
}

class Booster1 extends React.Component{
   constructor(props){
      super(props);
   }
   render(){
      return (
         <div className="BoostersC-Booster" id="BoostersC-Booster1">
            <h1 className="BoostersC-Booster-cat" id="BoostersC-Booster1-cat">+1 multiplier</h1>
            <p className="BoostersC-Booster-cat" id="BoostersC-Booster1-cat">Cost: <span className="BoostersC-Booster1-cost">100</span> cash</p>
            <button className="BoostersC-Booster-button BoostersC-Booster-cat BoostersC-Booster1-cat" id="BoostersC-Booster1-button">Buy</button>
         </div>
      )
   }
}

class Booster2 extends React.Component {
   constructor(props){
      super(props);
   }
   render() {
      return (
         <div className="BoostersC-Booster" id="BoostersC-Booster2">
            <h1 className="BoostersC-Booster-cat" id="BoostersC-Booster2-cat">x2 cash for 10 seconds</h1>
            <p className="BoostersC-Booster-cat" id="BoostersC-Booster2-cat">Cost: <span className="BoostersC-Booster2-cost">100</span> cash</p>
            <button className="BoostersC-Booster-button BoostersC-Booster-cat BoostersC-Booster2-cat" id="BoostersC-Booster2-button">Buy</button>
         </div>
      )
   }
}

// SHOP
      
class App extends React.Component {
   stats: statsInterface = {
      cash: 0,
      clicks: 0,
      multiplier: 1
   }
   render() {
      return (
         <div>
            <Stats />
            <Button />
            <Boosters />
         </div>
      )
   }
}

ReactDOM.render(<App />, document.querySelector("#root"));













// class App extends React.Component {

//    private stats: statsInterface = {
//       cash: 0,
//       clicks: 0,
//       multiplier: 1
//    }


//    private click(){
//       this.stats.cash += this.stats.multiplier;
//       this.stats.clicks++;
//       console.log([this.stats.cash, this.stats.clicks])
//    }

//    public refresh(){
//    }

//    render() {
//       return (
//          <div>
//             <button className='mainButton' onClick={this.click}></button>
//          </div>
//       )
//    }
// }