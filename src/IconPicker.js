import React from 'react';
import PickerModal from './PickerModal';
import * as AllIconsLib from './lib'

const IconPicker = ({
    value: icon,
    onChange,
    modalEmptyContent,
    searchInputPlaceholder,
    defaultIcon,
    pickButtonStyle,
    pickButtonFocusStyle,
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
    modalEmptyWrapperStyle,
}) => {

    const [iconKey, setIconKey] = React.useState(icon || defaultIcon)
    const [iconElement, setIconElement] = React.useState(null)
    const [modalOpen, setModalOpen] = React.useState(false)
    const pickButtonRef = React.useRef()

    React.useEffect(() => {
        setIconKey(icon || defaultIcon)
    }, [icon])
    React.useEffect(() => {
        loadIcon()
    }, [iconKey])

    const loadIcon = async () => {
        const [type] = iconKey.split(/(?=[A-Z])/)
        try {
            // const foundModule = await import('./lib/' + type.toLocaleLowerCase())
            const foundModule = AllIconsLib[type + 'Icons']
            const IconPack = foundModule()
            // const IconPack = foundModule.default()
            const foundIcon = Object.keys(IconPack).find(key => key === iconKey)
            if (!foundIcon) throw new Error(`Could not find ${iconKey}`)
            setIconElement(IconPack[iconKey]())
        } catch (e) {
            if (e.message.includes('Cannot find module')) console.error(`No such ${type} icon type`)
            else console.error(e)
        }
    }
    const pickButtonFocusHandler = () => {
        const target = pickButtonRef.current
        Object.keys(pickButtonFocusStyle).forEach(styleKey => target.style[styleKey] = pickButtonFocusStyle[styleKey])
    }
    const pickButtonBlurHandler = () => {
        const target = pickButtonRef.current
        Object.keys(pickButtonFocusStyle).forEach(styleKey => target.style[styleKey] = 'unset')
        Object.keys(pickButtonStyle).forEach(styleKey => target.style[styleKey] = pickButtonStyle[styleKey])
    }
    const pickButtonClickHandler = () => setModalOpen(!modalOpen)
    const handleOnChange = (value) => {
        if (!onChange) {
            setIconKey(value)
            setModalOpen(false)
            return console.warn('onChange handler is missing')
        }
        onChange(value)
        setModalOpen(false)
    }
    return (
        <div className='reactIconsPickerContainer'>
            <div
                tabIndex={0}
                ref={pickButtonRef}
                style={pickButtonStyle}
                className="pickButton"
                onFocus={pickButtonFocusHandler}
                onBlur={pickButtonBlurHandler}
                onClick={pickButtonClickHandler}
            >
                {iconElement ? iconElement : null}
            </div>
            {modalOpen ?
                <PickerModal
                    setModalOpen={setModalOpen}
                    onChange={handleOnChange}
                    modalEmptyContent={modalEmptyContent}
                    searchInputPlaceholder={searchInputPlaceholder}
                    modalFadeStyle={modalFadeStyle}
                    modalWrapperStyle={modalWrapperStyle}
                    searchBarStyle={searchBarStyle}
                    searchInputStyle={searchInputStyle}
                    searchInputFocusStyle={searchInputFocusStyle}
                    modalContentWrapperStyle={modalContentWrapperStyle}
                    modalIconsWrapperStyle={modalIconsWrapperStyle}
                    modalIconsStyle={modalIconsStyle}
                    modalIconNameStyle={modalIconNameStyle}
                    modalIconsHoverStyle={modalIconsHoverStyle}
                    modalEmptyWrapperStyle={modalEmptyWrapperStyle}
                />
                :
                null
            }
        </div>
    );
};

IconPicker.defaultProps = {
    defaultIcon: 'FaUser',
    pickButtonFocusStyle: {
        borderColor: `#40a9ff`,
        boxShadow: `0 0 0 2px #40a9ff40`
    },
    pickButtonStyle: {
        padding: '15px',
        display: 'inline-block',
        border: '1px solid rgba(0,0,0,0.2)',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: '0.3s ease'
    },
    modalFadeStyle: {
        position: 'fixed',
        zIndex: '10',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `rgba(255,255,255,0.7)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalWrapperStyle: {
        width: '90vw',
        height: '80vh',
        background: 'white',
        boxShadow: `0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)`,
        fontFamily: 'sans-serif',
    },
    searchBarStyle: {
        padding: '30px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        fontSize: '24px',
        color: 'rgba(0,0,0,0.7)'
    },
    searchInputStyle: {
        border: '1px solid rgba(0,0,0,0.2)',
        padding: '8px 12px',
        outline: 'none',
        borderRadius: '4px',
        boxSizing: 'border-box',
        marginLeft: '15px',
        marginRight: '30px',
        width: '100%',
        transition: '0.3s ease'
    },
    searchInputFocusStyle: {
        borderColor: `#40a9ff`,
        boxShadow: `0 0 0 2px #40a9ff40`
    },
    modalContentWrapperStyle: {
        padding: '30px',
        boxSizing: 'border-box',
    },
    modalIconsWrapperStyle: {
        background: 'rgba(0,0,0,0.1)',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '15px',
        gap: '10px',
        overflowY: 'scroll',
        boxSizing: 'border-box',
        maxHeight: '100%'
    },
    modalIconsStyle: {
        width: '90px',
        height: '64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        transition: '0.3s ease',
        fontSize: '20px',
        cursor: 'pointer',
        color: 'black',
        padding: '8px',
        boxSizing: 'border-box'
    },
    modalIconNameStyle: {
        fontSize: '10px',
        textOverflow: 'ellipsis',
        boxSizing: 'border-box',
        overflow: 'hidden',
        width: '100%',
        textAlign: 'center',
        marginTop: '8px',
        opacity: '0.8'
    },
    modalIconsHoverStyle: {
        background: 'rgba(0,0,0,0.8)',
        color: 'white'
    },
    modalEmptyWrapperStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: 'rgba(0,0,0,0.4)',
        textAlign: 'center'
    }
}

export default IconPicker;