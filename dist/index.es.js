// import tranlate from "translate";import e from"react";import*as t from"react-icons/bs";import{BsSearch as o}from"react-icons/bs";import*as r from"react-icons/ai";import{AiOutlineClose as n}from"react-icons/ai";import*as s from"react-icons/bi";import*as a from"react-icons/cg";import*as c from"react-icons/di";import*as l from"react-icons/fa";import*as i from"react-icons/fc";import*as p from"react-icons/fi";import*as m from"react-icons/gi";import*as u from"react-icons/go";import*as d from"react-icons/gr";import*as y from"react-icons/hi";import*as f from"react-icons/im";import*as h from"react-icons/io";import*as S from"react-icons/io5";import*as I from"react-icons/md";import*as b from"react-icons/ri";import*as g from"react-icons/tb";import*as x from"react-icons/ti";import*as E from"react-icons/vsc";import*as k from"react-icons/wi";var C=Object.freeze({__proto__:null,AiIcons:()=>{const{...e}=r;return e},BiIcons:()=>{const{...e}=s;return e},BsIcons:()=>{const{...e}=t;return e},CgIcons:()=>{const{...e}=a;return e},DiIcons:()=>{const{...e}=c;return e},FaIcons:()=>{const{...e}=l;return e},FcIcons:()=>{const{...e}=i;return e},FiIcons:()=>{const{...e}=p;return e},GiIcons:()=>{const{...e}=m;return e},GoIcons:()=>{const{...e}=u;return e},GrIcons:()=>{const{...e}=d;return e},HiIcons:()=>{const{...e}=y;return e},ImIcons:()=>{const{...e}=f;return e},IoIcons:()=>{const{...e}=h;return e},Io5Icons:()=>{const{...e}=S;return e},MdIcons:()=>{const{...e}=I;return e},RiIcons:()=>{const{...e}=b;return e},SiIcons:()=>{const{...e}=I;return e},TbIcons:()=>{const{...e}=g;return e},TiIcons:()=>{const{...e}=x;return e},VscIcons:()=>{const{...e}=E;return e},WiIcons:()=>{const{...e}=k;return e}});const v=({setModalOpen:t,modalEmptyContent:r,searchInputPlaceholder:s,onChange:a,modalFadeStyle:c,modalWrapperStyle:l,searchBarStyle:i,searchInputStyle:p,searchInputFocusStyle:m,modalContentWrapperStyle:u,modalIconsWrapperStyle:d,modalIconsStyle:y,modalIconNameStyle:f,modalIconsHoverStyle:h,modalEmptyWrapperStyle:S})=>{const[I,b]=e.useState(""),[g,x]=e.useState(0),E=e.useRef(),k=e.useRef(),[v,w]=e.useState(null),W=e.useRef(),F=e.useRef();e.useEffect((()=>{if(g){if(!I)return w(null);j()}}),[g]),e.useEffect((()=>{O()}),[]);const O=()=>{const e=E.current,t=e.parentElement.offsetHeight,o=k.current.offsetHeight;e.style.height=t-o+"px"},translateInput = async(input)=>{translation = await translate(input, {from: 'de', to: 'en', engine:'google'})},j=async()=>{const{...e}=C;let t={};Object.keys(e).forEach((o=>{const{...r}=e[o]();t={...t,...r}}));const o={};Object.keys(t).forEach((e=>{e.toLocaleLowerCase().includes(translateInput(I).toLocaleLowerCase())&&(o[e]=t[e])})),w(o)},N=e=>{const t=e.currentTarget;Object.keys(h).forEach((e=>t.style[e]=h[e]))},B=e=>{const t=e.currentTarget;Object.keys(h).forEach((e=>t.style[e]="unset")),Object.keys(y).forEach((e=>t.style[e]=y[e]))};return e.createElement("div",{style:c,className:"modalFade",onClick:e=>e.target===W.current&&t(!1),ref:W},e.createElement("div",{style:l,className:"modalWrapper"},e.createElement("div",{ref:k,style:i,className:"searchBar"},e.createElement(o,{onClick:()=>x(g+1),style:{cursor:"pointer"}}),e.createElement("input",{value:I,onChange:e=>b(e.target.value),onKeyPress:e=>"Enter"===e.key&&x(g+1),ref:F,style:p,className:"searchInput",onFocus:()=>{const e=F.current;Object.keys(m).forEach((t=>e.style[t]=m[t]))},onBlur:()=>{const e=F.current;Object.keys(m).forEach((t=>e.style[t]="unset")),Object.keys(p).forEach((t=>e.style[t]=p[t]))},placeholder:s||''}),e.createElement(n,{onClick:()=>t(!1),style:{cursor:"pointer"}})),e.createElement("div",{ref:E,style:u,className:"modalContentWrapper"},v?e.createElement("div",{style:d,className:"modalIconsWrapper"},Object.keys(v).map((t=>{const o=v[t];return e.createElement("div",{style:y,className:"modalIcons",onClick:()=>a(t),onMouseOver:N,onMouseOut:B,key:t},e.createElement(o,null),e.createElement("span",{style:f,className:"modalIconName"},t))}))):e.createElement("div",{style:S,className:"modalEmptyWrapper"},r||e.createElement(e.Fragment,null,e.createElement("h1",null,"Nach einem Icon suchen..."),e.createElement("h2",null,'und dann "Enter" drücken.'))))))},w=({value:t,onChange:o,modalEmptyContent:r,searchInputPlaceholder:n,defaultIcon:s,pickButtonStyle:a,pickButtonFocusStyle:c,modalFadeStyle:l,modalWrapperStyle:i,searchBarStyle:p,searchInputStyle:m,searchInputFocusStyle:u,modalContentWrapperStyle:d,modalIconsWrapperStyle:y,modalIconsStyle:f,modalIconNameStyle:h,modalIconsHoverStyle:S,modalEmptyWrapperStyle:I})=>{const[b,g]=e.useState(t||s),[x,E]=e.useState(null),[k,w]=e.useState(!1),W=e.useRef();e.useEffect((()=>{g(t||s)}),[t]),e.useEffect((()=>{F()}),[b]);const F=async()=>{const[e]=b.split(/(?=[A-Z])/);try{const t=(0,C[e+"Icons"])();if(!Object.keys(t).find((e=>e===b)))throw new Error(`Could not find ${b}`);E(t[b]())}catch(t){t.message.includes("Cannot find module")?console.error(`No such ${e} icon type`):console.error(t)}};return e.createElement("div",{className:"reactIconsPickerContainer"},e.createElement("div",{tabIndex:0,ref:W,style:a,className:"pickButton",onFocus:()=>{const e=W.current;Object.keys(c).forEach((t=>e.style[t]=c[t]))},onBlur:()=>{const e=W.current;Object.keys(c).forEach((t=>e.style[t]="unset")),Object.keys(a).forEach((t=>e.style[t]=a[t]))},onClick:()=>w(!k)},x||null),k?e.createElement(v,{setModalOpen:w,onChange:e=>{if(!o)return g(e),w(!1),console.warn("onChange handler is missing");o(e),w(!1)},modalEmptyContent:r,searchInputPlaceholder:n,modalFadeStyle:l,modalWrapperStyle:i,searchBarStyle:p,searchInputStyle:m,searchInputFocusStyle:u,modalContentWrapperStyle:d,modalIconsWrapperStyle:y,modalIconsStyle:f,modalIconNameStyle:h,modalIconsHoverStyle:S,modalEmptyWrapperStyle:I}):null)};w.defaultProps={defaultIcon:"FaUser",pickButtonFocusStyle:{borderColor:"#40a9ff",boxShadow:"0 0 0 2px #40a9ff40"},pickButtonStyle:{padding:"15px",display:"inline-block",border:"1px solid rgba(0,0,0,0.2)",borderRadius:"4px",cursor:"pointer",transition:"0.3s ease"},modalFadeStyle:{position:"fixed",zIndex:"10",top:0,left:0,right:0,bottom:0,background:"rgba(255,255,255,0.7)",display:"flex",justifyContent:"center",alignItems:"center"},modalWrapperStyle:{width:"90vw",height:"80vh",background:"white",boxShadow:"0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)",fontFamily:"sans-serif"},searchBarStyle:{padding:"30px",borderBottom:"1px solid rgba(0,0,0,0.1)",display:"flex",alignItems:"center",fontSize:"24px",color:"rgba(0,0,0,0.7)"},searchInputStyle:{border:"1px solid rgba(0,0,0,0.2)",padding:"8px 12px",outline:"none",borderRadius:"4px",boxSizing:"border-box",marginLeft:"15px",marginRight:"30px",width:"100%",transition:"0.3s ease"},searchInputFocusStyle:{borderColor:"#40a9ff",boxShadow:"0 0 0 2px #40a9ff40"},modalContentWrapperStyle:{padding:"30px",boxSizing:"border-box"},modalIconsWrapperStyle:{background:"rgba(0,0,0,0.1)",display:"flex",flexWrap:"wrap",padding:"15px",gap:"10px",overflowY:"scroll",boxSizing:"border-box",maxHeight:"100%"},modalIconsStyle:{width:"90px",height:"64px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"white",transition:"0.3s ease",fontSize:"20px",cursor:"pointer",color:"black",padding:"8px",boxSizing:"border-box"},modalIconNameStyle:{fontSize:"10px",textOverflow:"ellipsis",boxSizing:"border-box",overflow:"hidden",width:"100%",textAlign:"center",marginTop:"8px",opacity:"0.8"},modalIconsHoverStyle:{background:"rgba(0,0,0,0.8)",color:"white"},modalEmptyWrapperStyle:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",color:"rgba(0,0,0,0.4)",textAlign:"center"}};const W=({value:t,defaultIcon:o,...r})=>{const[n,s]=e.useState(t||o),[a,c]=e.useState(null);e.useEffect((()=>{s(t||o)}),[t]),e.useEffect((()=>{l()}),[n]);const l=async()=>{const[e]=n.split(/(?=[A-Z])/);try{const t=(0,C[e+"Icons"])();if(!Object.keys(t).find((e=>e===n)))throw new Error(`Could not find ${n}`);const o=t[n](r);c(o)}catch(t){t.message.includes("Cannot find module")?console.error(`No such ${e} icon type`):console.error(t)}};return a||null};W.defaultProps={defaultIcon:"FaUser"};export{W as IconPickerItem,w as default};

