(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{58:function(e,t,a){e.exports=a(70)},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(8),r=a.n(c),l=(a(63),a(13)),i=a(52),s=a(37),u=a(105),d=(a(64),a(106)),m=a(102),f=a(108);var p=function(e){var t=e.addTodo,a=Object(o.useState)({id:"",task:"",completed:!1}),c=Object(s.a)(a,2),r=c[0],i=c[1];return n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r.task.trim()&&(t(Object(l.a)(Object(l.a)({},r),{},{id:Object(f.a)()})),i(Object(l.a)(Object(l.a)({},r),{},{task:""})))}},n.a.createElement(d.a,{label:"Task",name:"task",type:"text",value:r.task,onChange:function(e){i(Object(l.a)(Object(l.a)({},r),{},{task:e.target.value}))}}),n.a.createElement(m.a,{type:"submit"},"submit"))},v=a(101),b=a(103),g=a(107),E=a(104),O=a(51),j=a.n(O);var k=function(e){var t=e.todo,a=e.toggleComplete,o=e.removeTodo;return n.a.createElement(b.a,{style:{display:"flex"}},n.a.createElement(g.a,{checked:t.completed,onClick:function(){a(t.id)}}),n.a.createElement(u.a,{variant:"body1",style:{textDecoration:t.completed?"line-through":null}},t.task),n.a.createElement(E.a,{onClick:function(){o(t.id)}},n.a.createElement(j.a,null)))};var h=function(e){var t=e.todos,a=e.toggleComplete,o=e.removeTodo;return n.a.createElement(v.a,null,t.map((function(e){return n.a.createElement(k,{key:e.id,todo:e,removeTodo:o,toggleComplete:a})})))};var y=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todo-list-todos"));e&&c(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem("react-todo-list-todos",JSON.stringify(a))}),[a]),n.a.createElement("div",{className:"App"},n.a.createElement(u.a,{style:{padding:16},variant:"h1"},"Todo List"),n.a.createElement(p,{addTodo:function(e){c([e].concat(Object(i.a)(a)))}}),n.a.createElement(h,{todos:a,toggleComplete:function(e){c(a.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t})))},removeTodo:function(e){c(a.filter((function(t){return t.id!==e})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.5976f4d1.chunk.js.map