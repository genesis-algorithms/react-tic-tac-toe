(window["webpackJsonpreact-todo"]=window["webpackJsonpreact-todo"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(7),o=r.n(s),i=r(8),c=r(1),u=r(2),l=r(4),d=r(3),m=r(5);function h(e){return a.a.createElement("button",{className:e.winner,onClick:e.onClick},e.value)}var v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"renderSquare",value:function(e){var t=this,r="square";return this.props.winner1!==e&&this.props.winner2!==e&&this.props.winner3!==e||(r="square winner"),a.a.createElement(h,{winner:r,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"buildRow",value:function(e){for(var t=[],r=e;r<e+3;r++)t.push(this.renderSquare(r));return t}},{key:"renderBoard",value:function(){for(var e=[],t=0;t<9;t+=3)e.push(a.a.createElement("div",{className:"board-row"},this.buildRow(t)));return e}},{key:"render",value:function(){return a.a.createElement("div",null,this.renderBoard())}}]),t}(a.a.Component),f=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],order:"ascending",stepNumber:0,xIsNext:!0,moveLocation:[]},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();if(!p(r)&&!r[e]){r[e]=this.state.xIsNext?"X":"O";var n=this.state.moveLocation.slice();this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,moveLocation:n.concat(w(e))})}}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"toggleOrder",value:function(){"ascending"===this.state.order?this.setState({order:"descending"}):this.setState({order:"ascending"})}},{key:"renderMoves",value:function(e){return"ascending"===this.state.order?a.a.createElement("ol",null,e):a.a.createElement("ol",{reversed:!0},Array.from(e).reverse())}},{key:"render",value:function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],s=p(n.squares),o=-1===n.squares.indexOf(null),i=r.map(function(e,r){var n=r?"Go to move #"+r+" ("+t.state.moveLocation[r-1]+")":"Go to game start";return a.a.createElement("li",{key:r},a.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},r===t.state.stepNumber?a.a.createElement("b",null,n):n))}),c="",u="",l="";return s?(e="Winner: "+s[0],c=s[1],u=s[2],l=s[3]):e=o?"Result: Draw!":"Next player: "+(this.state.xIsNext?"X":"O"),a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-board"},a.a.createElement(v,{squares:n.squares,onClick:function(e){return t.handleClick(e)},winner1:c,winner2:u,winner3:l})),a.a.createElement("div",{className:"game-info"},a.a.createElement("div",null,e),a.a.createElement("button",{className:"toggle-order",onClick:function(){return t.toggleOrder(i)}},"Toggle Order"),this.renderMoves(i)))}}]),t}(a.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(i.a)(t[r],3),a=n[0],s=n[1],o=n[2];if(e[a]&&e[a]===e[s]&&e[a]===e[o])return[e[a],a,s,o]}return null}function w(e){switch(e){case 0:return"col 1, row 1";case 1:return"col 2, row 1";case 2:return"col 3, row 1";case 3:return"col 1, row 2";case 4:return"col 2, row 2";case 5:return"col 3, row 2";case 6:return"col 1, row 3";case 7:return"col 2, row 3";case 8:return"col 3, row 3";default:console.log("What are you?! This is impossible!")}}r(14);o.a.render(a.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,r){e.exports=r(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.cf2e370f.chunk.js.map