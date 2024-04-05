import React from 'react';
import * as AllIconsLib from './lib'

const IconPickerItem = ({ value: icon, defaultIcon, ...props }) => {
    const [iconKey, setIconKey] = React.useState(icon || defaultIcon)
    const [iconElement, setIconElement] = React.useState(null)

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
            const foundIcon = Object.keys(IconPack).find(key => key === iconKey)
            if (!foundIcon) throw new Error(`Could not find ${iconKey}`)
            const IconElement = IconPack[iconKey](props)
            setIconElement(IconElement)
        } catch (e) {
            if (e.message.includes('Cannot find module')) console.error(`No such ${type} icon type`)
            else {
                console.error(e)
            }
        }
    }
    return iconElement ? iconElement : null
};

IconPickerItem.defaultProps = {
    defaultIcon: 'FaUser'
}

export default IconPickerItem;