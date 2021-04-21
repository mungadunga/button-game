/// <reference path="./interfaces.d.ts" /> 
class Stats extends React.Component {
    render() {
        return (React.createElement("div", { className: "Stats" },
            React.createElement("p", { className: "Stats-stat" },
                "Cash: ",
                React.createElement("span", { className: "Stats-stat-num", id: "cash" }, "0")),
            React.createElement("p", { className: "Stats-stat" },
                "Clicks: ",
                React.createElement("span", { className: "Stats-stat-num", id: "clicks" }, "0")),
            React.createElement("p", { className: "Stats-stat" },
                "Multiplier: ",
                React.createElement("span", { className: "Stats-stat-num", id: "multi" }, "0"))));
    }
}
class Button extends React.Component {
    render() {
        return (React.createElement("div", { className: "ButtonC" },
            React.createElement("div", { className: "ButtonC-container" },
                React.createElement("div", { className: "ButtonC-popupContainer" }),
                React.createElement("br", null),
                React.createElement("h1", { className: "ButtonC-container-title" }, "Button Clicker Game"),
                React.createElement("button", { className: "ButtonC-container-button" }, "Click me!"))));
    }
}
// BOOSTERS
class Boosters extends React.Component {
    render() {
        return (React.createElement("div", { className: "BoostersC" },
            React.createElement("div", { className: "BoostersC-container" },
                React.createElement("h1", { className: "BoostersC-title" }, "Boosters"),
                React.createElement(Booster1, null))));
    }
}
class Booster1 extends React.Component {
    render() {
        return (React.createElement("div", { className: "BoostersC-Booster1" },
            React.createElement("h1", { className: "BoostersC-Booster1-cat" }, "+1 multiplier"),
            React.createElement("p", { className: "BoostersC-Booster1-cat" },
                "Cost: ",
                React.createElement("span", { className: "BoostersC-Booster1-cost" }, "100"),
                " cash"),
            React.createElement("button", { className: "BoostersC-Booster1-button BoostersC-Booster1-cat" }, "Buy")));
    }
}
// SHOP
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.stats = {
            cash: 0,
            clicks: 0,
            multiplier: 1
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Stats, null),
            React.createElement(Button, null),
            React.createElement(Boosters, null)));
    }
}
ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));
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
