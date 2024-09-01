(this.webpackJsonpmd2pdf=this.webpackJsonpmd2pdf||[]).push([[0],{15:function(e,t,n){e.exports=n(35)},21:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),i=n.n(o),l=(n(20),n(21),n(1)),s=e=>{document.querySelector(".CodeMirror").CodeMirror.setValue(e)},c=e=>a.a.createElement("p",Object.assign({},e,{style:{position:"relative"}}),a.a.createElement("input",{id:"mdFile",type:"file",style:{display:"none"},onChange:e=>{if(e.currentTarget.files.length>0){const t=new FileReader;t.onload=e=>{if(2!==e.target.readyState)return;if(e.target.error)return void alert("Error while reading file");const t=e.target.result;s(t)},t.readAsText(e.target.files[0])}},accept:".md"}),a.a.createElement("label",{htmlFor:"mdFile",style:{position:"absolute",opacity:0,top:0,left:0,right:0,bottom:0,zIndex:2,cursor:"pointer"}}),a.a.createElement("span",{role:"img","aria-label":"upload"},"\ud83d\udcc1"),a.a.createElement("span",null,"Open File"));var d=Object(l.a)(e=>{let{className:t}=e;return a.a.createElement("header",{className:t+" no-print"},a.a.createElement("p",{className:"project"}," Markdown Editor "),a.a.createElement("div",{className:"menu"},a.a.createElement(c,{className:"button upload"}),a.a.createElement("p",{className:"button download",onClick:()=>{let e="";const t=document.querySelector(".preview").querySelector("h1");if(t){e=t.innerText;const n=document.title;document.title=e,window.requestAnimationFrame(()=>{document.title=n})}window.print()}},a.a.createElement("span",{role:"img","aria-label":"download"},"\ud83d\udda8\ufe0f"),a.a.createElement("span",null,"Print as PDF"))))})`
  * {
    box-sizing: border-box;
  }
  flex-shrink: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  user-select: none;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
  background-color: rgb(233, 233, 233);
  display: flex;
  align-items: center;
  height: 40px;
  .project {
    font-weight: bold;
    margin: 5px;
    flex-shrink: 0;
    height: 20px;
  }
  div.menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .button {
      height: 80%;
      margin: 0;
      display: flex;
      align-items: center;
      margin-left: 3px;
      border-radius: 3px;
      border: 1px solid black;
      padding: 10px;
      cursor: pointer;
    }
  }

  /* span.author {
    position: fixed;
    bottom: 2px;
    left: 2px;
    opacity: 0.5;
    color: white;
    height: 20px;
    z-index:99;
  } */
  @keyframes dance {
    0% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-2deg);
    }
  }
`,u=n(3);const m="# Markdown2PDF\n> Awesome Markdown to PDF!\n```diff\n- Online? Upload resume.md to stranger server?\n+ Try Offline Web App!\n```\n\n## How to use md2pdf?\n1. Click button choose `.md` file.\n2. Edit in editor (left panel).\n3. Click **Print as PDF**!\n4. Switch 'Destination' to **Save as PDF**.\n4. **Chrome recommended**\n\n## Tips\n- `Resize` the layout what you want.\n- After click `Print as PDF` button, inverse the checkbox of **'Headers and Footers'**.\n- **\u53cd\u9078\u9801\u9996\u8207\u9801\u5c3e**.\n\n## What's special?\n- You can use <span style=\"color:#0984e3\">html</span> tag!\n<blockquote>Hey I'm in blockquote!</blockquote>\n\n## Code Like this\n```javascript\n// index.js\nfunction Hello(){\n  console.log('World!')\n}\nHello();\n```\n\nor this\n\n```python\n# main.py\ndef awesome():\n    print('awesome!')\nawesome()\n```\n\n";var p;const h=null!==(p=localStorage.getItem("editor.content"))&&void 0!==p?p:m;var g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;const[t,n]=Object(r.useState)(e);return[t,n]};const f=Object(u.Container)(g);var v=Object(l.a)(e=>{let{className:t}=e;return a.a.createElement("div",{className:t,id:"suspense-loading"},a.a.createElement("p",null),a.a.createElement("p",null),a.a.createElement("p",null))})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > p {
    margin: 5px;
    width: 5px;
    height: 15px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: load;
    animation-duration: ${e=>e.duration+"s"};
    &:nth-child(1) {
      animation-delay: ${e=>e.duration/3+"s"};
    }
    &:nth-child(2) {
      animation-delay: ${e=>2*e.duration/3+"s"};
    }
  }
  @keyframes load {
    25% {
      transform: translateY(-10px);
    }
    75% {
      transform: translateY(10px);
    }
  }
`;class w extends a.a.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t})}render(){return this.state.errorInfo?a.a.createElement("div",null,a.a.createElement("p",null,"Error occurs"),a.a.createElement("button",{onClick:()=>{window.location.reload()},style:{background:"none",padding:"5px",borderRadius:"5px",boxShadow:"1px 1px 1px grey",outline:"none",cursor:"pointer"}},"Reload This Page")):this.props.children}}var b=w;n(8);const E=l.a.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  padding: 10px;
  @media print {
    padding: 0;
    overflow-y: hidden;
  }
`,x=Object(r.lazy)(()=>Promise.all([n.e(2),n.e(4)]).then(n.bind(null,286)));var y,k=e=>{let{source:t,children:n}=e;return a.a.createElement(b,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(v,{duration:.5})},a.a.createElement(E,{className:"preview  markdown-body"},a.a.createElement(x,{source:t},n))))},j=n(12);n(28),n(29),n(30);const N=null!==(y=localStorage.getItem("editor.content"))&&void 0!==y?y:m;var O=Object(l.a)(e=>{let{className:t,setText:n}=e;return a.a.createElement(j.UnControlled,{className:t,value:N,options:{mode:"gfm",theme:"darcula",lineNumbers:!0,lineWrapping:!0},onChange:(e,t,r)=>{localStorage.setItem("editor.content",r),n(r)}})})`
  height: 100%;
  .CodeMirror {
    height: 100%;
    line-height: 1.5;
  }
`;var S=Object(l.a)(e=>{let{className:t,setText:n,width:r}=e;return a.a.createElement("div",{style:{width:r},className:t},a.a.createElement(O,{setText:n}))})`
  flex-shrink: 0;
  height: 100%;
  width: 50%;
  color: rgb(204, 204, 204);
`;var C=Object(l.a)(e=>{let{className:t,setDrag:n,setStartX:r}=e;return a.a.createElement("div",{className:t,onMouseDown:e=>{n(!0),(e=>{const{nativeEvent:t}=e,n=t.offsetX;r(n)})(e)}})})`
  width: ${"15px"};
  flex-shrink: 0;
  background-color: ${e=>e.isDrag?"#0984e3":"rgb(233,233,233)"};
  height: 100%;
  color: white;
  text-align: center;
  cursor: col-resize;
  user-select: none;
`;var D=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{};const[n,a]=Object(r.useState)(!1),[o,i]=Object(r.useState)(!1),l=e=>{e.preventDefault(),e.stopPropagation()};return Object(r.useEffect)(()=>{const r=e=>{i(!1),l(e)},o=e=>{i(!0),l(e)},s=e=>{i(!1),l(e),c(e.dataTransfer.files)},c=e=>{if(e&&e[0]&&e[0].name&&/\.(md)$/i.test(e[0].name)&&!n){const n=new FileReader;n.onload=e=>{a(!1),t(e.target.result)},n.readAsText(e[0]),a(!0)}},d=e.current;if(d)return d.addEventListener("dragenter",l,!0),d.addEventListener("dragover",o,!0),d.addEventListener("dragleave",r,!0),d.addEventListener("drop",s,!0),()=>{d.removeEventListener("dragenter",l,!0),d.removeEventListener("dragover",o,!0),d.removeEventListener("dragleave",r,!0),d.removeEventListener("drop",s,!0)}},[e,t,n,o]),[n,o]};var F=Object(l.a)(e=>{let{className:t}=e;const[n,o]=Object(u.useProvided)(f),[i,l]=Object(r.useState)(!1),[c,d]=Object(r.useState)(0),[m,p]=Object(r.useState)(window.innerWidth/2),h=Object(r.useRef)(null),[g,v]=D(h,s);return Object(r.useEffect)(()=>{const e=()=>l(!1);return document.addEventListener("mouseup",e),()=>{document.removeEventListener("mouseup",e)}},[]),a.a.createElement("div",{ref:h,style:{opacity:v||g?.5:1},className:t,onMouseMove:e=>{if(!i)return;const t=e.nativeEvent.pageX;p(t-c)}},a.a.createElement(S,{className:"no-print",width:m,setText:o}),a.a.createElement(C,{className:"no-print",isDrag:i,setDrag:l,setStartX:d}),a.a.createElement(k,null,n))})`
  * {
    box-sizing: border-box;
  }
  height: calc(100% - 40px);
  display: flex;
`;var P=Object(l.a)(e=>{let{className:t}=e;return a.a.createElement("div",{className:t,id:"md2pdf-app"},a.a.createElement(u.Provider,{inject:[f]},a.a.createElement(d,null),a.a.createElement(F,null)))})`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 微軟正黑體, sans-serif;
  @media print {
    &,
    div {
      display: block;
      height: auto;
      /* Reset to normalize for FireFox */
    }
    .no-print,
    .no-print * {
      display: none !important;
    }
  }
`;const L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){}const W=document.getElementById("root");window.addEventListener("drop",e=>e.preventDefault(),!0),window.addEventListener("dragover",e=>e.preventDefault(),!0),i.a.render(a.a.createElement(P,null),W),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="./service-worker.js";L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(n=>{const r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):T(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):T(t,e)})}}()}},[[15,1,3]]]);
//# sourceMappingURL=main.a9d69fdd.chunk.js.map
