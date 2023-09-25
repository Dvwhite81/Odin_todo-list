(()=>{"use strict";const t=t=>{document.getElementById(`${t}-modal`).style.display="block"},e=t=>{const e=y("div",{classList:"project-section"});e.setAttribute("project-id",t);const n=c(t),i=y("h3",{textContent:n.name});return e.append(i),a(t).forEach((t=>{const n=(t=>{const e=y("div",{classList:"list-section"});e.setAttribute("list-id",t.id);const n=y("h3",{textContent:`Task: ${t.title}`}),i=y("p",{textContent:`Details: ${t.description}`}),o=y("p",{textContent:`Deadline: ${t.dueDate}`});return e.append(n,i,o),e})(t);e.append(n)})),e},n=t=>{const n=document.getElementById("projects-container");n.innerHTML="",n.append(e(t))},i=()=>{(e=>{if(document.getElementById(`${e}-modal`))return void t(e);const n=y("div",{id:`${e}-modal`,classList:"popUp"}),i=y("form",{id:"form"}),d=y("span",{id:`close-${e}-modal`,classList:"close",textContent:"✕"});d.addEventListener("click",(()=>n.style.display="none"));const s=y("div",{id:"list-inputs"}),p=y("h3",{textContent:"New List"}),l=y("label",{for:"title-input",classList:"bold",textContent:"Title: "}),c=y("input",{type:"text",id:"title-input",name:"title"}),a=y("label",{for:"description-input",classList:"bold",textContent:"Description: "}),u=y("input",{type:"text",id:"description-input",name:"description"}),m=y("label",{for:"duedate-input",classList:"bold",textContent:"Due Date: "}),v=y("input",{type:"date",id:"duedate-input",name:"duedate"});s.append(p,l,c,a,u,m,v);const b=y("div",{id:"priority-inputs"}),g=y("label",{classList:"bold",textContent:"Priority: "}),x=y("input",{type:"radio",id:"priority-low-input",name:"priority",value:"low priority"}),f=y("label",{for:"priority-low-input",textContent:"Low"}),C=y("input",{type:"radio",id:"priority-medium-input",name:"priority",value:"medium priority"}),h=y("label",{for:"priority-medium-input",textContent:"Medium"}),E=y("input",{type:"radio",id:"priority-high-input",name:"priority",value:"high priority"}),L=y("label",{for:"priority-high-input",textContent:"High"}),j=y("label",{for:"project-select",textContent:"Project: "}),w=y("select",{id:"project-select"});r().forEach((t=>{const e=y("option",{textContent:t.name,value:t.id});w.append(e)})),b.append(g,x,f,C,h,E,L),s.append(b,j,w);const B=y("button",{id:"new-list-submit",textContent:"Add List"});s.append(B),i.append(d,s),i.addEventListener("submit",o),n.append(i),document.getElementById("main").append(n)})("list"),t("list")},o=t=>{t.preventDefault();const e=document.querySelector("#project-select"),i=Number(e.value),o=document.getElementById("title-input").value,d=document.getElementById("description-input").value,s=document.getElementById("duedate-input").value,p=document.getElementsByName("priority"),l=Array.from(p).find((t=>t.checked)).value;u([o,d,s,l,i]),n(i),document.querySelector(".popUp").remove()},d=(t,e,n=[])=>({id:t,name:e,lists:n}),s=[],p=d(0,"default project");s.push(p);const l=d(1,"test2");s.push(l);const r=()=>s,c=t=>s.find((e=>e.id===t)),a=t=>c(t).lists,u=t=>{console.log("addlisttoproject info:",t);const[e,n,i,o,d]=t,s=c(d);console.log("project: ",s);const p=a(d);console.log("projectLists: ",p);const l=p.length;console.log("length",l);const r=((t,e,n,i,o,d,s=!1)=>({id:t,title:e,description:n,dueDate:i,priority:o,projectId:d,isComplete:s}))(l,e,n,i,o,d,!1);p.push(r)},m=()=>{const t=y("div",{id:"main"}),e=(()=>{const t=y("div",{id:"main-btn-div"}),e=y("button",{id:"new-project-btn",textContent:"New Project"}),n=(()=>{const t=y("button",{id:"new-list-btn",textContent:"New List"});return t.addEventListener("click",i),t})();return t.append(e,n),t})(),n=y("div",{id:"projects-container"});return t.append(e,n),t},y=(t,e)=>{const n=document.createElement(t);for(const t in e)n[t]=e[t];return n};(()=>{const t=document.getElementById("container");t.append((()=>{const t=y("div",{id:"sidebar"}),e=y("img",{id:"side-logo",src:"/src/images/todo-logo.png"}),i=y("div",{id:"side-title",textContent:"All Projects"}),o=(()=>{const t=y("ul",{id:"side-list"});return r().forEach((e=>{const i=y("li",{classList:"side-list-item"}),o=y("a",{classList:"side-link",textContent:e.name});o.addEventListener("click",(()=>n(e.id))),i.append(o),t.append(i)})),t})();return t.append(e,i,o),t})()),t.append(m()),(()=>{const t=document.getElementById("projects-container");r().forEach((n=>{t.append(e(n.id))}))})()})(),document.getElementById("new-list-btn")})();