(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1rzR":function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var l=r(a("wCAj"));a("+L6B");var u=r(a("2/Rp"));a("7Kak");var d=r(a("9yH6"));a("5NDa");var o=r(a("5rEg"));a("y8nQ");var i=r(a("Vl3Y"));a("jCWc");var c=r(a("kPKH"));a("14J3");var f=r(a("BMrR")),s=r(a("eHn4")),p=r(a("p0pE")),g=r(a("gWZ8")),m=r(a("qIgq"));a("OaEy");var v=r(a("2fM7")),y=n(a("q1tI")),E=a("1DmO"),T=a("/DO0"),M=a("c+yx"),N=r(a("6eue")),R=v.default.Option,k=function(e){var t=e.isEditing,a=e.parent,n=e.onAddTreeNode,r=e.onEditTreeNode,k=(0,y.useState)({title:{value:t?a.title:"",validateStatus:"",errorMsg:""},actions:{value:t&&a.actions?(0,g.default)(a.actions):[],validateStatus:"",errorMsg:""},ranges:{value:t?(0,p.default)({},a.ranges):{},validateStatus:"",errorMsg:""}}),b=(0,m.default)(k,2),h=b[0],x=b[1],C=[];for(var S in E.PreFlopRangeTypes)C.push(y.default.createElement(R,{key:S},S));var O=function(e){var t=e.target.value;x((0,p.default)({},h,{title:(0,p.default)({},h.title,{value:t})}))},_=function(e,t){x((0,p.default)({},h,{ranges:(0,p.default)({},h.ranges,(0,s.default)({},t,e))}))},w=function(e){x((0,p.default)({},h,{actions:(0,p.default)({},h.actions,{value:(0,g.default)(e)})}))},I=function(e){t?r&&r((0,p.default)({},a,{title:h.title.value,ranges:(0,p.default)({},h.ranges.value),actions:(0,g.default)(h.actions.value)})):n&&(n(a,{key:(0,M.genId)(),title:h.title.value,ranges:(0,p.default)({},h.ranges.value),questionRange:T.defaultQuestionRange,actions:(0,g.default)(h.actions.value),parent:a.key}),x((0,p.default)({},h,{title:(0,p.default)({},h.title,{value:"",validateStatus:"",errorMsg:""})})))},D=function(e){var t=e.target.value;x(function(e){return(0,p.default)({},e,{selectedRange:t,ranges:(0,p.default)({},e.ranges,{value:(0,p.default)({},e.ranges.value,(0,s.default)({},t,void 0!=e.ranges.value[t]?e.ranges.value[t]:""))})})})},P={labelCol:{span:6},wrapperCol:{span:16}},A="add_range_form",q=function(e){x(function(t){return(0,p.default)({},t,{ranges:(0,p.default)({},t.ranges,{value:(0,p.default)({},e)})})})},H=(0,E.toRangeMaps)(h.ranges.value),j=(0,E.toRangeCombos)(H),z=[{title:"Range",dataIndex:"type",key:"type"},{title:"size",dataIndex:"size",key:"size"},{title:"total % (".concat(E.TOTAL_HOLE_CARD_COMBOS,")"),dataIndex:"percentTotal",key:"percentTotal"},{title:"current size",dataIndex:"current",key:"current"},{title:"current %",dataIndex:"percentCurrent",key:"percentCurrent"}];return y.default.createElement(f.default,{style:{width:"100%"}},y.default.createElement(c.default,{span:11},y.default.createElement(i.default,Object.assign({},P,{id:A,layout:"horizontal",labelAlign:"left"}),y.default.createElement(i.default.Item,{label:"Node Title",required:!0,help:h.title.errorMsg},y.default.createElement(o.default,{value:h.title.value,onChange:O,placeholder:"Your range name",style:{width:220}})),y.default.createElement(d.default.Group,{name:"radiogroup",onChange:D},Object.keys(E.PreFlopRangeTypes).map(function(e){return y.default.createElement(i.default.Item,{label:e},y.default.createElement(o.default,{value:h.ranges.value[e],onChange:function(t){return _(t.target.value,e)},placeholder:e,style:{width:220}})," ",y.default.createElement(d.default,{value:e},"A"))})),y.default.createElement(i.default.Item,{label:"Node Actions",required:!0,help:h.actions.errorMsg},y.default.createElement(v.default,{mode:"multiple",style:{width:"100%"},placeholder:"Please select actions",defaultValue:h.actions.value,onChange:w},C),","),y.default.createElement(i.default.Item,null,y.default.createElement(u.default,{onClick:I,type:"primary"},t?"Update":"Add")))),y.default.createElement(c.default,{span:13},y.default.createElement(N.default,{key:h.selectedRange,rangeMaps:H,type:h.selectedRange,onRangesUpdated:q}),y.default.createElement(l.default,{dataSource:j,columns:z,size:"small",pagination:!1}),";"))},b=k;t.default=b},"6eue":function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("eHn4")),u=r(a("p0pE")),d=r(a("qIgq")),o=n(a("q1tI")),i=r(a("TSDC")),c=a("1DmO"),f=r(a("DZRg")),s=function(e){var t=e.rangeMaps,a=e.type,n=e.onRangesUpdated,r=(0,o.useState)({selectionStarted:!1,rangeMaps:JSON.parse(JSON.stringify(t)),tempRangeMaps:{}}),s=(0,d.default)(r,2),p=s[0],g=s[1],m=function(e,t){g(function(e){return(0,u.default)({},e,{selectionStarted:!0,tempRangeMaps:JSON.parse(JSON.stringify(e.rangeMaps))})})},v=function(e){e.preventDefault()},y=function(e){g(function(e){return(0,u.default)({},e,{selectionStarted:!1,tempRangeMaps:{}})}),n&&n((0,c.toRanges)(p.rangeMaps))},E=function(e){e.preventDefault()},T=function(e,t){if(p.selectionStarted&&a){var n=p.rangeMaps[a],r=p.tempRangeMaps[a];n&&r&&(r.combos[e]?n.combos[e]=!1:n.combos[e]||(n.combos[e]=!0),g(function(e){return(0,u.default)({},e,{rangeMaps:(0,u.default)({},e.rangeMaps,(0,l.default)({},a,JSON.parse(JSON.stringify(n))))})}))}},M=(0,c.rangeMatrix)(p.rangeMaps,a);return o.default.createElement("div",{className:f.default.rangeMatrix},p.selectionStarted?"yes":"no",M.map(function(e,t){return o.default.createElement("div",{className:"range-matrix-line",key:"line-".concat(t),onMouseDown:v,onMouseUp:y,onSelect:E},e.map(function(e,t){return o.default.createElement(i.default,{title:e.value,type:e.type,key:"cell-".concat(t),onMouseDown:m,onMouseMove:T,onMouseUp:T})}))}))},p=s;t.default=p},DZRg:function(e,t,a){e.exports={rangeMatrix:"antd-pro-pages-games-range-trainer-game-components-range-matrix-index-rangeMatrix",historiesList:"antd-pro-pages-games-range-trainer-game-components-range-matrix-index-historiesList"}},HzNX:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var r=n(a("wCAj"));a("jCWc");var l=n(a("kPKH"));a("14J3");var u=n(a("BMrR"));a("+L6B");var d=n(a("2/Rp"));a("Pwec");var o=n(a("CtXQ")),i=n(a("eHn4"));a("fu2T");var c,f=n(a("gK9i")),s=n(a("q1tI")),p=n(a("DZRg")),g=a("/MKj"),m=n(a("jnMK")),v=a("1DmO"),y=a("lGOm"),E=a("Y2fQ"),T=a("iwYr"),M=n(a("hxP0")),N=n(a("TSDC")),R=f.default.Panel,k=(c={},(0,i.default)(c,v.PreFlopRangeTypes.fold,["f","a"]),(0,i.default)(c,v.PreFlopRangeTypes.call,["c","d"]),(0,i.default)(c,v.PreFlopRangeTypes.two_bet,["r","w"]),(0,i.default)(c,v.PreFlopRangeTypes.three_bet_value,["r","w"]),(0,i.default)(c,v.PreFlopRangeTypes.four_bet_value,["r","w"]),(0,i.default)(c,v.PreFlopRangeTypes.four_bet_bluff,["b","s"]),(0,i.default)(c,v.PreFlopRangeTypes.three_bet_bluff,["b","s"]),c),b=function(e){var t=e.rangeTrainer,a=e.dispatch,n=function(){a&&a({type:"rangeTrainer/deal"})},i=function(e){a&&(a({type:"rangeTrainer/answer",payload:{answer:e}}),setTimeout(function(){a({type:"rangeTrainer/deal"})},300))},c=function(e){a&&a({type:"rangeTrainer/selectRangeTreeNode",payload:{treeNode:e}})},g=function(e,t){a&&a({type:"rangeTrainer/addRangeTreeNode",payload:{parent:e,node:t}})},b=function(e){a&&a({type:"rangeTrainer/editRangeTreeNode",payload:{node:e}})},h=function(e){a&&a({type:"rangeTrainer/deleteRangeTreeNode",payload:{node:e}})},x=t.rangeTrainer.result.result,C=s.default.createElement("span",null);void 0!=x&&(C=x?s.default.createElement(o.default,{type:"check"}):s.default.createElement(o.default,{type:"close"}));var S,O=t.rangeTrainer.rangeMatrix.matrix&&s.default.createElement("div",{className:p.default.rangeMatrix}," ",t.rangeTrainer.rangeMatrix.matrix.map(function(e,t){return s.default.createElement("div",{className:"range-matrix-line",key:"line-".concat(t)},e.map(function(e,t){return s.default.createElement(N.default,{title:e.value,type:e.type,key:"cell-".concat(t)})}))})),_=(0,v.toRangeCombos)(t.rangeTrainer.rangeMatrix.rangeMaps),w=[{title:"Range",dataIndex:"type",key:"type"},{title:"size",dataIndex:"size",key:"size"},{title:"total % (".concat(v.TOTAL_HOLE_CARD_COMBOS,")"),dataIndex:"percentTotal",key:"percentTotal"},{title:"current size",dataIndex:"current",key:"current"},{title:"current %",dataIndex:"percentCurrent",key:"percentCurrent"}],I=t.rangeTrainer.rangeTreeNodes,D="",P=[];if(t.rangeTrainer.selectedNode&&(S=I.byId[t.rangeTrainer.selectedNode],void 0!=S&&(D=S.title,t.rangeTrainer.histories))){var A=t.rangeTrainer.histories[S.key];A&&(P=A)}var q=function(){if(S&&S.actions){var e=S.actions,t=e.reduce(function(e,t){return e[t]=function(e){return i(t)},e},{});return s.default.createElement(y.HotKeys,{keyMap:k,handlers:t},e.map(function(e,t){return s.default.createElement(d.default,{onClick:function(){return i(e)},key:t},(0,E.formatMessage)({id:"".concat(T.localRangeTrainerActions).concat(e)}))}))}},H=function(){return P.map(function(e,t){var a=s.default.createElement("span",null);return a=e.result.result?s.default.createElement(o.default,{type:"check",className:"info"}):s.default.createElement(o.default,{type:"close",className:"error"}),s.default.createElement("div",{key:"qAndA".concat(t)},s.default.createElement(m.default,{card:e.question.holeCards[0]}),s.default.createElement(m.default,{card:e.question.holeCards[1]}),s.default.createElement("span",null,e.answer),s.default.createElement("span",null,e.result.result),a)})};return s.default.createElement("div",null,s.default.createElement("div",{id:"components-grid-demo-responsive"},s.default.createElement(u.default,null,s.default.createElement(l.default,{span:10},s.default.createElement(M.default,{rangeTreeNodes:t.rangeTrainer.rangeTreeNodes,onSelectRange:c,onAddTreeNode:g,onEditTreeNode:b,onDeleteTreeNode:h})),s.default.createElement(l.default,{span:14},s.default.createElement(f.default,{defaultActiveKey:["1"]},s.default.createElement(R,{header:D,key:"1"},s.default.createElement(d.default,{onClick:n},"Deal"),s.default.createElement(u.default,null,s.default.createElement(l.default,{span:12},s.default.createElement(m.default,{card:t.rangeTrainer.question.holeCards[0]}),s.default.createElement(m.default,{card:t.rangeTrainer.question.holeCards[1]}),q(),s.default.createElement("div",null,t.rangeTrainer.result.message),s.default.createElement("div",null,x),C),s.default.createElement(l.default,{span:12},s.default.createElement("div",{className:p.default.historiesList},H())))),s.default.createElement(R,{header:"Hint",key:"2"},O,s.default.createElement(r.default,{dataSource:_,columns:w,size:"small",pagination:!1})))))))},h=(0,g.connect)(function(e){var t=e.rangeTrainer;return{rangeTrainer:t}})(b);t.default=h},Mdr6:function(e,t,a){e.exports={card:"antd-pro-components-card-index-card"}},TSDC:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),l=function(e){var t=e.title,a=e.type,n=e.onMouseDown,l=e.onMouseMove,u=e.onMouseUp,d=function(e){e.preventDefault();var t=e.target;n&&n(t.innerHTML,e)},o=function(e){e.preventDefault();var t=e.target;l&&l(t.innerHTML,e)},i=function(e){e.preventDefault();var t=e.target;u&&u(t.innerHTML,e)};return r.default.createElement("div",{className:"range-matrix-cell range-matrix-cell-".concat(a)},r.default.createElement("span",{onMouseDown:d,onMouseMove:o,onMouseUp:i},t))},u=l;t.default=u},hxP0:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("P2fV");var r=n(a("NJEC"));a("Pwec");var l=n(a("CtXQ"));a("Q9mQ");var u=n(a("diRs"));a("ozfa");var d=n(a("MJZm")),o=n(a("q1tI")),i=n(a("1rzR")),c=d.default.TreeNode,f=function(e){var t=e.rangeTreeNodes,a=e.onSelectRange,n=e.onAddTreeNode,f=e.onEditTreeNode,s=e.onDeleteTreeNode,p=function(e){a&&a(e)},g=function(e,t){n&&n(e,t)},m=function(e){f&&f(e)},v=function(e){s&&s(e)},y=function(e,t){return o.default.createElement(i.default,{parent:e,onAddTreeNode:g,onEditTreeNode:m,isEditing:t})},E=function(e){return o.default.createElement(u.default,{content:y(e),title:"Add a new range:",trigger:"click"},o.default.createElement(l.default,{type:"plus-circle"}))},T=function(e){return o.default.createElement(u.default,{content:y(e,!0),title:"Edit the range:",trigger:"click"},o.default.createElement(l.default,{type:"edit"}))},M=function(e){return o.default.createElement(r.default,{title:'Are you sure to delete "'.concat(e.title,"\" and all it's children?"),onConfirm:function(){return v(e)},okText:"Yes",cancelText:"No"},o.default.createElement(l.default,{className:"dynamic-delete-button",type:"delete"}))},N=function(e){return o.default.createElement("span",null,o.default.createElement("span",{onClick:function(){return p(e)}},e.title),E(e),T(e),M(e))},R=function e(a){return a.map(function(a){var n=t.byId[a];if(n)return n.children?o.default.createElement(c,{title:N(n),key:a,dataRef:n},e(n.children)):o.default.createElement(c,{key:n.key,title:N(n),dataRef:n})})};return o.default.createElement(d.default,{checkable:!0,defaultExpandAll:!0},R(["root"]))},s=f;t.default=s},jnMK:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),l=n(a("Mdr6")),u=a("1DmO"),d=function(e){var t=e.card;return t?r.default.createElement("span",{className:l.default.card},t.opened&&r.default.createElement("span",null,r.default.createElement("span",null,u.cardRankToStringMap[t.rank]),r.default.createElement("span",{className:"card-"+u.cardSuitNameMap[t.suit]},u.cardSuitMap[t.suit]))):r.default.createElement("span",{className:l.default.card})},o=d;t.default=o},mS2w:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("qIgq")),u=a("Hx5s"),d=n(a("q1tI")),o=r(a("HzNX")),i=function(){var e=(0,d.useState)(!0),t=(0,l.default)(e,2),a=(t[0],t[1]);return(0,d.useEffect)(function(){setTimeout(function(){a(!1)},3e3)},[]),d.default.createElement(u.PageHeaderWrapper,null,d.default.createElement(o.default,null))};t.default=i}}]);