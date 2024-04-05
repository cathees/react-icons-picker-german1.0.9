import React from 'react'
import { storiesOf } from '@storybook/react'
import IconPicker, { IconPickerItem } from '../src'
const stories = storiesOf('Picker', module)

// stories.add('IconPicker', () => {
//     const [icon, setIcon] = React.useState('FaUser')
//     const handleChange = (value) => {
//         console.log(value, 'in front')
//         setIcon(value)
//     }
//     return <>
//         <IconPicker
//             value={icon}
//             onChange={handleChange}

//         />
//     </>
// })
stories.add('IconPicker', () => <IconPicker value="FaAdobe"/>)
stories.add('IconPickerItem', () => <IconPickerItem value="FaAdobe" />)
