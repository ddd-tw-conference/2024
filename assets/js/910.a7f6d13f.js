"use strict";(self.webpackChunkdddtw_conference_2024=self.webpackChunkdddtw_conference_2024||[]).push([[910],{1432:(e,t,o)=>{o.d(t,{A:()=>a,f:()=>i});var r=o(7953);const n=r.createContext(null);function i(){const e=r.useContext(n);if(null==e)throw new Error("No TabsContext provided");return e}const a=n},469:(e,t,o)=>{o.d(t,{E:()=>r});const r=o(7953).createContext(null)},6690:(e,t,o)=>{o.d(t,{o:()=>r});const r={blur:"list:blur",focus:"list:focus",keyDown:"list:keyDown",itemClick:"list:itemClick",itemHover:"list:itemHover",itemsChange:"list:itemsChange",textNavigation:"list:textNavigation"}},5102:(e,t,o)=>{o.d(t,{q:()=>n,v:()=>i});var r=o(7953);const n=r.createContext(null);function i(){const[e,t]=r.useState(new Map),o=r.useRef(new Set),n=r.useCallback((function(e){o.current.delete(e),t((t=>{const o=new Map(t);return o.delete(e),o}))}),[]),i=r.useCallback((function(e,r){let i;return i="function"==typeof e?e(o.current):e,o.current.add(i),t((e=>{const t=new Map(e);return t.set(i,r),t})),{id:i,deregister:()=>n(i)}}),[n]),a=r.useMemo((()=>function(e){const t=Array.from(e.keys()).map((t=>({key:t,subitem:e.get(t)})));return t.sort(((e,t)=>{const o=e.subitem.ref.current,r=t.subitem.ref.current;return null===o||null===r||o===r?0:o.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_PRECEDING?1:-1})),new Map(t.map((e=>[e.key,e.subitem])))}(e)),[e]);return{contextValue:{getItemIndex:r.useCallback((function(e){return Array.from(a.keys()).indexOf(e)}),[a]),registerItem:i,totalSubitemCount:e.size},subitems:a}}n.displayName="CompoundComponentContext"},1121:(e,t,o)=>{o.d(t,{Q:()=>a});var r=o(7953),n=o(796),i=o(5102);function a(e,t){const o=r.useContext(i.q);if(null===o)throw new Error("useCompoundItem must be used within a useCompoundParent");const{registerItem:a}=o,[l,s]=r.useState("function"==typeof e?void 0:e);return(0,n.A)((()=>{const{id:o,deregister:r}=a(e,t);return s(o),r}),[a,t,e]),{id:l,index:void 0!==l?o.getItemIndex(l):-1,totalItemCount:o.totalSubitemCount}}},735:(e,t,o)=>{o.d(t,{A:()=>r});const r=o(7953).createContext(!1)},3800:(e,t,o)=>{o.d(t,{A:()=>V});var r=o(7166),n=o(3911),i=o(7953),a=o(5218),l=o(1745),s=o(6790),d=o(5243),c=o(1432),u=o(1121),g=o(796);var v=o(6690),h=o(469);function m(e){const{handlePointerOverEvents:t=!1,item:o,rootRef:r}=e,a=i.useRef(null),s=(0,l.A)(a,r),d=i.useContext(h.E);if(!d)throw new Error("useListItem must be used within a ListProvider");const{dispatch:c,getItemState:u,registerHighlightChangeHandler:m,registerSelectionChangeHandler:f}=d,{highlighted:p,selected:b,focusable:C}=u(o),x=function(){const[,e]=i.useState({});return i.useCallback((()=>{e({})}),[])}();(0,g.A)((()=>m((function(e){e!==o||p?e!==o&&p&&x():x()})))),(0,g.A)((()=>f((function(e){b?e.includes(o)||x():e.includes(o)&&x()}))),[f,x,b,o]);const A=i.useCallback((e=>t=>{var r;null==(r=e.onClick)||r.call(e,t),t.defaultPrevented||c({type:v.o.itemClick,item:o,event:t})}),[c,o]),y=i.useCallback((e=>t=>{var r;null==(r=e.onMouseOver)||r.call(e,t),t.defaultPrevented||c({type:v.o.itemHover,item:o,event:t})}),[c,o]);let S;C&&(S=p?0:-1);return{getRootProps:(e={})=>(0,n.A)({},e,{onClick:A(e),onPointerOver:t?y(e):void 0,ref:s,tabIndex:S}),highlighted:p,rootRef:s,selected:b}}var f=o(4809);function p(e){return e.size}const b=function(e){const{value:t,rootRef:o,disabled:r=!1,id:a}=e,s=i.useRef(null),g=(0,d.A)(a),{value:v,selectionFollowsFocus:h,getTabPanelId:b}=(0,c.f)(),C=i.useMemo((()=>({disabled:r,ref:s,id:g})),[r,s,g]),{id:x,index:A,totalItemCount:y}=(0,u.Q)(null!=t?t:p,C),{getRootProps:S,rootRef:I,highlighted:w,selected:k}=m({item:x}),{getRootProps:L,rootRef:R,active:z,focusVisible:T,setFocusVisible:P}=(0,f.A)({disabled:r,focusableWhenDisabled:!h,type:"button"}),V=(0,l.A)(s,o,I,R),D=void 0!==x?b(x):void 0;return{getRootProps:(e={})=>{const t=(0,n.A)({},e,S(e)),o=(0,n.A)({},t,L(t));return(0,n.A)({},o,{role:"tab","aria-controls":D,"aria-selected":k,id:g,ref:V})},active:z,focusVisible:T,highlighted:w,index:A,rootRef:V,selected:k||x===v,setFocusVisible:P,totalTabsCount:y}};var C=o(6713),x=o(8544);const A=(0,x.WN)("MuiListItemButton",["root","horizontal","vertical","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","focusVisible","disabled","selected","variantPlain","variantSoft","variantOutlined","variantSolid"]);var y=o(5621);const S=(0,C.A)("div")((({theme:e,ownerState:t})=>{var o,r,i,a,l,s,d;return[(0,n.A)({},t.selected&&{"--ListItemDecorator-color":"initial"},t.disabled&&{"--ListItemDecorator-color":null==(o=e.variants)||null==(r=o[`${t.variant}Disabled`])||null==(i=r[t.color])?void 0:i.color},{WebkitTapHighlightColor:"transparent",boxSizing:"border-box",position:"relative",display:"flex",flexDirection:"row",alignItems:"center",alignSelf:"stretch"},"vertical"===t.orientation&&{flexDirection:"column",justifyContent:"center"},{textAlign:"initial",textDecoration:"initial",backgroundColor:"initial",cursor:"pointer",marginInline:"var(--ListItemButton-marginInline)",marginBlock:"var(--ListItemButton-marginBlock)"},void 0===t["data-first-child"]&&{marginInlineStart:t.row?"var(--List-gap)":void 0,marginBlockStart:t.row?void 0:"var(--List-gap)"},{paddingBlock:"calc(var(--ListItem-paddingY) - var(--variant-borderWidth, 0px))",paddingInlineStart:"calc(var(--ListItem-paddingLeft) + var(--ListItem-startActionWidth, var(--unstable_startActionWidth, 0px)))",paddingInlineEnd:"calc(var(--ListItem-paddingRight) + var(--ListItem-endActionWidth, var(--unstable_endActionWidth, 0px)))",minBlockSize:"var(--ListItem-minHeight)",border:"none",borderRadius:"var(--ListItem-radius)",flexGrow:t.row?0:1,flexBasis:t.row?"auto":"0%",flexShrink:0,minInlineSize:0,fontSize:"var(--ListItem-fontSize)",fontFamily:e.vars.fontFamily.body},t.selected&&{fontWeight:e.vars.fontWeight.md},{[e.focus.selector]:e.focus.default}),(0,n.A)({},null==(a=e.variants[t.variant])?void 0:a[t.color],!t.selected&&{"&:hover":null==(l=e.variants[`${t.variant}Hover`])?void 0:l[t.color],"&:active":null==(s=e.variants[`${t.variant}Active`])?void 0:s[t.color]}),{[`&.${A.disabled}`]:null==(d=e.variants[`${t.variant}Disabled`])?void 0:d[t.color]}]}));(0,C.A)(S,{name:"JoyListItemButton",slot:"Root",overridesResolver:(e,t)=>t.root})({});var I=o(22),w=o(5018);function k(e){return(0,x.SX)("MuiTab",e)}(0,x.WN)("MuiTab",["root","disabled","focusVisible","selected","horizontal","vertical","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var L=o(735);const R=i.createContext("horizontal");var z=o(3418);const T=["action","children","value","disabled","onChange","onClick","onFocus","component","orientation","variant","color","slots","slotProps"],P=(0,C.A)(S,{name:"JoyTab",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{var o;const r=null==(o=e.variants[t.variant])?void 0:o[t.color];return(0,n.A)({justifyContent:"center",flexGrow:1},!t.row&&"horizontal"===t.orientation&&{justifyContent:"flex-start"},t.selected&&(0,n.A)({boxShadow:e.shadow.sm,fontWeight:"initial"},!(null!=r&&r.backgroundColor)&&{backgroundColor:e.vars.palette.background.surface}))})),V=i.forwardRef((function(e,t){const o=(0,I.A)({props:e,name:"JoyTab"}),d=i.useContext(L.A),{action:c,children:u,disabled:g=!1,component:v="button",orientation:h="horizontal",variant:m="plain",color:f="neutral",slots:p={},slotProps:C={}}=o,x=(0,r.A)(o,T),{getColor:A}=(0,w.cF)(m),S=A(e.color,f),V=i.useRef(),D=(0,l.A)(V,t),{active:B,focusVisible:F,setFocusVisible:M,selected:W,getRootProps:H}=b((0,n.A)({},o,{rootRef:D}));i.useImperativeHandle(c,(()=>({focusVisible:()=>{M(!0),V.current.focus()}})),[M]);const E=(0,n.A)({},o,{orientation:h,row:d,active:B,focusVisible:F,disabled:g,selected:W,variant:m,color:S}),N=(e=>{const{selected:t,disabled:o,focusVisible:r,variant:n,color:i,orientation:l}=e,d={root:["root",l,o&&"disabled",r&&"focusVisible",t&&"selected",n&&`variant${(0,a.A)(n)}`,i&&`color${(0,a.A)(i)}`]};return(0,s.A)(d,k,{})})(E),$=(0,n.A)({},x,{component:v,slots:p,slotProps:C}),[O,j]=(0,z.A)("root",{ref:t,elementType:P,getSlotProps:H,externalForwardedProps:$,ownerState:E,className:N.root});return(0,y.jsx)(R.Provider,{value:h,children:(0,y.jsx)(O,(0,n.A)({},j,{children:u}))})}))},7435:(e,t,o)=>{o.d(t,{A:()=>te});var r=o(7166),n=o(3911),i=o(7953),a=o(5218),l=o(6790),s=o(1432);const d={valueChange:"valueChange"};var c=o(5102),u=o(1745),g=o(6690);function v(e,t,o){var r;const{items:n,isItemDisabled:i,disableListWrap:a,disabledItemsFocusable:l,itemComparer:s,focusManagement:d}=o,c="DOM"===d?0:-1,u=n.length-1,g=null==e?-1:n.findIndex((t=>s(t,e)));let v,h,m=!a;switch(t){case"reset":if(-1===c)return null;v=0,h="next",m=!1;break;case"start":v=0,h="next",m=!1;break;case"end":v=u,h="previous",m=!1;break;default:{const e=g+t;e<0?!m&&-1!==g||Math.abs(t)>1?(v=0,h="next"):(v=u,h="previous"):e>u?!m||Math.abs(t)>1?(v=u,h="previous"):(v=0,h="next"):(v=e,h=t>=0?"next":"previous")}}const f=function(e,t,o,r,n,i){if(0===o.length||!r&&o.every(((e,t)=>n(e,t))))return-1;let a=e;for(;;){if(!i&&"next"===t&&a===o.length||!i&&"previous"===t&&-1===a)return-1;if(r||!n(o[a],a))return a;a+="next"===t?1:-1,i&&(a=(a+o.length)%o.length)}}(v,h,n,l,i,m);return-1!==f||null===e||i(e,g)?null!=(r=n[f])?r:null:e}function h(e,t,o){const{itemComparer:r,isItemDisabled:i,selectionMode:a,items:l}=o,{selectedValues:s}=t,d=l.findIndex((t=>r(e,t)));if(i(e,d))return t;const c=function(e,t,o,r){return"none"===o?[]:"single"===o?r(t[0],e)?t:[e]:t.some((t=>r(t,e)))?t.filter((t=>!r(t,e))):[...t,e]}(e,s,a,r);return(0,n.A)({},t,{selectedValues:c,highlightedValue:e})}function m(e,t,o){var r;const n=null==(r=o(e))?void 0:r.trim().toLowerCase();return!(!n||0===n.length)&&0===n.indexOf(t)}function f(e,t){const{type:o,context:r}=t;switch(o){case g.o.keyDown:return function(e,t,o){const r=t.highlightedValue,{orientation:i,pageSize:a}=o;switch(e){case"Home":return(0,n.A)({},t,{highlightedValue:v(r,"start",o)});case"End":return(0,n.A)({},t,{highlightedValue:v(r,"end",o)});case"PageUp":return(0,n.A)({},t,{highlightedValue:v(r,-a,o)});case"PageDown":return(0,n.A)({},t,{highlightedValue:v(r,a,o)});case"ArrowUp":if("vertical"!==i)break;return(0,n.A)({},t,{highlightedValue:v(r,-1,o)});case"ArrowDown":if("vertical"!==i)break;return(0,n.A)({},t,{highlightedValue:v(r,1,o)});case"ArrowLeft":{if("vertical"===i)break;const e="horizontal-ltr"===i?-1:1;return(0,n.A)({},t,{highlightedValue:v(r,e,o)})}case"ArrowRight":{if("vertical"===i)break;const e="horizontal-ltr"===i?1:-1;return(0,n.A)({},t,{highlightedValue:v(r,e,o)})}case"Enter":case" ":return null===t.highlightedValue?t:h(t.highlightedValue,t,o)}return t}(t.key,e,r);case g.o.itemClick:return h(t.item,e,r);case g.o.blur:return function(e,t){return"DOM"===t.focusManagement?e:(0,n.A)({},e,{highlightedValue:null})}(e,r);case g.o.textNavigation:return function(e,t,o){const{items:r,isItemDisabled:i,disabledItemsFocusable:a,getItemAsString:l}=o,s=t.length>1;let d=s?e.highlightedValue:v(e.highlightedValue,1,o);for(let c=0;c<r.length;c+=1){if(!d||!s&&e.highlightedValue===d)return e;if(m(d,t,l)&&(!i(d,r.indexOf(d))||a))return(0,n.A)({},e,{highlightedValue:d});d=v(d,1,o)}return e}(e,t.searchString,r);case g.o.itemsChange:return function(e,t,o,r){var i;const{itemComparer:a,focusManagement:l}=r;let s=null;var d;null!=o.highlightedValue?s=null!=(d=e.find((e=>a(e,o.highlightedValue))))?d:null:"DOM"===l&&0===t.length&&(s=v(null,"reset",r));const c=(null!=(i=o.selectedValues)?i:[]).filter((t=>e.some((e=>a(e,t)))));return(0,n.A)({},o,{highlightedValue:s,selectedValues:c})}(t.items,t.previousItems,e,r);default:return e}}function p(){const e=i.useRef();return e.current||(e.current=function(){const e=new Map;return{subscribe:function(t,o){let r=e.get(t);return r?r.add(o):(r=new Set([o]),e.set(t,r)),()=>{r.delete(o),0===r.size&&e.delete(t)}},publish:function(t,...o){const r=e.get(t);r&&r.forEach((e=>e(...o)))}}}()),e.current}const b="select:change-selection",C="select:change-highlight";function x(e,t){return e===t}const A={},y=()=>{};function S(e,t){const o=(0,n.A)({},e);return Object.keys(t).forEach((e=>{void 0!==t[e]&&(o[e]=t[e])})),o}function I(e){const t=i.useRef(null),{reducer:o,initialState:r,controlledProps:a=A,stateComparers:l=A,onStateChange:s=y,actionContext:d}=e,c=i.useCallback(((e,r)=>{t.current=r;const n=S(e,a);return o(n,r)}),[a,o]),[u,g]=i.useReducer(c,r),v=i.useCallback((e=>{g((0,n.A)({},e,{context:d}))}),[d]);return function(e){const{nextState:t,initialState:o,stateComparers:r,onStateChange:n,controlledProps:a,lastActionRef:l}=e,s=i.useRef(o);i.useEffect((()=>{if(null===l.current)return;const e=S(s.current,a);Object.keys(t).forEach((o=>{var i;const a=null!=(i=r[o])?i:x,s=t[o];var d,c;a(s,e[o])||null==n||n(null!=(d=l.current.event)?d:null,o,s,null!=(c=l.current.type)?c:"",t)})),s.current=t,l.current=null}),[s,t,l,n,r,a])}({nextState:u,initialState:r,stateComparers:null!=l?l:A,onStateChange:null!=s?s:y,controlledProps:a,lastActionRef:t}),[S(u,a),v]}function w(e,t,o=((e,t)=>e===t)){return e.length===t.length&&e.every(((e,r)=>o(e,t[r])))}function k(e,t){const o=i.useRef(e);return i.useEffect((()=>{o.current=e}),null!=t?t:[e]),o}const L=500;const R={},z=()=>{},T=(e,t)=>e===t,P=()=>!1,V=e=>"string"==typeof e?e:String(e),D=()=>({highlightedValue:null,selectedValues:[]});const B=function(e){const{controlledProps:t=R,disabledItemsFocusable:o=!1,disableListWrap:r=!1,focusManagement:a="activeDescendant",getInitialState:l=D,getItemDomElement:s,getItemId:d,isItemDisabled:c=P,rootRef:v,onStateChange:h=z,items:m,itemComparer:x=T,getItemAsString:A=V,onChange:y,onHighlightChange:S,orientation:B="vertical",pageSize:F=5,reducerActionContext:M=R,selectionMode:W="single",stateReducer:H}=e,E=i.useRef(null),N=(0,u.A)(v,E),$=i.useCallback(((e,t,o)=>{var r;(null==S||S(e,t,o),"DOM"!==a||null==t||o!==g.o.itemClick&&o!==g.o.keyDown&&o!==g.o.textNavigation)||(null==s||null==(r=s(t))||r.focus())}),[s,S,a]),O=i.useMemo((()=>({highlightedValue:x,selectedValues:(e,t)=>w(e,t,x)})),[x]),j=i.useCallback(((e,t,o,r,n)=>{switch(null==h||h(e,t,o,r,n),t){case"highlightedValue":$(e,o,r);break;case"selectedValues":null==y||y(e,o,r)}}),[$,y,h]),_=i.useMemo((()=>({disabledItemsFocusable:o,disableListWrap:r,focusManagement:a,isItemDisabled:c,itemComparer:x,items:m,getItemAsString:A,onHighlightChange:$,orientation:B,pageSize:F,selectionMode:W,stateComparers:O})),[o,r,a,c,x,m,A,$,B,F,W,O]),X=l(),Y=null!=H?H:f,J=i.useMemo((()=>(0,n.A)({},M,_)),[M,_]),[U,G]=I({reducer:Y,actionContext:J,initialState:X,controlledProps:t,stateComparers:O,onStateChange:j}),{highlightedValue:q,selectedValues:Q}=U,K=function(e){const t=i.useRef({searchString:"",lastTime:null});return i.useCallback((o=>{if(1===o.key.length&&" "!==o.key){const r=t.current,n=o.key.toLowerCase(),i=performance.now();r.searchString.length>0&&r.lastTime&&i-r.lastTime>L?r.searchString=n:1===r.searchString.length&&n===r.searchString||(r.searchString+=n),r.lastTime=i,e(r.searchString,o)}}),[e])}(((e,t)=>G({type:g.o.textNavigation,event:t,searchString:e}))),Z=k(Q),ee=k(q),te=i.useRef([]);i.useEffect((()=>{w(te.current,m,x)||(G({type:g.o.itemsChange,event:null,items:m,previousItems:te.current}),te.current=m)}),[m,x,G]);const{notifySelectionChanged:oe,notifyHighlightChanged:re,registerHighlightChangeHandler:ne,registerSelectionChangeHandler:ie}=function(){const e=p();return{notifySelectionChanged:i.useCallback((t=>{e.publish(b,t)}),[e]),notifyHighlightChanged:i.useCallback((t=>{e.publish(C,t)}),[e]),registerSelectionChangeHandler:i.useCallback((t=>e.subscribe(b,t)),[e]),registerHighlightChangeHandler:i.useCallback((t=>e.subscribe(C,t)),[e])}}();i.useEffect((()=>{oe(Q)}),[Q,oe]),i.useEffect((()=>{re(q)}),[q,re]);const ae=e=>t=>{var o;if(null==(o=e.onKeyDown)||o.call(e,t),t.defaultMuiPrevented)return;const r=["Home","End","PageUp","PageDown"];"vertical"===B?r.push("ArrowUp","ArrowDown"):r.push("ArrowLeft","ArrowRight"),"activeDescendant"===a&&r.push(" ","Enter"),r.includes(t.key)&&t.preventDefault(),G({type:g.o.keyDown,key:t.key,event:t}),K(t)},le=i.useCallback((e=>{var t;const o=m.findIndex((t=>x(t,e))),r=(null!=(t=Z.current)?t:[]).some((t=>null!=t&&x(e,t))),n=c(e,o),i=null!=ee.current&&x(e,ee.current);return{disabled:n,focusable:"DOM"===a,highlighted:i,index:o,selected:r}}),[m,c,x,Z,ee,a]),se=i.useMemo((()=>({dispatch:G,getItemState:le,registerHighlightChangeHandler:ne,registerSelectionChangeHandler:ie})),[G,le,ne,ie]);return i.useDebugValue({state:U}),{contextValue:se,dispatch:G,getRootProps:(e={})=>{return(0,n.A)({},e,{"aria-activedescendant":"activeDescendant"===a&&null!=q?d(q):void 0,onBlur:(t=e,e=>{var o,r;null==(o=t.onBlur)||o.call(t,e),e.defaultMuiPrevented||null!=(r=E.current)&&r.contains(e.relatedTarget)||G({type:g.o.blur,event:e})}),onKeyDown:ae(e),tabIndex:"DOM"===a?-1:0,ref:N});var t},rootRef:N,state:U}};function F(e,t){if(t.type===d.valueChange)return(0,n.A)({},e,{highlightedValue:t.value});const o=f(e,t),{context:{selectionFollowsFocus:r}}=t;if(t.type===g.o.itemsChange){if(o.selectedValues.length>0)return(0,n.A)({},o,{highlightedValue:o.selectedValues[0]});v(null,"reset",t.context)}return r&&null!=o.highlightedValue?(0,n.A)({},o,{selectedValues:[o.highlightedValue]}):o}const M=function(e){var t;const{rootRef:o}=e,{direction:r="ltr",onSelected:a,orientation:l="horizontal",value:u,registerTabIdLookup:g,selectionFollowsFocus:v}=(0,s.f)(),{subitems:h,contextValue:m}=(0,c.v)();g(i.useCallback((e=>{var t;return null==(t=h.get(e))?void 0:t.id}),[h]));const f=i.useMemo((()=>Array.from(h.keys())),[h]),p=i.useCallback((e=>{var t,o;return null==e?null:null!=(t=null==(o=h.get(e))?void 0:o.ref.current)?t:null}),[h]),b="rtl"===r;let C;C="vertical"===l?"vertical":b?"horizontal-rtl":"horizontal-ltr";const x=i.useCallback(((e,t)=>{var o;a(e,null!=(o=t[0])?o:null)}),[a]),A=i.useMemo((()=>void 0===u?{}:null!=u?{selectedValues:[u]}:{selectedValues:[]}),[u]),y=i.useCallback((e=>{var t,o;return null!=(t=null==(o=h.get(e))?void 0:o.disabled)&&t}),[h]),{contextValue:S,dispatch:I,getRootProps:w,state:{highlightedValue:k,selectedValues:L},rootRef:R}=B({controlledProps:A,disabledItemsFocusable:!v,focusManagement:"DOM",getItemDomElement:p,isItemDisabled:y,items:f,rootRef:o,onChange:x,orientation:C,reducerActionContext:i.useMemo((()=>({selectionFollowsFocus:v||!1})),[v]),selectionMode:"single",stateReducer:F});return i.useEffect((()=>{void 0!==u&&null!=u&&I({type:d.valueChange,value:u})}),[I,u]),{contextValue:(0,n.A)({},m,S),dispatch:I,getRootProps:(e={})=>(0,n.A)({},e,w(e),{"aria-orientation":"vertical"===l?"vertical":void 0,role:"tablist"}),highlightedValue:k,isRtl:b,orientation:l,rootRef:R,selectedValue:null!=(t=L[0])?t:null}};var W=o(469),H=o(5621);function E(e){const{value:t,children:o}=e,{dispatch:r,getItemIndex:n,getItemState:a,registerHighlightChangeHandler:l,registerSelectionChangeHandler:s,registerItem:d,totalSubitemCount:u}=t,g=i.useMemo((()=>({dispatch:r,getItemState:a,getItemIndex:n,registerHighlightChangeHandler:l,registerSelectionChangeHandler:s})),[r,n,a,l,s]),v=i.useMemo((()=>({getItemIndex:n,registerItem:d,totalSubitemCount:u})),[d,n,u]);return(0,H.jsx)(c.q.Provider,{value:v,children:(0,H.jsx)(W.E.Provider,{value:g,children:o})})}var N=o(22),$=o(6713),O=o(5018);const j=(0,$.A)("ul")((({theme:e,ownerState:t})=>{var o;function r(o){return"sm"===o?{"--ListDivider-gap":"0.25rem","--ListItem-minHeight":"2rem","--ListItem-paddingY":"0.25rem","--ListItem-paddingX":"0.5rem","--ListItem-fontSize":e.vars.fontSize.sm,"--ListItemDecorator-size":"horizontal"===t.orientation?"1.5rem":"2rem","--Icon-fontSize":"1.125rem"}:"md"===o?{"--ListDivider-gap":"0.375rem","--ListItem-minHeight":"2.5rem","--ListItem-paddingY":"0.375rem","--ListItem-paddingX":"0.75rem","--ListItem-fontSize":e.vars.fontSize.md,"--ListItemDecorator-size":"horizontal"===t.orientation?"1.75rem":"2.5rem","--Icon-fontSize":"1.25rem"}:"lg"===o?{"--ListDivider-gap":"0.5rem","--ListItem-minHeight":"3rem","--ListItem-paddingY":"0.5rem","--ListItem-paddingX":"1rem","--ListItem-fontSize":e.vars.fontSize.md,"--ListItemDecorator-size":"horizontal"===t.orientation?"2.25rem":"3rem","--Icon-fontSize":"1.5rem"}:{}}return[t.nesting&&(0,n.A)({},r(t.instanceSize),{"--ListItem-paddingRight":"var(--ListItem-paddingX)","--ListItem-paddingLeft":"var(--NestedListItem-paddingLeft)","--ListItemButton-marginBlock":"0px","--ListItemButton-marginInline":"0px","--ListItem-marginBlock":"0px","--ListItem-marginInline":"0px",padding:0,marginInlineStart:"var(--NestedList-marginLeft)",marginInlineEnd:"var(--NestedList-marginRight)",marginBlockStart:"var(--List-gap)",marginBlockEnd:"initial"}),!t.nesting&&(0,n.A)({},r(t.size),{"--List-gap":"0px","--ListItemDecorator-color":e.vars.palette.text.tertiary,"--List-nestedInsetStart":"0px","--ListItem-paddingLeft":"var(--ListItem-paddingX)","--ListItem-paddingRight":"var(--ListItem-paddingX)","--unstable_List-childRadius":"calc(max(var(--List-radius) - var(--List-padding), min(var(--List-padding) / 2, var(--List-radius) / 2)) - var(--variant-borderWidth, 0px))","--ListItem-radius":"var(--unstable_List-childRadius)","--ListItem-startActionTranslateX":"calc(0.5 * var(--ListItem-paddingLeft))","--ListItem-endActionTranslateX":"calc(-0.5 * var(--ListItem-paddingRight))",margin:"initial"},"horizontal"===t.orientation?(0,n.A)({},t.wrap?{padding:"var(--List-padding)",marginInlineStart:"calc(-1 * var(--List-gap))",marginBlockStart:"calc(-1 * var(--List-gap))"}:{paddingInline:"var(--List-padding, var(--ListDivider-gap))",paddingBlock:"var(--List-padding)"}):{paddingBlock:"var(--List-padding, var(--ListDivider-gap))",paddingInline:"var(--List-padding)"}),(0,n.A)({boxSizing:"border-box",borderRadius:"var(--List-radius)",listStyle:"none",display:"flex",flexDirection:"horizontal"===t.orientation?"row":"column"},t.wrap&&{flexWrap:"wrap"},{flexGrow:1,position:"relative"},null==(o=e.variants[t.variant])?void 0:o[t.color],{"--unstable_List-borderWidth":"var(--variant-borderWidth, 0px)"})]}));(0,$.A)(j,{name:"JoyList",slot:"Root",overridesResolver:(e,t)=>t.root})({});var _=o(735);const X=i.createContext(!1),Y=i.createContext(!1),J={"--NestedList-marginRight":"0px","--NestedList-marginLeft":"0px","--NestedListItem-paddingLeft":"var(--ListItem-paddingX)","--ListItemButton-marginBlock":"0px","--ListItemButton-marginInline":"0px","--ListItem-marginBlock":"0px","--ListItem-marginInline":"0px"};const U=function(e){const{children:t,nested:o,row:r=!1,wrap:a=!1}=e,l=(0,H.jsx)(_.A.Provider,{value:r,children:(0,H.jsx)(X.Provider,{value:a,children:i.Children.map(t,((e,t)=>i.isValidElement(e)?i.cloneElement(e,(0,n.A)({},0===t&&{"data-first-child":""})):e))})});return void 0===o?l:(0,H.jsx)(Y.Provider,{value:o,children:l})};var G=o(4046),q=o(8544);function Q(e){return(0,q.SX)("MuiTabList",e)}(0,q.WN)("MuiTabList",["root","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","sizeSm","sizeMd","sizeLg"]);var K=o(3418);const Z=["component","children","variant","color","size","slots","slotProps"],ee=(0,$.A)(j,{name:"JoyTabList",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>(0,n.A)({flexGrow:"initial","--List-radius":e.vars.radius.md,"--List-gap":"var(--Tabs-gap)","--List-padding":"var(--Tabs-gap)","--ListDivider-gap":"0px"},J))),te=i.forwardRef((function(e,t){const o=(0,N.A)({props:e,name:"JoyTabList"}),s=i.useContext(G.A),{component:d="div",children:c,variant:u="soft",color:g="neutral",size:v,slots:h={},slotProps:m={}}=o,f=(0,r.A)(o,Z),{getColor:p}=(0,O.cF)(u),b=p(e.color,g),{isRtl:C,orientation:x,getRootProps:A,contextValue:y}=M({rootRef:t}),S=null!=v?v:s,I=(0,n.A)({},o,{isRtl:C,orientation:x,variant:u,color:b,size:S,nesting:!1}),w=(e=>{const{orientation:t,size:o,variant:r,color:n}=e,i={root:["root",t,r&&`variant${(0,a.A)(r)}`,n&&`color${(0,a.A)(n)}`,o&&`size${(0,a.A)(o)}`]};return(0,l.A)(i,Q,{})})(I),k=(0,n.A)({},f,{component:d,slots:h,slotProps:m}),[L,R]=(0,K.A)("root",{ref:t,elementType:ee,getSlotProps:A,externalForwardedProps:k,ownerState:I,className:w.root});return(0,H.jsx)(L,(0,n.A)({},R,{children:(0,H.jsx)(E,{value:y,children:(0,H.jsx)(U,{row:"horizontal"===x,nested:!0,children:c})})}))}))},1840:(e,t,o)=>{o.d(t,{A:()=>S});var r=o(7166),n=o(3911),i=o(7953),a=o(5218),l=o(6790),s=o(5243),d=o(1745),c=o(1432),u=o(1121);function g(e){return e.size}const v=function(e){const{value:t,id:o,rootRef:r}=e,n=(0,c.f)();if(null===n)throw new Error("No TabContext provided");const{value:a,getTabId:l}=n,v=(0,s.A)(o),h=i.useRef(null),m=(0,d.A)(h,r),f=i.useMemo((()=>({id:v,ref:h})),[v]),{id:p}=(0,u.Q)(null!=t?t:g,f),b=p!==a,C=void 0!==p?l(p):void 0;return{hidden:b,getRootProps:()=>({"aria-labelledby":null!=C?C:void 0,hidden:b,id:null!=v?v:void 0,ref:m}),rootRef:m}};var h=o(6713),m=o(22),f=o(4046),p=o(8544);function b(e){return(0,p.SX)("MuiTabPanel",e)}(0,p.WN)("MuiTabPanel",["root","hidden","sizeSm","sizeMd","sizeLg","horizontal","vertical"]);var C=o(3418),x=o(5621);const A=["children","value","component","size","slots","slotProps"],y=(0,h.A)("div",{name:"JoyTabPanel",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>(0,n.A)({display:t.hidden?"none":"initial"},"horizontal"===t.orientation&&{paddingBlockStart:"var(--Tabs-gap)"},"vertical"===t.orientation&&{paddingInlineStart:"var(--Tabs-gap)"},"sm"===t.size&&{fontSize:e.vars.fontSize.sm},"md"===t.size&&{fontSize:e.vars.fontSize.md},"lg"===t.size&&{fontSize:e.vars.fontSize.lg},{flexGrow:1,fontFamily:e.vars.fontFamily.body}))),S=i.forwardRef((function(e,t){const o=(0,m.A)({props:e,name:"JoyTabPanel"}),{orientation:s}=(0,c.f)()||{orientation:"horizontal"},d=i.useContext(f.A),{children:u,value:g=0,component:h,size:p,slots:S={},slotProps:I={}}=o,w=(0,r.A)(o,A),{hidden:k,getRootProps:L}=v((0,n.A)({},o,{value:g})),R=null!=p?p:d,z=(0,n.A)({},o,{orientation:s,hidden:k,size:R}),T=(e=>{const{hidden:t,size:o,orientation:r}=e,n={root:["root",t&&"hidden",o&&`size${(0,a.A)(o)}`,r]};return(0,l.A)(n,b,{})})(z),P=(0,n.A)({},w,{component:h,slots:S,slotProps:I}),[V,D]=(0,C.A)("root",{ref:t,elementType:y,getSlotProps:L,externalForwardedProps:P,additionalProps:{role:"tabpanel",ref:t,as:h},ownerState:z,className:T.root});return(0,x.jsx)(V,(0,n.A)({},D,{children:!k&&u}))}))},1650:(e,t,o)=>{o.d(t,{A:()=>A});var r=o(7166),n=o(3911),i=o(7953),a=o(8835),l=o(5218),s=o(6790),d=o(22),c=o(5018),u=o(6713),g=o(8544);function v(e){return(0,g.SX)("MuiTable",e)}(0,g.WN)("MuiTable",["root","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","sizeSm","sizeMd","sizeLg","stickyHeader","stickyFooter","noWrap","hoverRow","borderAxisNone","borderAxisX","borderAxisXBetween","borderAxisY","borderAxisYBetween","borderAxisBoth","borderAxisBothBetween"]);var h=o(6280),m=o(3418),f=o(5621);const p=["className","component","children","borderAxis","hoverRow","noWrap","size","variant","color","stripe","stickyHeader","stickyFooter","slots","slotProps"],b={getColumnExceptFirst:()=>"& tr > *:not(:first-of-type), & tr > th + td, & tr > td + th",getCell:()=>"& th, & td",getHeadCell:()=>"& th",getHeaderCell:()=>"& thead th",getHeaderCellOfRow:e=>`& thead tr:nth-of-type(${e}) th`,getBottomHeaderCell:()=>"& thead th:not([colspan])",getHeaderNestedFirstColumn:()=>"& thead tr:not(:first-of-type) th:not([colspan]):first-of-type",getDataCell:()=>"& td",getDataCellExceptLastRow:()=>"& tr:not(:last-of-type) > td",getBodyCellExceptLastRow(){return`${this.getDataCellExceptLastRow()}, & tr:not(:last-of-type) > th[scope="row"]`},getBodyCellOfRow:e=>"number"==typeof e&&e<0?`& tbody tr:nth-last-of-type(${Math.abs(e)}) td, & tbody tr:nth-last-of-type(${Math.abs(e)}) th[scope="row"]`:`& tbody tr:nth-of-type(${e}) td, & tbody tr:nth-of-type(${e}) th[scope="row"]`,getBodyRow:e=>void 0===e?"& tbody tr":`& tbody tr:nth-of-type(${e})`,getFooterCell:()=>"& tfoot th, & tfoot td",getFooterFirstRowCell:()=>"& tfoot tr:not(:last-of-type) th, & tfoot tr:not(:last-of-type) td"},C=(0,u.A)("table",{name:"JoyTable",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{var o,r,i,a,l,s,d;const c=null==(o=e.variants[t.variant])?void 0:o[t.color];return[(0,n.A)({"--Table-headerUnderlineThickness":"2px","--TableCell-borderColor":null!=(r=null==c?void 0:c.borderColor)?r:e.vars.palette.divider,"--TableCell-headBackground":`var(--Sheet-background, ${e.vars.palette.background.surface})`},"sm"===t.size&&{"--unstable_TableCell-height":"var(--TableCell-height, 32px)","--TableCell-paddingX":"0.25rem","--TableCell-paddingY":"0.25rem",fontSize:e.vars.fontSize.xs},"md"===t.size&&{"--unstable_TableCell-height":"var(--TableCell-height, 40px)","--TableCell-paddingX":"0.5rem","--TableCell-paddingY":"0.375rem",fontSize:e.vars.fontSize.sm},"lg"===t.size&&{"--unstable_TableCell-height":"var(--TableCell-height, 48px)","--TableCell-paddingX":"0.75rem","--TableCell-paddingY":"0.5rem",fontSize:e.vars.fontSize.md},{tableLayout:"fixed",width:"100%",borderSpacing:"0px",borderCollapse:"separate",borderRadius:"var(--TableCell-cornerRadius, var(--unstable_actionRadius))",color:e.vars.palette.text.primary},null==(i=e.variants[t.variant])?void 0:i[t.color],{"& caption":{color:e.vars.palette.text.tertiary,padding:"calc(2 * var(--TableCell-paddingY)) var(--TableCell-paddingX)"},[b.getDataCell()]:(0,n.A)({padding:"var(--TableCell-paddingY) var(--TableCell-paddingX)",height:"var(--unstable_TableCell-height)",borderColor:"var(--TableCell-borderColor)",backgroundColor:"var(--TableCell-dataBackground)"},t.noWrap&&{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),[b.getHeadCell()]:{textAlign:"left",padding:"var(--TableCell-paddingY) var(--TableCell-paddingX)",backgroundColor:"var(--TableCell-headBackground)",height:"var(--unstable_TableCell-height)",fontWeight:e.vars.fontWeight.lg,borderColor:"var(--TableCell-borderColor)",color:e.vars.palette.text.secondary,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},[b.getHeaderCell()]:{verticalAlign:"bottom","&:first-of-type":{borderTopLeftRadius:"var(--TableCell-cornerRadius, var(--unstable_actionRadius))"},"&:last-of-type":{borderTopRightRadius:"var(--TableCell-cornerRadius, var(--unstable_actionRadius))"}},"& tfoot tr > *":{backgroundColor:`var(--TableCell-footBackground, ${e.vars.palette.background.level1})`,"&:first-of-type":{borderBottomLeftRadius:"var(--TableCell-cornerRadius, var(--unstable_actionRadius))"},"&:last-of-type":{borderBottomRightRadius:"var(--TableCell-cornerRadius, var(--unstable_actionRadius))"}}}),((null==(a=t.borderAxis)?void 0:a.startsWith("x"))||(null==(l=t.borderAxis)?void 0:l.startsWith("both")))&&{[b.getHeaderCell()]:{borderBottomWidth:1,borderBottomStyle:"solid"},[b.getBottomHeaderCell()]:{borderBottomWidth:"var(--Table-headerUnderlineThickness)",borderBottomStyle:"solid"},[b.getBodyCellExceptLastRow()]:{borderBottomWidth:1,borderBottomStyle:"solid"},[b.getFooterCell()]:{borderTopWidth:1,borderTopStyle:"solid"}},((null==(s=t.borderAxis)?void 0:s.startsWith("y"))||(null==(d=t.borderAxis)?void 0:d.startsWith("both")))&&{[`${b.getColumnExceptFirst()}, ${b.getHeaderNestedFirstColumn()}`]:{borderLeftWidth:1,borderLeftStyle:"solid"}},("x"===t.borderAxis||"both"===t.borderAxis)&&{[b.getHeaderCellOfRow(1)]:{borderTopWidth:1,borderTopStyle:"solid"},[b.getBodyCellOfRow(-1)]:{borderBottomWidth:1,borderBottomStyle:"solid"},[b.getFooterCell()]:{borderBottomWidth:1,borderBottomStyle:"solid"}},("y"===t.borderAxis||"both"===t.borderAxis)&&{"& tr > *:first-of-type":{borderLeftWidth:1,borderLeftStyle:"solid"},"& tr > *:last-of-type:not(:first-of-type)":{borderRightWidth:1,borderRightStyle:"solid"}},t.stripe&&{[b.getBodyRow(t.stripe)]:{background:`var(--TableRow-stripeBackground, ${e.vars.palette.background.level1})`,color:e.vars.palette.text.primary}},t.hoverRow&&{[b.getBodyRow()]:{"&:hover":{background:`var(--TableRow-hoverBackground, ${e.vars.palette.background.level2})`}}},t.stickyHeader&&{[b.getHeaderCell()]:{position:"sticky",top:0,zIndex:e.vars.zIndex.table},[b.getHeaderCellOfRow(2)]:{top:"var(--unstable_TableCell-height)"}},t.stickyFooter&&{[b.getFooterCell()]:{position:"sticky",bottom:0,zIndex:e.vars.zIndex.table,color:e.vars.palette.text.secondary,fontWeight:e.vars.fontWeight.lg},[b.getFooterFirstRowCell()]:{bottom:"var(--unstable_TableCell-height)"}}]})),x=i.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"JoyTable"}),{className:i,component:u,children:g,borderAxis:b="xBetween",hoverRow:x=!1,noWrap:A=!1,size:y="md",variant:S="plain",color:I="neutral",stripe:w,stickyHeader:k=!1,stickyFooter:L=!1,slots:R={},slotProps:z={}}=o,T=(0,r.A)(o,p),{getColor:P}=(0,c.cF)(S),V=P(e.color,I),D=(0,n.A)({},o,{borderAxis:b,hoverRow:x,noWrap:A,component:u,size:y,color:V,variant:S,stripe:w,stickyHeader:k,stickyFooter:L}),B=(e=>{const{size:t,variant:o,color:r,borderAxis:n,stickyHeader:i,stickyFooter:a,noWrap:d,hoverRow:c}=e,u={root:["root",i&&"stickyHeader",a&&"stickyFooter",d&&"noWrap",c&&"hoverRow",n&&`borderAxis${(0,l.A)(n)}`,o&&`variant${(0,l.A)(o)}`,r&&`color${(0,l.A)(r)}`,t&&`size${(0,l.A)(t)}`]};return(0,s.A)(u,v,{})})(D),F=(0,n.A)({},T,{component:u,slots:R,slotProps:z}),[M,W]=(0,m.A)("root",{ref:t,className:(0,a.A)(B.root,i),elementType:C,externalForwardedProps:F,ownerState:D});return(0,f.jsx)(h.Ec.Provider,{value:!0,children:(0,f.jsx)(M,(0,n.A)({},W,{children:g}))})})),A=x},4046:(e,t,o)=>{o.d(t,{A:()=>r});const r=o(7953).createContext("md")},3535:(e,t,o)=>{o.d(t,{A:()=>w});var r=o(7166),n=o(3911),i=o(7953),a=o(5218),l=o(6790);var s=o(5102);const d=function(e){const{value:t,defaultValue:o,onChange:r,orientation:a,direction:l,selectionFollowsFocus:d}=e,[c,u]=function({controlled:e,default:t,name:o,state:r="value"}){const{current:n}=i.useRef(void 0!==e),[a,l]=i.useState(t);return[n?e:a,i.useCallback((e=>{n||l(e)}),[])]}({controlled:t,default:o,name:"Tabs",state:"value"}),g=i.useCallback(((e,t)=>{u(t),null==r||r(e,t)}),[r,u]),{subitems:v,contextValue:h}=(0,s.v)(),m=i.useRef((()=>{})),f=i.useCallback((e=>{var t;return null==(t=v.get(e))?void 0:t.id}),[v]),p=i.useCallback((e=>m.current(e)),[]),b=i.useCallback((e=>{m.current=e}),[]);return{contextValue:(0,n.A)({direction:l,getTabId:p,getTabPanelId:f,onSelected:g,orientation:a,registerTabIdLookup:b,selectionFollowsFocus:d,value:c},h)}};var c=o(1432),u=o(5621);function g(e){const{value:t,children:o}=e,{direction:r,getItemIndex:n,onSelected:a,orientation:l,registerItem:d,registerTabIdLookup:g,selectionFollowsFocus:v,totalSubitemCount:h,value:m,getTabId:f,getTabPanelId:p}=t,b=i.useMemo((()=>({getItemIndex:n,registerItem:d,totalSubitemCount:h})),[d,n,h]),C=i.useMemo((()=>({direction:r,getTabId:f,getTabPanelId:p,onSelected:a,orientation:l,registerTabIdLookup:g,selectionFollowsFocus:v,value:m})),[r,f,p,a,l,g,v,m]);return(0,u.jsx)(s.q.Provider,{value:b,children:(0,u.jsx)(c.A.Provider,{value:C,children:o})})}var v=o(8564),h=o(6713),m=o(9552);const f=(0,h.A)("div",{name:"JoySheet",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{var o,r;const i=null==(o=e.variants[t.variant])?void 0:o[t.color],a=(0,m.x)({theme:e,ownerState:t},"borderRadius"),l=(0,m.x)({theme:e,ownerState:t},"bgcolor"),s=(0,m.x)({theme:e,ownerState:t},"backgroundColor"),d=(0,m.x)({theme:e,ownerState:t},"background"),c=(0,v.Yn)(e,`palette.${l}`)||l||(0,v.Yn)(e,`palette.${s}`)||s||d||(null==i?void 0:i.backgroundColor)||(null==i?void 0:i.background)||e.vars.palette.background.surface;return[(0,n.A)({"--ListItem-stickyBackground":c,"--Sheet-background":c},void 0!==a&&{"--List-radius":`calc(${a} - var(--variant-borderWidth, 0px))`,"--unstable_actionRadius":`calc(${a} - var(--variant-borderWidth, 0px))`},{backgroundColor:e.vars.palette.background.surface,position:"relative"}),i,"context"!==t.color&&t.invertedColors&&(null==(r=e.colorInversion[t.variant])?void 0:r[t.color])]}));var p=o(22),b=o(5018),C=o(4046),x=o(8544);function A(e){return(0,x.SX)("MuiTabs",e)}(0,x.WN)("MuiTabs",["root","horizontal","vertical","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","sizeSm","sizeMd","sizeLg"]);var y=o(3418);const S=["children","value","defaultValue","orientation","direction","component","onChange","selectionFollowsFocus","variant","color","size","slots","slotProps"],I=(0,h.A)(f,{name:"JoyTabs",slot:"Root",overridesResolver:(e,t)=>t.root})((({ownerState:e})=>(0,n.A)({},"sm"===e.size&&{"--Tabs-gap":"3px"},"md"===e.size&&{"--Tabs-gap":"4px"},"lg"===e.size&&{"--Tabs-gap":"0.5rem"},{display:"flex",flexDirection:"column"},"vertical"===e.orientation&&{flexDirection:"row",alignItems:"flex-start"}))),w=i.forwardRef((function(e,t){const o=(0,p.A)({props:e,name:"JoyTabs"}),{children:i,value:s,defaultValue:c,orientation:v="horizontal",direction:h="ltr",component:m,variant:f="plain",color:x="neutral",size:w="md",slots:k={},slotProps:L={}}=o,R=(0,r.A)(o,S),{getColor:z}=(0,b.cF)(f),T=z(e.color,x),P=c||(void 0===s?0:void 0),{contextValue:V}=d((0,n.A)({},o,{orientation:v,defaultValue:P})),D=(0,n.A)({},o,{orientation:v,direction:h,variant:f,color:T,size:w}),B=(e=>{const{orientation:t,variant:o,color:r,size:n}=e,i={root:["root",t,o&&`variant${(0,a.A)(o)}`,r&&`color${(0,a.A)(r)}`,n&&`size${(0,a.A)(n)}`]};return(0,l.A)(i,A,{})})(D),F=(0,n.A)({},R,{component:m,slots:k,slotProps:L}),[M,W]=(0,y.A)("root",{ref:t,elementType:I,externalForwardedProps:F,additionalProps:{ref:t,as:m},ownerState:D,className:B.root});return(0,u.jsx)(M,(0,n.A)({},W,{children:(0,u.jsx)(g,{value:V,children:(0,u.jsx)(C.A.Provider,{value:w,children:i})})}))}))},9552:(e,t,o)=>{o.d(t,{x:()=>n});var r=o(3911);const n=({theme:e,ownerState:t},o,n)=>{let i,a={};if(t.sx){!function t(o){"function"==typeof o?t(o(e)):Array.isArray(o)?o.forEach((e=>{"boolean"!=typeof e&&t(e)})):"object"==typeof o&&(a=(0,r.A)({},a,o))}(t.sx);const n=a[o];if("string"==typeof n||"number"==typeof n)if("borderRadius"===o){var l;if("number"==typeof n)return`${n}px`;i=(null==(l=e.vars)?void 0:l.radius[n])||n}else i=n;"function"==typeof n&&(i=n(e))}return i||n}},796:(e,t,o)=>{o.d(t,{A:()=>n});var r=o(7953);const n="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},5243:(e,t,o)=>{var r;o.d(t,{A:()=>l});var n=o(7953);let i=0;const a=(r||(r=o.t(n,2)))["useId".toString()];function l(e){if(void 0!==a){const t=a();return null!=e?e:t}return function(e){const[t,o]=n.useState(e),r=e||t;return n.useEffect((()=>{null==t&&(i+=1,o(`mui-${i}`))}),[t]),r}(e)}}}]);