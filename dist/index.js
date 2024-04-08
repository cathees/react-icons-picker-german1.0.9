"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-icons/bs"),r=require("react-icons/ai"),o=require("react-icons/bi"),n=require("react-icons/cg"),a=require("react-icons/di"),c=require("react-icons/fa"),l=require("react-icons/fc"),s=require("react-icons/fi"),u=require("react-icons/gi"),i=require("react-icons/go"),d=require("react-icons/gr"),p=require("react-icons/hi"),f=require("react-icons/im"),y=require("react-icons/io"),m=require("react-icons/io5"),h=require("react-icons/md"),b=require("react-icons/ri"),I=require("react-icons/tb"),S=require("react-icons/ti"),g=require("react-icons/vsc"),x=require("react-icons/wi");function E(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function k(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var C=E(e),v=k(t),O=k(r),j=k(o),w=k(n),q=k(a),W=k(c),F=k(l),N=k(s),B=k(u),z=k(i),P=k(d),R=k(p),H=k(f),_=k(y),M=k(m),A=k(h),L=k(b),T=k(I),D=k(S),$=k(g),G=k(x),U=Object.freeze({__proto__:null,AiIcons:()=>{const{...e}=O;return e},BiIcons:()=>{const{...e}=j;return e},BsIcons:()=>{const{...e}=v;return e},CgIcons:()=>{const{...e}=w;return e},DiIcons:()=>{const{...e}=q;return e},FaIcons:()=>{const{...e}=W;return e},FcIcons:()=>{const{...e}=F;return e},FiIcons:()=>{const{...e}=N;return e},GiIcons:()=>{const{...e}=B;return e},GoIcons:()=>{const{...e}=z;return e},GrIcons:()=>{const{...e}=P;return e},HiIcons:()=>{const{...e}=R;return e},ImIcons:()=>{const{...e}=H;return e},IoIcons:()=>{const{...e}=_;return e},Io5Icons:()=>{const{...e}=M;return e},MdIcons:()=>{const{...e}=A;return e},RiIcons:()=>{const{...e}=L;return e},SiIcons:()=>{const{...e}=A;return e},TbIcons:()=>{const{...e}=T;return e},TiIcons:()=>{const{...e}=D;return e},VscIcons:()=>{const{...e}=$;return e},WiIcons:()=>{const{...e}=G;return e}});const Z=({setModalOpen:e,modalEmptyContent:o,searchInputPlaceholder:n,onChange:a,modalFadeStyle:c,modalWrapperStyle:l,searchBarStyle:s,searchInputStyle:u,searchInputFocusStyle:i,modalContentWrapperStyle:d,modalIconsWrapperStyle:p,modalIconsStyle:f,modalIconNameStyle:y,modalIconsHoverStyle:m,modalEmptyWrapperStyle:h})=>{const[b,I]=C.default.useState(""),[S,g]=C.default.useState(0),x=C.default.useRef(),E=C.default.useRef(),[k,v]=C.default.useState(null),O=C.default.useRef(),j=C.default.useRef();C.default.useEffect((()=>{if(S){if(!b)return v(null);q()}}),[S]),C.default.useEffect((()=>{w()}),[]);const w=()=>{const e=x.current,t=e.parentElement.offsetHeight,r=E.current.offsetHeight;e.style.height=t-r+"px"},q=async()=>{const{...e}=U;let t={};Object.keys(e).forEach((r=>{const{...o}=e[r]();t={...t,...o}}));const r={};Object.keys(t).forEach((e=>{e.toLocaleLowerCase().includes(b.toLocaleLowerCase())&&(r[e]=t[e])})),v(r)},W=e=>{const t=e.currentTarget;Object.keys(m).forEach((e=>t.style[e]=m[e]))},F=e=>{const t=e.currentTarget;Object.keys(m).forEach((e=>t.style[e]="unset")),Object.keys(f).forEach((e=>t.style[e]=f[e]))};return C.default.createElement("div",{style:c,className:"modalFade",onClick:t=>t.target===O.current&&e(!1),ref:O},C.default.createElement("div",{style:l,className:"modalWrapper"},C.default.createElement("div",{ref:E,style:s,className:"searchBar"},C.default.createElement(t.BsSearch,{onClick:()=>g(S+1),style:{cursor:"pointer"}}),C.default.createElement("input",{value:b,onChange:e=>I(e.target.value),onKeyPress:e=>"Enter"===e.key&&g(S+1),ref:j,style:u,className:"searchInput",onFocus:()=>{const e=j.current;Object.keys(i).forEach((t=>e.style[t]=i[t]))},onBlur:()=>{const e=j.current;Object.keys(i).forEach((t=>e.style[t]="unset")),Object.keys(u).forEach((t=>e.style[t]=u[t]))},placeholder:n||'Nach der Eingabe "Enter"drücken...'}),C.default.createElement(r.AiOutlineClose,{onClick:()=>e(!1),style:{cursor:"pointer"}})),C.default.createElement("div",{ref:x,style:d,className:"modalContentWrapper"},k?C.default.createElement("div",{style:p,className:"modalIconsWrapper"},Object.keys(k).map((e=>{const t=k[e];return C.default.createElement("div",{style:f,className:"modalIcons",onClick:()=>a(e),onMouseOver:W,onMouseOut:F,key:e},C.default.createElement(t,null),C.default.createElement("span",{style:y,className:"modalIconName"},e))}))):C.default.createElement("div",{style:h,className:"modalEmptyWrapper"},o||C.default.createElement(C.default.Fragment,null,C.default.createElement("h1",null,"Nach einem Icon suchen..."),C.default.createElement("h2",null,'und dann "Enter" drücken.'))))))},K=({value:e,onChange:t,modalEmptyContent:r,searchInputPlaceholder:o,defaultIcon:n,pickButtonStyle:a,pickButtonFocusStyle:c,modalFadeStyle:l,modalWrapperStyle:s,searchBarStyle:u,searchInputStyle:i,searchInputFocusStyle:d,modalContentWrapperStyle:p,modalIconsWrapperStyle:f,modalIconsStyle:y,modalIconNameStyle:m,modalIconsHoverStyle:h,modalEmptyWrapperStyle:b})=>{const[I,S]=C.default.useState(e||n),[g,x]=C.default.useState(null),[E,k]=C.default.useState(!1),v=C.default.useRef();C.default.useEffect((()=>{S(e||n)}),[e]),C.default.useEffect((()=>{O()}),[I]);const O=async()=>{const[e]=I.split(/(?=[A-Z])/);try{const t=(0,U[e+"Icons"])();if(!Object.keys(t).find((e=>e===I)))throw new Error(`Could not find ${I}`);x(t[I]())}catch(t){t.message.includes("Cannot find module")?console.error(`No such ${e} icon type`):console.error(t)}};return C.default.createElement("div",{className:"reactIconsPickerContainer"},C.default.createElement("div",{tabIndex:0,ref:v,style:a,className:"pickButton",onFocus:()=>{const e=v.current;Object.keys(c).forEach((t=>e.style[t]=c[t]))},onBlur:()=>{const e=v.current;Object.keys(c).forEach((t=>e.style[t]="unset")),Object.keys(a).forEach((t=>e.style[t]=a[t]))},onClick:()=>k(!E)},g||null),E?C.default.createElement(Z,{setModalOpen:k,onChange:e=>{if(!t)return S(e),k(!1),console.warn("onChange handler is missing");t(e),k(!1)},modalEmptyContent:r,searchInputPlaceholder:o,modalFadeStyle:l,modalWrapperStyle:s,searchBarStyle:u,searchInputStyle:i,searchInputFocusStyle:d,modalContentWrapperStyle:p,modalIconsWrapperStyle:f,modalIconsStyle:y,modalIconNameStyle:m,modalIconsHoverStyle:h,modalEmptyWrapperStyle:b}):null)};K.defaultProps={defaultIcon:"FaUser",pickButtonFocusStyle:{borderColor:"#40a9ff",boxShadow:"0 0 0 2px #40a9ff40"},pickButtonStyle:{padding:"15px",display:"inline-block",border:"1px solid rgba(0,0,0,0.2)",borderRadius:"4px",cursor:"pointer",transition:"0.3s ease"},modalFadeStyle:{position:"fixed",zIndex:"10",top:0,left:0,right:0,bottom:0,background:"rgba(255,255,255,0.7)",display:"flex",justifyContent:"center",alignItems:"center"},modalWrapperStyle:{width:"90vw",height:"80vh",background:"white",boxShadow:"0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)",fontFamily:"sans-serif"},searchBarStyle:{padding:"30px",borderBottom:"1px solid rgba(0,0,0,0.1)",display:"flex",alignItems:"center",fontSize:"24px",color:"rgba(0,0,0,0.7)"},searchInputStyle:{border:"1px solid rgba(0,0,0,0.2)",padding:"8px 12px",outline:"none",borderRadius:"4px",boxSizing:"border-box",marginLeft:"15px",marginRight:"30px",width:"100%",transition:"0.3s ease"},searchInputFocusStyle:{borderColor:"#40a9ff",boxShadow:"0 0 0 2px #40a9ff40"},modalContentWrapperStyle:{padding:"30px",boxSizing:"border-box"},modalIconsWrapperStyle:{background:"rgba(0,0,0,0.1)",display:"flex",flexWrap:"wrap",padding:"15px",gap:"10px",overflowY:"scroll",boxSizing:"border-box",maxHeight:"100%"},modalIconsStyle:{width:"90px",height:"64px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"white",transition:"0.3s ease",fontSize:"20px",cursor:"pointer",color:"black",padding:"8px",boxSizing:"border-box"},modalIconNameStyle:{fontSize:"10px",textOverflow:"ellipsis",boxSizing:"border-box",overflow:"hidden",width:"100%",textAlign:"center",marginTop:"8px",opacity:"0.8"},modalIconsHoverStyle:{background:"rgba(0,0,0,0.8)",color:"white"},modalEmptyWrapperStyle:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",color:"rgba(0,0,0,0.4)",textAlign:"center"}};const V=({value:e,defaultIcon:t,...r})=>{const[o,n]=C.default.useState(e||t),[a,c]=C.default.useState(null);C.default.useEffect((()=>{n(e||t)}),[e]),C.default.useEffect((()=>{l()}),[o]);const l=async()=>{const[e]=o.split(/(?=[A-Z])/);try{const t=(0,U[e+"Icons"])();if(!Object.keys(t).find((e=>e===o)))throw new Error(`Could not find ${o}`);const n=t[o](r);c(n)}catch(t){t.message.includes("Cannot find module")?console.error(`No such ${e} icon type`):console.error(t)}};return a||null};V.defaultProps={defaultIcon:"FaUser"},exports.IconPickerItem=V,exports.default=K;
