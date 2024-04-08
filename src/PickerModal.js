import React from 'react';
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import * as AllIconsLib from './lib'
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
        translate(input, { from: "de", to: "en" }).then(text => setSearchValue(text))

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