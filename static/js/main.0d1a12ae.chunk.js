(window["webpackJsonpreact-todo"]=window["webpackJsonpreact-todo"]||[]).push([[0],{10:function(e,t,r){"use strict";r.r(t);var a=r(8),n=r(1),s=r(2),o=r(4),c=r(3),u=r(5),i=r(0),l=r.n(i),m=r(7),h=r.n(m);r(15),r(16);function d(e){return l.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var b=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),l.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),l.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(l.a.Component),v=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},r}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();p(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,moveLocation:f(e)}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],n=(r[this.state.stepNumber],r[this.state.stepNumber-1],p(a.squares)),s=-1===a.squares.indexOf(null),o=r.map(function(e,r){var a=r?"Go to move #"+r+" - ("+t.state.moveLocation+")":"Go to game start";return l.a.createElement("li",{key:r},l.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},a))});return e=n?"Winner: "+n:s?"Result: Draw!":"Next player: "+(this.state.xIsNext?"X":"O"),l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(b,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null,e),l.a.createElement("ol",null,o)))}}]),t}(l.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(a.a)(t[r],3),s=n[0],o=n[1],c=n[2];if(e[s]&&e[s]===e[o]&&e[s]===e[c])return e[s]}return null}function f(e){switch(e){case 0:return"col 1, row 1";case 1:return"col 2, row 1";case 2:return"col 3, row 1";case 3:return"col 1, row 2";case 4:return"col 2, row 2";case 5:return"col 3, row 2";case 6:return"col 1, row 3";case 7:return"col 2, row 3";case 8:return"col 3, row 3";default:console.log("What are you?! This is impossible!")}}h.a.render(l.a.createElement(v,null),document.getElementById("root"))},15:function(e,t,r){},9:function(e,t,r){e.exports=r(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.0d1a12ae.chunk.js.map