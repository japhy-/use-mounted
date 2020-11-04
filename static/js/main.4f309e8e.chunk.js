(this["webpackJsonp@ithreat/use-mounted-example"]=this["webpackJsonp@ithreat/use-mounted-example"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),u=n(2),o=n.n(u),c=(n(10),n(1)),r=({setResult:e})=>{var t=function(){var e=Object(l.useRef)(!1);return Object(l.useEffect)((function(){return e.current=!0,function(){return e.current=!1}}),[]),function(){return e.current}}(),n=Object(l.useState)(!1),u=Object(c.a)(n,2),o=u[0],r=u[1],m=Object(l.useRef)(o),s=Object(l.useState)(0),i=Object(c.a)(s,2),d=i[0],E=i[1];Object(l.useEffect)(()=>{m.current=o},[o]);var p=()=>{if(t())e("CONTROL: mounted component can do state update");else{if(m.current)return void e("SUCCESS: useMounted() prevented unmounted component from attempting state update");e("FAILURE: unmounted component attempted state update")}E(e=>e+1)};return a.a.createElement("blockquote",null,a.a.createElement("div",null,a.a.createElement("button",{onClick:()=>setTimeout(p,3e3)},"Increment Counter (after 3s delay)")," \u2022 Counter = ",d),a.a.createElement("div",null,a.a.createElement("button",{onClick:()=>r(e=>!e)},"Turn ",a.a.createElement("b",null,"useMounted()")," Hook ",o?"Off":"On")," \u2022 useMount() is ",o?"":"not"," being used."))},m=()=>{var e=Object(l.useState)(!0),t=Object(c.a)(e,2),n=t[0],u=t[1],o=Object(l.useState)(""),m=Object(c.a)(o,2),s=m[0],i=m[1];return a.a.createElement("div",null,a.a.createElement("h2",null,"Instructions"),a.a.createElement("ul",null,a.a.createElement("li",null,'Click the "Toggle Example Component" button to show or hide the ',a.a.createElement("b",null,"Example")," component."),a.a.createElement("li",null,'Click the "Increment Counter" button to increment a state variable in the ',a.a.createElement("b",null,"Example")," component after a 3 second delay."),a.a.createElement("li",null,'Click the "Turn useMounted() Hook On/Off" button to toggle the use of the ',a.a.createElement("code",null,"useMounted()")," hook in the ",a.a.createElement("b",null,"Example")," component.")),a.a.createElement("ul",null,a.a.createElement("li",null,'If you click the "Increment Counter" button, and do not click the "Toggle Example Component" button before 3 seconds have elapsed, the "Result" area will give a "CONTROL" message.'),a.a.createElement("li",null,'If you click the "Increment Counter" button, and click the "Toggle Example Component" button before 3 seconds have elapsed, the ',a.a.createElement("b",null,"Example")," component will attempt to update its state while unmounted."),a.a.createElement("ul",null,a.a.createElement("li",null,"If the ",a.a.createElement("code",null,"useMounted()"),' hook is turned on, then when the state update is attempted it will be intercepted, and the "Result" area will give a "SUCCESS" message.'),a.a.createElement("li",null,"If the ",a.a.createElement("code",null,"useMounted()"),' hook is turned off, then when the state update is attempted, the "Result" area will give a "FAILURE" message.'))),a.a.createElement("div",null,a.a.createElement("button",{onClick:()=>u(e=>!e)},"Toggle ",a.a.createElement("b",null,"Example")," Component")),a.a.createElement("div",null,"Result: ",s),a.a.createElement("div",null,a.a.createElement("h3",null,"Example Component:"),n&&a.a.createElement(r,{setResult:i})))};o.a.render(a.a.createElement(m,null),document.getElementById("root"))},3:function(e,t,n){e.exports=n(11)}},[[3,1,2]]]);
//# sourceMappingURL=main.4f309e8e.chunk.js.map