import React from 'react';
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import * as AllIconsLib from '../src/lib'
import translate from "translate"



const PickerModal = ({
    setModalOpen,
    modalEmptyContent,
    searchInputPlaceholder,
    onChange,
    modalFadeStyle,
    modalWrapperStyle,
    searchBarStyle,
    searchInputStyle,
    searchInputFocusStyle,
    modalContentWrapperStyle,
    modalIconsWrapperStyle,
    modalIconsStyle,
    modalIconNameStyle,
    modalIconsHoverStyle,
    modalEmptyWrapperStyle
}) => {

    const [searchValue, setSearchValue] = React.useState('')
    const [watchRequest, setWatchRequest] = React.useState(0)
    const modalContentWrapperRef = React.useRef()
    const searchBarRef = React.useRef()
    const [result, setResult] = React.useState(null)
    const modalFadeRef = React.useRef()
    const searchInputRef = React.useRef()

    React.useEffect(() => {
        if (watchRequest) {
            if (!searchValue) return setResult(null)
            processResult()
        }
    }, [watchRequest])
    React.useEffect(() => {
        calculateModalContentWrapperHeight()
    }, [])
    const calculateModalContentWrapperHeight = () => {
        const target = modalContentWrapperRef.current
        const parent = target.parentElement
        const parentHeight = parent.offsetHeight
        const searchBar = searchBarRef.current
        const searchBarHeight = searchBar.offsetHeight
        target.style.height = parentHeight - searchBarHeight + "px"
    }
    const translateInput = async (input) => {
    const translation = await translate(input, {from: 'de', to: 'en', engine:'google'})
        return translation
    }
    const processResult = async () => {

        const { ...getAllIcons } = AllIconsLib

        let storeAllIcons = {}
        Object.keys(getAllIcons).forEach(iconKey => {
            const { ...tests } = getAllIcons[iconKey]()
            storeAllIcons = { ...storeAllIcons, ...tests }
        })

        const searchResult = {}
        Object.keys(storeAllIcons).forEach(iconName => {
            if (iconName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
                searchResult[iconName] = storeAllIcons[iconName]
            }
        })
        setResult(searchResult)
    }

    const searchInputFocusHandler = () => {
        const target = searchInputRef.current
        Object.keys(searchInputFocusStyle).forEach(styleKey => target.style[styleKey] = searchInputFocusStyle[styleKey])
    }
    const searchInputBlurHandler = () => {
        const target = searchInputRef.current
        Object.keys(searchInputFocusStyle).forEach(styleKey => target.style[styleKey] = 'unset')
        Object.keys(searchInputStyle).forEach(styleKey => target.style[styleKey] = searchInputStyle[styleKey])
    }
    const onKeyPress = (e) => e.key === "Enter" && setWatchRequest(watchRequest + 1)
    const handleModalIconsMouseOver = (e) => {
        const target = e.currentTarget
        Object.keys(modalIconsHoverStyle).forEach(styleKey => target.style[styleKey] = modalIconsHoverStyle[styleKey])
    }
    const handleModalIconsMouseOut = (e) => {
        const target = e.currentTarget
        Object.keys(modalIconsHoverStyle).forEach(styleKey => target.style[styleKey] = "unset")
        Object.keys(modalIconsStyle).forEach(styleKey => target.style[styleKey] = modalIconsStyle[styleKey])
    }
    return (
        <div style={modalFadeStyle} className="modalFade" onClick={(e) => e.target === modalFadeRef.current && setModalOpen(false)} ref={modalFadeRef}>
            <div style={modalWrapperStyle} className="modalWrapper">
                <div ref={searchBarRef} style={searchBarStyle} className="searchBar">
                    <BsSearch onClick={() => setWatchRequest(watchRequest + 1)} style={{ cursor: 'pointer' }} />
                    <input
                        value={searchValue}
                        onChange={(e) => translateInput(e.target.value)}
                        onKeyPress={onKeyPress}
                        ref={searchInputRef}
                        style={searchInputStyle}
                        className="searchInput"
                        onFocus={searchInputFocusHandler}
                        onBlur={searchInputBlurHandler}
                        placeholder={searchInputPlaceholder ? searchInputPlaceholder : 'Nach der Eingabe "Enter" drücken...'}
                    />
                    <AiOutlineClose onClick={() => setModalOpen(false)} style={{ cursor: 'pointer' }} />
                </div>
                <div ref={modalContentWrapperRef} style={modalContentWrapperStyle} className="modalContentWrapper">
                    {result ?
                        <div style={modalIconsWrapperStyle} className="modalIconsWrapper">
                            {Object.keys(result).map(iconKey => {
                                const ThisIcon = result[iconKey]
                                return (
                                    <div style={modalIconsStyle} className="modalIcons" onClick={() => onChange(iconKey)} onMouseOver={handleModalIconsMouseOver} onMouseOut={handleModalIconsMouseOut} key={iconKey}>
                                        <ThisIcon />
                                        <span style={modalIconNameStyle} className="modalIconName">{iconKey}</span>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div style={modalEmptyWrapperStyle} className="modalEmptyWrapper">
                            {modalEmptyContent ? modalEmptyContent : <>
                                <h1>Nach dem Icon suchen...</h1>
                                <h2>nach Eingabe die "Enter" Taste drücken</h2>
                            </>}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PickerModal;